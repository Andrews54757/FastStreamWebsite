import {VirtualAudioNode} from '../../ui/audio/VirtualAudioNode.mjs';
import {FFT} from './fft.mjs';
const IMPULSE_BUFFER_SIZE = 1024;
const FREQUENCY_BUFFER_SIZE = IMPULSE_BUFFER_SIZE * 4;
const SHIFT_AMOUNT = 256;
/* eslint-disable camelcase */
export class ConvolutionXTC {
  constructor(audioContext, options) {
    this.audioContext = audioContext;
    this.cachedOptions = {};
    this.currentConvolver = 0;
    this.fft = new FFT(FREQUENCY_BUFFER_SIZE);
    this.configure(options);
  }
  getInputNode() {
    return this.inputNode;
  }
  getOutputNode() {
    return this.outputNode;
  }
  idft(X) {
    const x = new Float32Array(X.length);
    this.fft.inverseTransform(x, X);
    return this.fft.fromComplexArray(x, new Float32Array(x.length / 2));
  }
  complexMultiply([a, b], [c, d]) {
    return [a * c - b * d, a * d + b * c];
  }
  complexDivide([a, b], [c, d]) {
    const den = c * c + d * d;
    return [(a * c + b * d) / den, (b * c - a * d) / den];
  }
  complexPower([a, b], n) {
    const r = Math.sqrt(a * a + b * b);
    const theta = Math.atan2(b, a);
    const rN = Math.pow(r, n);
    const thetaN = n * theta;
    return [rN * Math.cos(thetaN), rN * Math.sin(thetaN)];
  }
  calculateH(g, omegatc, B) {
    const x1 = [Math.cos(omegatc), Math.sin(omegatc)];
    const x2 = [Math.cos(2 * omegatc), Math.sin(2 * omegatc)];
    const x3 = [Math.cos(3 * omegatc), Math.sin(3 * omegatc)];
    const x4 = [Math.cos(4 * omegatc), Math.sin(4 * omegatc)];
    const gg = g * g;
    const gbb1 = Math.pow(gg + B, 2) + 2*B + 1;
    const den = [gg*x4[0] + gg - x2[0] * gbb1, gg*x4[1] - x2[1] * gbb1];
    const num1 = [gg*x4[0] - (B + 1) * x2[0], gg*x4[1] - (B + 1) * x2[1]];
    const ggb = g*(gg + B);
    const num2 = [g*x1[0] - ggb*x3[0], g*x1[1] - ggb*x3[1]];
    const [a, b] = this.complexDivide(num1, den);
    const [c, d] = this.complexDivide(num2, den);
    return [a, b, c, d];
  }
  rotateBuffer(buffer, amount) {
    if (amount === 0) {
      return;
    }
    // rotate right
    const temp = buffer.slice(-amount);
    buffer.copyWithin(amount, 0, buffer.length - amount);
    buffer.set(temp, 0);
  }
  configure(options) {
    const g = options.g;
    const tc = Math.round(options.tc);
    let y = options.y;
    if (this.cachedOptions.g === g && this.cachedOptions.tc === tc && this.cachedOptions.y === y) {
      return;
    }
    this.cachedOptions = {
      g, tc, y,
    };
    const gg = g * g;
    const n = FREQUENCY_BUFFER_SIZE;
    const H_CIS = new Float32Array(n * 2);
    const H_CROSS = new Float32Array(n * 2);
    const B_P = 0;
    const max_y = 1.0 / (1.0 - g);
    const min_y = Math.max(1.0, Math.sqrt(5 + Math.sqrt(5)) / 2 / Math.sqrt(gg + 1));
    y = Math.max(min_y, y);
    const valid = y <= max_y;
    for (let k = 0; k < n; k++) {
      const omegatc = 2 * Math.PI * k / n * tc;
      const cos = Math.cos(omegatc);
      const cm_I = Math.sqrt(gg - 2*g*cos + 1);
      const cm_II = Math.sqrt(gg + 2*g*cos + 1);
      const sp = Math.max(1/cm_I, 1/cm_II);
      let H;
      if (sp < y || !valid) {
        H = this.calculateH(g, omegatc, B_P);
      } else if (cm_I < cm_II) {
        const B_I = -gg + 2*g*cos + cm_I / y - 1;
        H = this.calculateH(g, omegatc, B_I);
      } else {
        const B_II = -gg - 2*g*cos + cm_II / y - 1;
        H = this.calculateH(g, omegatc, B_II);
      }
      H_CIS[k * 2] = H[0];
      H_CIS[k * 2 + 1] = H[1];
      H_CROSS[k * 2] = H[2];
      H_CROSS[k * 2 + 1] = H[3];
    }
    this.H_CIS = H_CIS;
    this.H_CROSS = H_CROSS;
    this.h_CIS = this.idft(H_CIS);
    this.h_CROSS = this.idft(H_CROSS);
    this.rotateBuffer(this.h_CIS, SHIFT_AMOUNT);
    this.rotateBuffer(this.h_CROSS, SHIFT_AMOUNT);
    if (this.buffer_XTC) {
      this.updateBuffers();
    }
  }
  updateBuffers() {
    this.buffer_XTC.copyToChannel(this.h_CIS.subarray(0, IMPULSE_BUFFER_SIZE), 0);
    this.buffer_XTC.copyToChannel(this.h_CROSS.subarray(0, IMPULSE_BUFFER_SIZE), 1);
    this.buffer_XTC.copyToChannel(this.h_CROSS.subarray(0, IMPULSE_BUFFER_SIZE), 2);
    this.buffer_XTC.copyToChannel(this.h_CIS.subarray(0, IMPULSE_BUFFER_SIZE), 3);
    const current = this.currentConvolver;
    const other = (current + 1) % 2;
    this.convolvers_XTC[other].buffer = this.buffer_XTC;
    if (!this.switchTimeout) {
      this.getInputNode().connect(this.convolvers_XTC[other], 1);
    }
    clearTimeout(this.switchTimeout);
    this.switchTimeout = setTimeout(() => {
      this.getOutputNode().connectFrom(this.convolvers_XTC[other]);
      try {
        this.getInputNode().disconnect(this.convolvers_XTC[current]);
      } catch (e) {
      }
      try {
        this.getOutputNode().disconnectFrom(this.convolvers_XTC[current]);
      } catch (e) {
      }
      this.currentConvolver = other;
      this.switchTimeout = null;
    }, 100);
  }
  async init(inputCrossoverNode) {
    this.inputNode = inputCrossoverNode;
    this.outputNode = new VirtualAudioNode('ConvolutionXTC Output');
    const ctx = this.audioContext;
    // create convolver nodes
    this.buffer_XTC = ctx.createBuffer(4, IMPULSE_BUFFER_SIZE, ctx.sampleRate);
    this.buffer_BYPASS = ctx.createBuffer(1, IMPULSE_BUFFER_SIZE, ctx.sampleRate);
    this.convolvers_XTC = [ctx.createConvolver(), ctx.createConvolver()];
    this.convolver_BYPASS = ctx.createConvolver();
    const convolvers = this.convolvers_XTC.concat([this.convolver_BYPASS]);
    convolvers.forEach((convolver) => {
      convolver.normalize = false;
    });
    const h_BYPASS = new Float32Array(IMPULSE_BUFFER_SIZE);
    h_BYPASS[0] = 1;
    this.rotateBuffer(h_BYPASS, SHIFT_AMOUNT);
    this.buffer_BYPASS.getChannelData(0).set(h_BYPASS);
    this.convolver_BYPASS.buffer = this.buffer_BYPASS;
    this.getInputNode().connect(this.convolver_BYPASS, 0);
    this.getOutputNode().connectFrom(this.convolver_BYPASS);
    this.updateBuffers();
  }
  destroy() {
    clearTimeout(this.switchTimeout);
    this.switchTimeout = null;
    this.getInputNode().disconnect();
    this.convolvers_XTC.forEach((convolver) => {
      convolver.disconnect();
    });
    this.convolver_BYPASS.disconnect();
  }
}
