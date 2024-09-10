export class EnvUtils {
  static hasComputationalResources() {
    // check cpu concurrency
    if (navigator.hardwareConcurrency < 4) {
      return false;
    }
    // check ram
    if (navigator.deviceMemory !== undefined && navigator.deviceMemory < 8) {
      return false;
    }
    return true;
  }
  static isChrome() {
    return navigator.userAgent.indexOf('Chrome') !== -1;
  }
  static isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  static isExtension() {
    return typeof chrome !== 'undefined' && !!chrome?.extension;
  }
  static getVersion() {
    // eslint-disable-next-line prefer-const
    let version = '1.0.0.web';
version = '1.3.27';
    return this.isExtension() ? chrome.runtime.getManifest().version : version;
  }
  static isIncognito() {
    return this.isExtension() ? chrome.extension.inIncognitoContext : false;
  }
  static isMacOS() {
    return navigator.userAgent.indexOf('Mac OS') !== -1;
  }
  static isWebAudioSupported() {
    return !!window.AudioContext;
  }
}
