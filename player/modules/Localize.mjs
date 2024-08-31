import {EnvUtils} from '../utils/EnvUtils.mjs';
const TranslationMap = {
"LANGUAGES": [
    "en",
    "es",
    "ja",
    "ms",
    "ru"
  ],
  "extension_name": [
    "FastStream Video Player",
    "Reproductor de Video FastStream",
    "FastStream Video Player",
    "Pemain Video FastStream",
    "FastStream Video Player"
  ],
  "extension_description": [
    "Stream without buffering. Fix bad video players on the internet.",
    "Transmisión sin almacenamiento en búfer. Soluciona los reproductores de video deficientes en Internet.",
    "バッファリングなしでストリーム。インターネット上の悪質なビデオプレーヤーを修正します。",
    "Strim tanpa penimbalan. Betulkan pemain video yang buruk di Internet.",
    "Потоковая передача без буферизации. Исправляет плохие видеоплееры в интернете."
  ],
  "extension_toggle_label": [
    "Toggle FastStream",
    "Alternar FastStream",
    "FastStream に切り替える",
    "Togol FastStream",
    "Переключить FastStream"
  ],
  "welcome_page_title": [
    "Welcome to FastStream",
    "Bienvenido a FastStream",
    "FastStream へようこそ",
    "Selamat datang ke FastStream",
    "Добро пожаловать в FastStream!"
  ],
  "welcome_page_usage_header": [
    "Usage",
    "Cómo Utilizar",
    "使用方法",
    "Penggunaan",
    "Использование"
  ],
  "welcome_page_usage_content0": [
    "There are four ways to use FastStream",
    "Hay cuatro formas de usar FastStream",
    "FastStream の使用方法は 4 つあります",
    "Terdapat empat cara untuk menggunakan FastStream",
    "Существует четыре способа использования FastStream:"
  ],
  "welcome_page_usage_content1": [
    "You can go to a website with a video stream, and turn faststream on by clicking on the icon. Play the stream and the client will be auto-replaced with FastStream",
    "Puedes ir a un sitio web con una transmisión de video y activar FastStream haciendo clic en el icono. Reproduce la transmisión y el cliente se reemplazará automáticamente con FastStream",
    "動画のある Web サイトを開いてアイコンをクリックで FastStream を ON にする事ができます。動画を再生するとクライアントは自動的に FastStream に置き換わります。",
    "Anda boleh pergi ke tapak web dengan strim video dan hidupkan strim pantas dengan mengklik pada ikon. Mainkan strim dan pelanggan akan digantikan secara automatik dengan FastStream",
    "Вы можете зайти на сайт с потоковым видео и включить FastStream, нажав на значок. При воспроизведении клиент будет автоматически заменён на FastStream."
  ],
  "welcome_page_usage_content2": [
    "You can go to a new tab, and press the extension icon to go to the player.",
    "Puedes ir a una nueva pestaña y presionar el ícono de la extensión para ir al reproductor.",
    "新しいタブを開いて拡張機能のアイコンをクリックでプレーヤーを開く事ができます。",
    "Anda boleh pergi ke tab baharu dan tekan ikon sambungan untuk pergi ke pemain.",
    "Откройте новую вкладку и нажмите на значок расширения, чтобы перейти к плееру."
  ],
  "welcome_page_usage_content3": [
    "If you have the option enabled, go to a mp4/mpd/m3u8 url and the player will play it.",
    "Si tienes la opción habilitada, ve a una url mp4/mpd/m3u8 y el reproductor la reproducirá.",
    "オプションを有効化している場合に、mp4/mpd/m3u8 の URL にアクセスする事でプレーヤーが再生をします。",
    "Jika anda mempunyai pilihan yang didayakan, pergi ke url mp4/mpd/m3u8 dan pemain akan memainkannya.",
    "При включенной опции (см. настройки) перейдите по адресу с mp4/mpd/m3u8, и плеер воспроизведёт его."
  ],
  "welcome_page_usage_content4": [
    "Keep the player open in a new tab and it will collect sources as you browse elsewhere.",
    "Mantén el reproductor abierto en una nueva pestaña y recogerá fuentes mientras navegas en otros lugares.",
    "新しいタブでプレーヤーを開いておく事で、他の場所を参照してソースを取得します。",
    "Pastikan pemain dibuka dalam tab baharu dan ia akan mengumpul sumber semasa anda menyemak imbas di tempat lain.",
    "Держите плеер открытым в новой вкладке, и он будет собирать источники, которые вы просматриваете."
  ],
  "welcome_page_usage_end": [
    "Thank you for installing FastStream! Please let us know if you have any issues or suggestions.",
    "Gracias por instalar FastStream! Háganos saber si tiene algún problema o sugerencia.",
    "FastStream をインストールしていただき感謝します! 問題やご提案がありましたらお知らせください。",
    "Terima kasih kerana memasang FastStream! Sila maklumkan kepada kami jika anda mempunyai sebarang isu atau cadangan.",
    "Благодарим вас за установку FastStream! Пожалуйста, сообщите нам, если у вас возникнут какие-либо вопросы или предложения."
  ],
  "welcome_page_keybinds_header": [
    "Default Keyboard Controls",
    "Controles de Teclado Predeterminados",
    "デフォルトのキーボードコントロール",
    "Kawalan Papan Kekunci Lalai",
    "Сочетания клавиш по умолчанию"
  ],
  "welcome_page_keybinds_content0": [
    "You can change these keybinds in extension settings",
    "Puedes cambiar estas combinaciones de teclas en la configuración de la extensión",
    "これらのキーバインドは拡張機能の設定で変更できます",
    "Anda boleh menukar ikatan kekunci ini dalam tetapan sambungan",
    "Сочетания клавиш можно изменить в настройках расширения"
  ],
  "welcome_page_keybinds_content1": [
    "arrow keys - 1 second seek forward/back",
    "teclas de flecha - avance/retroceso de 1 segundo",
    "矢印キー - 前後の 1 秒間隔のシーク",
    "kekunci anak panah - 1 saat mencari ke hadapan/belakang",
    "клавиша со стрелкой - перемотка на 1 секунду вперёд/назад"
  ],
  "welcome_page_keybinds_content2": [
    "keys - 10 second seek forward/back",
    "teclas - avance/retroceso de 10 segundos",
    "キー - 前後の 10 秒間隔のシーク",
    "kekunci - 10 saat mencari ke hadapan/belakang",
    "клавиша - перемотка на 10 секунд вперёд/назад"
  ],
  "welcome_page_keybinds_content3": [
    "key - Undo seek",
    "clave - Deshacer búsqueda",
    "キー - シークを戻す",
    "kunci - Buat asal carian",
    "клавиша - откатить перемотку"
  ],
  "welcome_page_keybinds_content4": [
    "arrow keys - 10% volume up/down",
    "teclas de flecha - subir/bajar el volumen 10%",
    "矢印キー - 10% の音量を上下",
    "kekunci anak panah - 10% kelantangan atas/bawah",
    "клавиша со стрелкой - изменение громкости на 10%"
  ],
  "welcome_page_keybinds_content5": [
    "- Full screen",
    "- Pantalla completa",
    "- フルスクリーン",
    "- Skrin penuh",
    "- во весь экран"
  ],
  "welcome_page_keybinds_content6": [
    "- Add/decrease concurrent requests",
    "- Añadir/disminuir solicitudes concurrentes",
    "- 同時リクエストの増減",
    "- Tambah/kurangkan permintaan serentak",
    "- увеличение/уменьшение количества одновременных запросов"
  ],
  "welcome_page_keybinds_content7": [
    "- Force retry key - use this to re-attempt failed downloads",
    "- Tecla de reintento forzado - utilízala para volver a intentar descargas fallidas",
    "- 強制再試行キー - これを使用する事で失敗をしたダウンロードを再試行します",
    "- Kekunci cuba semula paksa - gunakan ini untuk mencuba semula muat turun yang gagal",
    "- принудительное повторение, использовать при неудачной загрузке"
  ],
  "welcome_page_keybinds_content8": [
    "- Skip intro/outro if applicable",
    "- Omitir intro/outro si corresponde",
    "- 該当時にイントロ/アウトロをスキップ",
    "- Langkau intro/outro jika berkenaan",
    "- пропустить вступление/окончание, по возможности"
  ],
  "welcome_page_keybinds_content9": [
    "- Hide/show player",
    "- Ocultar/mostrar jugador",
    "- プレーヤーを表示/非表示",
    "- Sembunyikan/tunjukkan pemain",
    "- скрыть/показать плеер"
  ],
  "perms_page_title": [
    "FastStream Permissions",
    "Permisos de FastStream",
    "FastStream の権限",
    "Keizinan FastStream",
    "Разрешения FastStream"
  ],
  "perms_page_about_header": [
    "About the Permissions Required by FastStream",
    "Acerca de los Permisos Requeridos por FastStream",
    "FastStream に必要な権限について",
    "Mengenai Kebenaran yang Diperlukan oleh FastStream",
    "О разрешениях, необходимых FastStream"
  ],
  "perms_page_about_content0": [
    "In order for the extension to function, it needs to be able to have certain permissions. These permissions are only used for basic functionality.",
    "Para que la extensión funcione, necesita tener ciertos permisos. Estos permisos solo se utilizan para la funcionalidad básica.",
    "拡張機能を動作させるには特定の権限を許可する必要があります。これらの権限は基本的な機能のみで使用されます。",
    "Untuk membolehkan sambungan berfungsi, ia perlu mempunyai kebenaran tertentu. Kebenaran ini hanya digunakan untuk fungsi asas.",
    "Для работы расширения требуются определённые разрешения. Эти разрешения используются только для базовой функциональности."
  ],
  "perms_page_about_content1": [
    "FastStream does not collect any data from you. It does not track you. It does not send any data to any servers. It does not even have a server to send data to.",
    "FastStream no recopila ningún dato de ti. No te rastrea. No envía ningún dato a ningún servidor. Ni siquiera tiene un servidor al que enviar datos.",
    "FastStream はユーザーからデータの収集、追跡、サーバーにデータの送信は一切しません。データを送信するサーバーもありません。",
    "FastStream tidak mengumpul sebarang data daripada anda. Ia tidak menjejaki anda. Ia tidak menghantar sebarang data ke mana-mana pelayan. Ia tidak mempunyai pelayan untuk menghantar data.",
    "FastStream не собирает никакие данные. Не отслеживает вас. Не отправляет никакие данные на сервера. И даже нет сервера для отправки данных."
  ],
  "perms_page_about_content2": [
    "Don't trust me? FastStream has its source available on",
    "¿No confías en mí? FastStream tiene su fuente disponible en",
    "信用ができませんか? FastStream のソースは次の場所で入手ができます。",
    "Jangan percaya saya? FastStream mempunyai sumbernya tersedia di",
    "Не верите? Исходный код FastStream доступен на"
  ],
  "perms_page_about_content3": [
    "You can look through the code yourself, or manually install your very own custom build by following the instructions.",
    "Puedes revisar el código tú mismo, o instalar manualmente tu propia compilación personalizada siguiendo las instrucciones.",
    "自分でコードを確認する事もできますし、指示に従って自分だけのカスタムビルドを手動でインストールする事もできます。",
    "Anda boleh melihat sendiri kod tersebut, atau memasang binaan tersuai anda sendiri secara manual dengan mengikut arahan.",
    "Вы можете просмотреть код самостоятельно или установить собственную сборку, следуя инструкциям."
  ],
  "perms_page_breakdown_header": [
    "Breakdown of Permissions",
    "Desglose de Permisos",
    "権限の内訳",
    "Pecahan Keizinan",
    "Требуемые разрешения"
  ],
  "perms_page_breakdown_content0": [
    "Here is a breakdown of the permissions FastStream requires, and why it needs them.",
    "Aquí hay un desglose de los permisos que FastStream requiere y por qué los necesita.",
    "FastStream が必要とする権限とその理由を説明します。",
    "Berikut ialah pecahan kebenaran yang diperlukan oleh FastStream, dan sebab ia memerlukannya.",
    "Здесь описаны разрешения, которые требуются FastStream, и зачем они нужны."
  ],
  "perms_page_breakdown_content1": [
    "Note: The linked examples may refer to an older version of the code, but the gist should be the same overall. The list is not exhaustive, items are ordered by importance.",
    "Nota: Los ejemplos vinculados pueden referirse a una versión anterior del código, pero la esencia debería ser la misma en general. La lista no es exhaustiva, los elementos están ordenados por importancia.",
    "注: リンクされた例では古いバージョンのコードが参照されている場合がありますが、要点は全体的に同じであるはずです。リストはすべてを網羅している訳ではなく、項目の重要度の順で並べられています。",
    "Nota: Contoh yang dipautkan mungkin merujuk kepada versi kod yang lebih lama, tetapi intipatinya mestilah sama secara keseluruhan. Senarai ini tidak lengkap, item dipesan mengikut kepentingan.",
    "Примечание: примеры, на которые даны ссылки, могут относиться к более старой версии кода, но суть в целом должна быть той же. Список не является исчерпывающим, пункты упорядочены по важности."
  ],
  "perms_page_breakdown_perm1h": [
    "Be able to access and modify all websites",
    "Poder acceder y modificar todos los sitios web",
    "すべての Web サイトにアクセスをして変更できる事",
    "Dapat mengakses dan mengubah suai semua tapak web",
    "Иметь доступ и изменять все веб-сайты"
  ],
  "perms_page_breakdown_perm1d": [
    "FastStream needs to be able to access all websites so that it can inject the player into the website directly. It injects a content script into websites you visit in order to:",
    "FastStream necesita poder acceder a todos los sitios web para poder inyectar el reproductor directamente en el sitio web. Inyecta un script de contenido en los sitios web que visitas con el fin de:",
    "FastStream はプレーヤーを Web サイトに直接挿入ができるようにするため、すべての Web サイトにアクセスできるようにする必要があります。次の目的でアクセスをした Web サイトにコンテンツスクリプトを挿入します:",
    "FastStream perlu boleh mengakses semua tapak web supaya ia boleh menyuntik pemain ke dalam laman web secara langsung. Ia menyuntik skrip kandungan ke dalam tapak web yang anda lawati untuk:",
    "FastStream требуется доступ ко всем веб-сайтам, чтобы внедрить плеер непосредственно на сайт. Внедряет контент-скрипт на посещаемые вами сайты, чтобы:"
  ],
  "perms_page_breakdown_perm1r1": [
    "Identify the largest visible video element to replace with the player.",
    "Identifica el elemento de video visible más grande para reemplazarlo con el reproductor.",
    "プレーヤーの置き換え、表示されている最大の動画の要素を特定。",
    "Kenal pasti elemen video terbesar yang boleh dilihat untuk digantikan dengan pemain.",
    "Определить самый большой видимый элемент видео для замены плеера"
  ],
  "perms_page_breakdown_perm1r2": [
    "Enable fullscreen permissions when the player is injected into a frame.",
    "Habilitar permisos de pantalla completa cuando el reproductor se inyecta en un marco.",
    "プレーヤーがフレームに挿入されるときに全画面の権限を有効化。",
    "Dayakan kebenaran skrin penuh apabila pemain disuntik ke dalam bingkai.",
    "Включить разрешение на полноэкранный режим для внедрения плеера во фрейм"
  ],
  "perms_page_breakdown_perm1r3": [
    "Scrape subtitle <track> elements from the page.",
    "Extraer los subtítulos <track> elementos de la página.",
    "字幕の <track> 要素をページから削除。",
    "Kikis Sarikata <track> elemen daripada halaman.",
    "Удалить элементы субтитров <track> со страницы"
  ],
  "perms_page_breakdown_perm2h": [
    "Access the webRequest API",
    "Accede a la API de webRequest",
    "webRequest API にアクセス",
    "Akses API webRequest",
    "Доступ к webRequest API"
  ],
  "perms_page_breakdown_perm2d": [
    "FastStream needs to be able to intercept HTTP requests to video sources in order to:",
    "FastStream necesita poder interceptar las solicitudes HTTP a las fuentes de video para:",
    "FastStream は動画ソースへの HTTP リクエストをインターセプトを可能にする必要があります:",
    "FastStream perlu dapat memintas permintaan HTTP kepada sumber video untuk:",
    "FastStream требуется возможность перехватывать HTTP-запросы к источникам видео, чтобы:"
  ],
  "perms_page_breakdown_perm2r1": [
    "Identify video sources",
    "Identificar fuentes de video",
    "動画のソースを特定",
    "Kenal pasti sumber video",
    "Определить источники видео"
  ],
  "perms_page_breakdown_perm3h": [
    "Access the declarativeNetRequest API",
    "Accede a la API declarativeNetRequest",
    "declarativeNetRequest API へのアクセス",
    "Akses API declarativeNetRequest",
    "Доступ к declarativeNetRequest API"
  ],
  "perms_page_breakdown_perm3d": [
    "FastStream needs to be able to modify HTTP headers of select requests in order to:",
    "FastStream necesita poder modificar las cabeceras HTTP de ciertas solicitudes para:",
    "FastStream は選択されたリクエストの HTTP ヘッダーを変更できるようにする必要があります:",
    "FastStream perlu boleh mengubah suai pengepala HTTP permintaan terpilih untuk:",
    "FastStream требуется возможность изменять HTTP-заголовки выбранных запросов, чтобы:"
  ],
  "perms_page_breakdown_perm3r1": [
    "Override headers for video sources.",
    "Sobrescribir encabezados para fuentes de video.",
    "動画ソースのヘッダーを上書き。",
    "Gantikan pengepala untuk sumber video.",
    "Переопределить заголовки для источников видео"
  ],
  "perms_page_breakdown_perm4h": [
    "Store data on your browser",
    "Almacena datos en tu navegador",
    "ブラウザー上にデータを保存",
    "Simpan data pada penyemak imbas anda",
    "Хранить данные о вашем браузере"
  ],
  "perms_page_breakdown_perm4d": [
    "FastStream needs to be able to store data in your browser so that it can remember your settings.",
    "FastStream necesita poder almacenar datos en tu navegador para que pueda recordar tus configuraciones.",
    "FastStream は、ユーザーの設定を記憶できるようにするためブラウザーにデータを保存可能にする必要があります。",
    "FastStream perlu boleh menyimpan data dalam penyemak imbas anda supaya ia boleh mengingati tetapan anda.",
    "FastStream требуется возможность хранить данные в вашем браузере, чтобы запомнить ваши настройки."
  ],
  "perms_page_breakdown_perm4r1": [
    "General extension options.",
    "Opciones generales de extensión.",
    "拡張機能の一般オプション。",
    "Pilihan sambungan am.",
    "Общие возможности расширения"
  ],
  "perms_page_breakdown_perm5h": [
    "Access the tabs API",
    "Accede a la API de pestañas",
    "Tabs API にアクセス",
    "Akses tab API",
    "Доступ к API вкладок"
  ],
  "perms_page_breakdown_perm5d": [
    "FastStream needs to be able to send messages between players and content scripts in each tab.",
    "FastStream necesita poder enviar mensajes entre reproductores y scripts de contenido en cada pestaña.",
    "FastStream は、各タブ上のプレーヤーとコンテンツスクリプト間でメッセージを送信可能にする必要があります。",
    "FastStream perlu boleh menghantar mesej antara pemain dan skrip kandungan dalam setiap tab.",
    "FastStream требуется возможность отправлять сообщения между плеерами и скриптами контента на каждой вкладке."
  ],
  "perms_page_breakdown_perm5r1": [
    "Sending sources to players from the background script.",
    "Enviando fuentes a los reproductores desde el script de fondo.",
    "バックグラウンドスクリプトからプレーヤーにソースを送信",
    "Menghantar sumber kepada pemain daripada skrip latar belakang.",
    "Отправка источников плееру из фонового скрипта"
  ],
  "perms_page_granted": [
    "Granted",
    "Concedido",
    "許可",
    "Dibenarkan",
    "Предоставлено"
  ],
  "perms_page_notgranted": [
    "Not Granted, click to grant",
    "No Concedido, haga clic para conceder",
    "許可がされていません、クリックで許可をします",
    "Tidak Diberikan, klik untuk memberikan",
    "Не предоставлено, нажмите, чтобы предоставить"
  ],
  "player_needs_interaction": [
    "Interact to enable download acceleration",
    "Interactuar para habilitar la aceleración de descarga",
    "ダウンロードの高速化を有効にするには、動画を再生してください",
    "Berinteraksi untuk mendayakan pecutan muat turun",
    "Взаимодействуйте, чтобы включить ускорение загрузки"
  ],
  "player_skipintro": [
    "Skip Intro",
    "Omitir Intro",
    "イントロをスキップ",
    "Langkau Pengenalan",
    "Пропустить вступление"
  ],
  "player_skipoutro": [
    "Skip Outro",
    "Omitir Outro",
    "アウトロをスキップ",
    "Langkau Lain",
    "Пропустить окончание"
  ],
  "player_nextvideoin": [
    "Next Video in $1s",
    "Siguiente Video en $1s",
    "次のビデオ $1s 後",
    "Video seterusnya dalam $1s",
    "Следующее видео через $1с"
  ],
  "player_hidecontrols": [
    "Hide Controls",
    "Ocultar Controles",
    "コントロールを隠す",
    "Sembunyikan Kawalan",
    "Скрыть элементы управления"
  ],
  "player_loading": [
    "Loading...",
    "Cargando...",
    "読み込み中...",
    "Memuatkan...",
    "Загрузка…"
  ],
  "player_nosource_header": [
    "No source is loaded!",
    "¡No se ha cargado ninguna fuente!",
    "ソースは読み込まれていません!",
    "Tiada sumber dimuatkan!",
    "Источник не загружен!"
  ],
  "player_nosource_instruction1": [
    "Drag and drop a video file to play it.",
    "Arrastra y suelta un archivo de video para reproducirlo.",
    "動画ファイルをドラッグ&ドロップで再生できます。",
    "Seret dan lepaskan fail video untuk memainkannya.",
    "Перетащите видеофайл для воспроизведения."
  ],
  "player_nosource_instruction2p1": [
    "Click",
    "Hacer clic",
    "クリック",
    "Klik",
    "Нажмите"
  ],
  "player_nosource_instruction2p2": [
    "to load sources detected from other tabs.",
    "para cargar fuentes detectadas desde otras pestañas.",
    "他のタブから検出されたソースを読み込み。",
    "untuk memuatkan sumber yang dikesan daripada tab lain.",
    "для загрузки источников, обнаруженных на других вкладках."
  ],
  "player_play_label": [
    "Play video",
    "Reproducir video",
    "ビデオを再生",
    "Mainkan video",
    "Воспроизвести видео"
  ],
  "player_pause_label": [
    "Pause video",
    "Pausar video",
    "ビデオを一時停止",
    "Jeda video",
    "Приостановить видео"
  ],
  "player_next_video_label": [
    "Next video",
    "Siguiente video",
    "次のビデオ",
    "Video seterusnya",
    "Следующее видео"
  ],
  "player_previous_video_label": [
    "Previous video",
    "Video anterior",
    "前のビデオ",
    "Video sebelumnya",
    "Предыдущее видео"
  ],
  "player_volume_label": [
    "Volume is $1%. Use arrow keys to adjust, enter to toggle mute.",
    "El volumen es $1%. Usa las teclas de flecha para ajustar, enter para silenciar.",
    "音量は $1% です。矢印キーで調整、ミュートを切り替えるにはエンターキーを使用します。",
    "Kelantangan $1%. Gunakan anak panah untuk menyesuaikan, enter untuk menogol audio.",
    "Громкость $1%. Используйте стрелки для регулировки, Enter для отключения звука."
  ],
  "player_mute_label": [
    "Mute audio",
    "Silenciar el audio",
    "オーディオを消音",
    "Redamkan audio",
    "Отключить звук"
  ],
  "player_timestamp_label": [
    "Copy URL with timestamp",
    "Marca de tiempo",
    "タイムスタンプ",
    "Cap masa",
    "Время"
  ],
  "player_sourcesbrowser_title": [
    "Sources Browser",
    "Navegador de Fuentes",
    "ソースの参照",
    "Sumber Pelayar",
    "Обзор источников"
  ],
  "player_sourcesbrowser_open_label": [
    "Open sources browser",
    "Abrir navegador de fuentes",
    "ソースの参照を開く",
    "Buka penyemak imbas sumber",
    "Открыть обзор источников"
  ],
  "player_sourcesbrowser_close_label": [
    "Close sources browser",
    "Cerrar navegador de fuentes",
    "ソースの参照を閉じる",
    "Tutup penyemak imbas sumber",
    "Закрыть обзор источников"
  ],
  "player_audioconfig_title": [
    "Audio Configuration",
    "Configuración de Audio",
    "オーディオの設定",
    "Konfigurasi Audio",
    "Конфигурация звука"
  ],
  "player_audioconfig_open_label": [
    "Open audio config window",
    "Abrir ventana de configuración de audio",
    "オーディオ設定ウィンドウを開く",
    "Buka tetingkap konfigurasi audio",
    "Открыть настройки звука"
  ],
  "player_audioconfig_close_label": [
    "Close audio config window",
    "Cerrar ventana de configuración de audio",
    "オーディオ設定ウィンドウを閉じる",
    "Tutup tetingkap konfigurasi audio",
    "Закрыть настройки звука"
  ],
  "player_opensubtitles_title": [
    "OpenSubtitles Search",
    "Búsqueda en OpenSubtitles",
    "OpenSubtitles を検索",
    "Carian OpenSubtitles",
    "Поиск по OpenSubtitles"
  ],
  "player_opensubtitles_close_label": [
    "Close OpenSubtitles search window",
    "Cerrar ventana de búsqueda de OpenSubtitles",
    "OpenSubtitles 検索ウィンドウを閉じる",
    "Tutup tingkap carian OpenSubtitles",
    "Закрыть поиск по OpenSubtitles"
  ],
  "player_opensubtitles_search_placeholder": [
    "Search by title, filename, etc...",
    "Buscar por título, nombre de archivo, etc...",
    "タイトル、ファイル名などで検索...",
    "Cari mengikut tajuk, nama fail, dsb...",
    "Поиск по названию, имени файла и др."
  ],
  "player_opensubtitles_searchbtn": [
    "Search",
    "Buscar",
    "検索",
    "Carian",
    "Поиск"
  ],
  "player_opensubtitles_seasonnum": [
    "Season #",
    "Estación #",
    "シーズン #",
    "Musim #",
    "Сезон #"
  ],
  "player_opensubtitles_episodenum": [
    "Episode #",
    "Episodio #",
    "エピソード #",
    "Episod #",
    "Серия #"
  ],
  "player_opensubtitles_type_all": [
    "All",
    "Todo",
    "すべて",
    "Semua",
    "Все"
  ],
  "player_opensubtitles_type_movie": [
    "Movie",
    "Película",
    "映画",
    "Filem",
    "Фильм"
  ],
  "player_opensubtitles_type_episode": [
    "Episode",
    "Episodio",
    "エピソード",
    "Episod",
    "Сериал"
  ],
  "player_opensubtitles_language": [
    "Language",
    "Idioma",
    "言語",
    "Bahasa",
    "Язык"
  ],
  "player_opensubtitles_year": [
    "Year",
    "Año",
    "年",
    "Tahun",
    "Год"
  ],
  "player_opensubtitles_sortby": [
    "Sort By",
    "Ordenar por",
    "ソート順",
    "Disusun mengikut",
    "Сортировать по"
  ],
  "player_opensubtitles_sortby_downloads": [
    "Downloads",
    "Descargas",
    "ダウンロード",
    "Muat turun",
    "Скачиваниям"
  ],
  "player_opensubtitles_sortby_date": [
    "Upload Date",
    "Fecha de carga",
    "アップロード日時",
    "Tarikh Muat naik",
    "Дате загрузки"
  ],
  "player_opensubtitles_sortby_rating": [
    "Rating",
    "Calificación",
    "評価",
    "Penilaian",
    "Рейтингу"
  ],
  "player_opensubtitles_sortby_votes": [
    "Votes",
    "Votos",
    "投票",
    "Undian",
    "Оценкам"
  ],
  "player_opensubtitles_sort": [
    "Sort",
    "Ordenar",
    "ソート",
    "Disusun",
    "Сортировать"
  ],
  "player_opensubtitles_sort_desc": [
    "Descending",
    "Descendente",
    "下り順",
    "Menurun",
    "По убыванию"
  ],
  "player_opensubtitles_sort_asc": [
    "Ascending",
    "Ascendente",
    "上り順",
    "Menaik",
    "По возрастанию"
  ],
  "player_opensubtitles_searching": [
    "Searching...",
    "Buscando...",
    "検索中...",
    "Mencari...",
    "Поиск…"
  ],
  "player_opensubtitles_error": [
    "Error: $1",
    "Error: $1",
    "エラー: $1",
    "Ralat: $1",
    "Ошибка: $1"
  ],
  "player_opensubtitles_disabled": [
    "Cannot set proper headers! Install the extension to use this feature!",
    "¡No se pueden establecer las cabeceras adecuadas! ¡Instala la extensión para usar esta función!",
    "適切なヘッダーを設定できません! この機能を使用するには拡張機能をインストールしてください!",
    "Tidak dapat menetapkan pengepala yang betul! Pasang sambungan untuk menggunakan ciri ini!",
    "Невозможно установить правильные заголовки! Установите расширение, чтобы использовать эту функцию!"
  ],
  "player_opensubtitles_error_down": [
    "OpenSubtitles is down!",
    "¡OpenSubtitles está caído!",
    "OpenSubtitles はダウンしています!",
    "OpenSubtitles sudah tidak berfungsi!",
    "OpenSubtitles недоступен!"
  ],
  "player_opensubtitles_down_alert": [
    "OpenSubtitles download failed! Their servers are probably down!",
    "¡La descarga de OpenSubtitles ha fallado! ¡Probablemente sus servidores estén caídos!",
    "OpenSubtitles のダウンロードに失敗しました! サーバーがダウンしているかもしれません!",
    "Muat turun OpenSubtitles gagal! Pelayan mereka mungkin tidak berfungsi!",
    "Не удалось загрузить OpenSubtitles! Вероятно, их серверы недоступны!"
  ],
  "player_opensubtitles_noresults": [
    "No results found!",
    "¡No se encontraron resultados!",
    "結果が見つかりません!",
    "Tiada keputusan dijumpai!",
    "Ничего не найдено!"
  ],
  "player_opensubtitles_quota": [
    "OpenSubtitles limits subtitle downloads! You have no more downloads left! Your quota resets in $1",
    "¡OpenSubtitles limita las descargas de subtítulos! ¡No te quedan más descargas! Tu cuota se restablece en $1",
    "OpenSubtitles は字幕のダウンロードを制限します! ダウンロードの残り回数がありません! クォータは、 $1 でリセットされます。",
    "OpenSubtitles mengehadkan muat turun sarikata! Anda tiada lagi muat turun yang tinggal! Kuota anda ditetapkan semula $1",
    "OpenSubtitles ограничивает загрузку субтитров! У вас не осталось загрузок! Ваша квота обнулится через $1"
  ],
  "player_opensubtitles_askopen": [
    "Would you like to open the OpenSubtitles website to download the subtitle file manually?",
    "¿Le gustaría abrir el sitio web de OpenSubtitles para descargar el archivo de subtítulos manualmente?",
    "OpenSubtitles の Web サイトを開いて字幕ファイルを手動でダウンロードしますか?",
    "Adakah anda ingin membuka laman web OpenSubtitles untuk memuat turun fail sarikata secara manual?",
    "Хотите открыть сайт OpenSubtitles, чтобы загрузить субтитры вручную?"
  ],
  "player_subtitlesmenu_open_label": [
    "Open subtitles menu",
    "Abrir menú de subtítulos",
    "字幕メニューを開く",
    "Buka tingkap sarikata",
    "Открыть меню субтитров"
  ],
  "player_subtitlesmenu_close_label": [
    "Close subtitles menu",
    "Cerrar menú de subtítulos",
    "字幕メニューを閉じる",
    "Tutup tingkap sarikata",
    "Закрыть меню субтитров"
  ],
  "player_subtitlesmenu_backbtn": [
    "Back",
    "Volver",
    "戻る",
    "Kembali",
    "Назад"
  ],
  "player_subtitlesmenu_settings": [
    "Subtitle Settings",
    "Configuración de Subtítulos",
    "字幕の設定",
    "Tetapan sarikata",
    "Настройки субтитров"
  ],
  "player_subtitlesmenu_testbtn": [
    "Test Subtitles",
    "Prueba Subtítulos",
    "字幕をテスト",
    "Cuba sarikata",
    "Тестировать субтитры"
  ],
  "player_subtitlesmenu_testbtn_stop": [
    "Stop Testing",
    "Deja de Probar",
    "テストを停止",
    "Henti Percubaan",
    "Прекратить тестирование"
  ],
  "player_subtitlesmenu_uploadbtn": [
    "Upload File",
    "Subir Archivo",
    "ファイルをアップロード",
    "Muatnaik Fail",
    "Загрузить субтитры"
  ],
  "player_subtitlesmenu_urlbtn": [
    "From URL",
    "Desde URL",
    "URL から",
    "Dari URL",
    "Ссылка"
  ],
  "player_subtitlesmenu_urlprompt": [
    "Enter URL",
    "Ingrese URL",
    "URL を入力",
    "Masuk URL",
    "Введите адрес"
  ],
  "player_subtitlesmenu_searchbtn": [
    "Search OpenSubtitles",
    "Buscar en OpenSubtitles",
    "OpenSubtitles を検索",
    "Carian OpenSubtitles",
    "Искать на OpenSubtitles"
  ],
  "player_subtitlesmenu_clearbtn": [
    "Clear Subtitles",
    "Borrar subtítulos",
    "字幕をクリア",
    "Kosongkan Sarikata",
    "Очистить субтитры"
  ],
  "player_subtitlesmenu_settingsbtn": [
    "Subtitle Settings",
    "Configuración de Subtítulos",
    "字幕の設定",
    "Tetapan Sarikata",
    "Настройки субтитров"
  ],
  "player_subtitlesmenu_resynctool_label": [
    "Resync Tool",
    "Herramienta de Resincronización",
    "再同期ツール",
    "Alat Segerakkan Semula",
    "Синхронизация"
  ],
  "player_subtitlesmenu_resynctool_instructions": [
    "Drag subtitles to resync",
    "Arrastra los subtítulos para resincronizar",
    "字幕をドラッグして再同期してください",
    "Seret sarikata untuk disegerakkan semula",
    "Перетащите субтитры для повторной синхронизации"
  ],
  "player_subtitlesmenu_savetool_label": [
    "Save subtitle file",
    "Guardar archivo de subtítulos",
    "字幕ファイルを保存",
    "Simpan fail sarikata",
    "Сохранить файл субтитров"
  ],
  "player_subtitlesmenu_removetool_label": [
    "Remove subtitle track",
    "Eliminar pista de subtítulos",
    "字幕トラックを削除",
    "Alih keluar trek sarikata",
    "Удалить субтитры"
  ],
  "player_subtitlesmenu_shifttool_label": [
    "Shift subtitles $1s",
    "Cambiar subtítulos $1s",
    "$1 の字幕をシフト",
    "Alihkan sarikata $1s",
    "Сдвинуть на $1 с"
  ],
  "player_subtitlesmenu_shifttool_message": [
    "Shifted subtitles $1s",
    "Subtítulos cambiados $1s",
    "字幕を $1s シフト",
    "sarikata dialihkan $1s",
    "Сдвинуть на $1 с"
  ],
  "player_testsubtitle": [
    "This is a test subtitle",
    "Este es un subtítulo de prueba",
    "これはテストの字幕です",
    "Ini adalah sarikata ujian",
    "Это тестовый субтитр"
  ],
  "player_qualitymenu_label": [
    "Video quality",
    "Calidad de video",
    "動画の品質",
    "Kualiti Video ",
    "Качество видео"
  ],
  "player_languagemenu_label": [
    "Language selection",
    "Selección de idioma",
    "言語の選択",
    "Pilihan Bahasa",
    "Выбор языка"
  ],
  "player_languagemenu_video": [
    "Video",
    "Video",
    "ビデオ",
    "Video",
    "Видео"
  ],
  "player_languagemenu_audio": [
    "Audio",
    "Audio",
    "オーディオ",
    "Audio",
    "Аудио"
  ],
  "player_playbackrate_label": [
    "Playback rate",
    "Velocidad de reproducción",
    "再生速度",
    "Kadar main balik",
    "Скорость воспроизведения"
  ],
  "player_settings_title": [
    "FastStream Settings",
    "Configuraciones de FastStream",
    "FastStream の設定",
    "Tetapan FastStream",
    "Настройки FastStream"
  ],
  "player_settings_open_label": [
    "Open settings window",
    "Abrir ventana de configuración",
    "設定ウィンドウを開く",
    "Buka tetingkap tetapan",
    "Открыть окно настроек"
  ],
  "player_settings_close_label": [
    "Close settings window",
    "Cerrar ventana de configuración",
    "設定ウィンドウを閉じる",
    "Tutup tetingkap tetapan",
    "Закрыть окно настроек"
  ],
  "player_savevideo_label": [
    "Save video. hold ALT to save partial video. hold SHIFT to dump buffer.",
    "Guardar video. mantén presionado ALT para guardar un video parcial. mantén presionado SHIFT para vaciar el búfer.",
    "ALT を押しながらで動画の一部を保存します。SHIFT を押しながらでバッファーをダンプします。",
    "Simpan video. tahan ALT untuk menyimpan sebahagian video. tahan SHIFT untuk membuang penimbal.",
    "Сохранить видео. Удерживайте ALT, чтобы сохранить часть видео. Удерживайте SHIFT, чтобы сбросить буфер."
  ],
  "player_screenshot_label": [
    "Take screenshot",
    "Tomar captura de pantalla",
    "スクリーンショットを撮る",
    "Ambil tangkapan skrin",
    "Сделать скриншот"
  ],
  "player_pip_label": [
    "Picture in picture",
    "Imagen en imagen",
    "ピクチャー イン ピクチャー (PiP)",
    "Gambar dalam gambar",
    "Картинка в картинке"
  ],
  "player_fullscreen_label": [
    "Toggle fullscreen",
    "Pantalla completa",
    "フルスクリーン",
    "Skrin penuh",
    "Во весь экран"
  ],
  "player_windowed_fullscreen_label": [
    "Toggle windowed fullscreen",
    "Pantalla completa de ventana",
    "ウィンドウ化されたフルスクリーン",
    "Skrin Penuh Bertingkap",
    "Оконный режим"
  ],
  "player_skip_forward_label": [
    "Skip forward 10s",
    "Saltar adelante 10s",
    "10秒進む",
    "Skip forward 10s",
    "Вперёд на 10 с"
  ],
  "player_skip_backward_label": [
    "Skip backward 10s",
    "Saltar hacia atrás 10s",
    "10秒戻る",
    "Skip backward 10s",
    "Назад на 10 с"
  ],
  "player_more_label": [
    "More tools",
    "Más utilidades",
    "その他のツール",
    "Lebih banyak alat",
    "Другие инструменты"
  ],
  "player_loop_label": [
    "Loop",
    "Repetir",
    "ループ",
    "Gelung",
    "Зациклить"
  ],
  "loop_menu_start": [
    "Start",
    "Inicio",
    "開始",
    "Mula",
    "Начало"
  ],
  "loop_menu_end": [
    "End",
    "Fin",
    "終了",
    "Tamat",
    "Конец"
  ],
  "loop_menu_toggle_enabled": [
    "Loop Enabled",
    "Repetir Habilitado",
    "ループ有効",
    "Gelung Didayakan",
    "Зацикливание включено"
  ],
  "loop_menu_toggle_disabled": [
    "Loop Disabled",
    "Repetir Deshabilitado",
    "ループ無効",
    "Gelung Dilumpuhkan",
    "Зацикливание отключено"
  ],
  "loop_menu_gif_start": [
    "Recording GIF at 4x speed...",
    "Grabando GIF a velocidad 4x...",
    "4倍速でGIFを録画中...",
    "Merakam GIF pada kelajuan 4x...",
    "Запись GIF на скорости 4x…"
  ],
  "loop_menu_gif_end": [
    "Finished recording GIF. Now saving...",
    "Finalizó la grabación del GIF. Ahora guardando...",
    "GIFの録画が終了しました。現在保存中...",
    "Selesai merakam GIF. Sekarang menyimpan...",
    "Запись GIF завершена. Сохранение…"
  ],
  "loop_menu_gif_abort": [
    "Aborted GIF recording!",
    "¡Grabación de GIF abortada!",
    "GIFの録画が中断されました!",
    "Rakaman GIF dihentikan!",
    "Запись GIF прервана!"
  ],
  "loop_menu_gif_progress": [
    "Saving GIF $1%",
    "Guardando GIF $1%",
    "GIFを保存中 $1%",
    "Menyimpan GIF $1%",
    "Сохранение GIF $1%"
  ],
  "loop_menu_gif_finished": [
    "Finished saving GIF!",
    "¡Finalizó el guardado del GIF!",
    "GIFの保存が完了しました!",
    "Selesai menyimpan GIF!",
    "Сохранение GIF завершено!"
  ],
  "player_fragment_failed_singular": [
    "$1 Fragment Failed! Click to retry.",
    "¡$1 fragmento falló! Haz clic para reintentar.",
    "$1 の分割処理に失敗しました! クリックで再試行します。",
    "$1 Serpihan Gagal! Klik untuk mencuba semula.",
    "Ошибка $1 фрагмента! Нажмите для повтора"
  ],
  "player_fragment_failed_plural": [
    "$1 Fragments Failed! Click to retry.",
    "¡$1 fragmentos fallidos! Haz clic para reintentar.",
    "$1 の分割処理に失敗しました! クリックで再試行します。",
    "$1 Serpihan Gagal! Klik untuk mencuba semula.",
    "Ошибка $1 фрагментов! Нажмите для повтора"
  ],
  "player_fragment_allbuffered": [
    "100% Buffered",
    "100% en Buffer",
    "100% バッファー済み",
    "100% Ditimbal",
    "100% буферизация"
  ],
  "player_welcometext": [
    "Welcome to FastStream v$1!",
    "¡Bienvenido a FastStream v$1!",
    "FastStream v$1 へようこそ!",
    "Selamat datang ke FastStream v$1!",
    "Добро пожаловать в FastStream v$1!"
  ],
  "player_nosource_alert": [
    "No source is loaded!",
    "¡No se ha cargado ninguna fuente!",
    "ソースは読み込まれていません!",
    "Tiada sumber dimuatkan!",
    "Источник не загружен!"
  ],
  "player_archive_loading": [
    "Loading archive... $1%",
    "Cargando archivo... $1%",
    "$1% のアーカイブを読み込み中...",
    "Memuatkan arkib... $1%",
    "Загрузка архива… $1%"
  ],
  "player_archive_loaded": [
    "Loaded archive!",
    "¡Archivo cargado!",
    "アーカイブを読み込みました!",
    "Arkib dimuatkan!",
    "Архив загружен!"
  ],
  "player_archive_fail": [
    "Failed to load archive!",
    "¡No se pudo cargar el archivo!",
    "アーカイブの読み込みに失敗しました!",
    "Gagal memuatkan arkib!",
    "Не удалось загрузить архив!"
  ],
  "player_filename_prompt": [
    "Enter a name for the file",
    "Introduzca un nombre para el archivo",
    "ファイル名を入力",
    "Masukkan nama untuk fail",
    "Введите имя файла"
  ],
  "player_screenshot_saving": [
    "Taking screenshot...",
    "Tomando captura de pantalla...",
    "スクリーンショットを撮る...",
    "Mengambil tangkapan skrin...",
    "Делаем скриншот…"
  ],
  "player_screenshot_saved": [
    "Screenshot saved!",
    "¡Captura de pantalla guardada!",
    "スクリーンショットを保存しました!",
    "Tangkapan skrin disimpan!",
    "Скриншот сохранён!"
  ],
  "player_screenshot_fail": [
    "Failed to take screenshot!",
    "¡Error al tomar la captura de pantalla!",
    "スクリーンショットの撮影に失敗しました!",
    "Gagal untuk tangkapan Skrin!",
    "Не удалось сделать скриншот!"
  ],
  "player_savevideo_inprogress_alert": [
    "Already making save!",
    "¡Ya guardando!",
    "すでに保存済みです!",
    "Sudah membuat simpanan!",
    "Уже сохраняю!"
  ],
  "player_savevideo_unsupported": [
    "Saving is not supported for this video!",
    "¡No se admite guardar este video!",
    "この動画は保存に対応していません!",
    "Penyimpanan tidak disokong untuk video ini!",
    "Сохранение этого видео не поддерживается!"
  ],
  "player_savevideo_partial_confirm": [
    "Video has not finished downloading yet! Are you sure you want to save it?",
    "¡El video aún no ha terminado de descargarse! ¿Estás seguro de que quieres guardarlo?",
    "動画のダウンロードが完了していません! 本当に保存をしますか?",
    "Video belum selesai dimuat turun! Adakah anda pasti mahu menyimpannya?",
    "Загрузка видео ещё не завершена! Вы уверены, что хотите сохранить его?"
  ],
  "player_savevideo_incognito_confirm": [
    "Incognito Mode will use RAM to buffer videos. Your computer may not have enough memory to save the entire video!\nAre you sure you want to proceed?",
    "El Modo Incógnito utilizará la RAM para almacenar en búfer los videos. ¡Es posible que tu computadora no tenga suficiente memoria para guardar el video completo!\n¿Estás seguro de que quieres proceder?",
    "シークレットモードでは、RAM を使用して動画をバッファーします。コンピューターに動画全体を保存するのに必要なメモリがない可能性があります。\n続行してもよろしいですか?",
    "Mod Inkognito akan menggunakan RAM untuk menimbal video. Komputer anda mungkin tidak mempunyai memori yang mencukupi untuk menyimpan keseluruhan video!\nAdakah anda pasti mahu meneruskan?",
    "Режим инкогнито будет использовать оперативную память для буферизации видео.\nВашему компьютеру может не хватить памяти для сохранения всего видео!\nВы уверены, что хотите продолжить?"
  ],
  "player_savevideo_reencode": [
    "Saving will require re-encoding. This may take a long time. Do you want to proceed?",
    "Guardar requerirá re-codificación. Esto puede llevar mucho tiempo. ¿Quieres proceder?",
    "保存には再エンコードが必要です。これには時間がかかる場合があります。続行しますか?",
    "Menyimpan akan memerlukan penyulitan semula. Ini mungkin mengambil masa yang lama. Adakah anda mahu meneruskan?",
    "Сохранение потребует повторного кодирования. Это может занять много времени. Вы хотите продолжить?"
  ],
  "player_savevideo_cancelling": [
    "Cancelling save...",
    "Cancelando...",
    "キャンセル中...",
    "Membatalkan simpanan...",
    "Отмена…"
  ],
  "player_savevideo_cancelled": [
    "Save cancelled!",
    "¡Cancelado!",
    "保存がキャンセルされました!",
    "Simpanan dibatalkan!",
    "Сохранение отменено!"
  ],
  "player_savevideo_start": [
    "Making save...",
    "Guardando...",
    "保存中...",
    "Membuat penjimatan...",
    "Сохранение…"
  ],
  "player_savevideo_progress": [
    "Saving $1%",
    "Guardando $1%",
    "$1% を保存中",
    "Menyimpan $1%",
    "Сохранение $1%"
  ],
  "player_savevideo_fail": [
    "Failed to save video!",
    "¡Error al guardar el video!",
    "動画の保存に失敗しました!",
    "Gagal menyimpan video!",
    "Не удалось сохранить видео!"
  ],
  "player_savevideo_failed_ask_archive": [
    "Failed to save video!\nWould you like to archive the player's buffer storage instead?\n- Drag and drop archive files on the player to load it",
    "Error al guardar el video!\n¿Le gustaría archivar el almacenamiento en búfer del reproductor en su lugar?\n- Arrastre y suelte los archivos de archivo en el reproductor para cargarlo",
    "動画の保存に失敗しました!\n代わりにプレーヤーのバッファーストレージをアーカイブしますか?\n- アーカイブファイルをプレーヤーにドラッグ&ドロップで読み込みます",
    "Gagal menyimpan video!\nAdakah anda mahu mengarkibkan storan penimbal pemain sebaliknya?\n- Seret dan lepaskan fail arkib pada pemain untuk memuatkannya",
    "Не удалось сохранить видео!\nХотите вместо этого заархивировать буферное хранилище плеера?\n- Перетащите файлы архива на плеер, чтобы загрузить его"
  ],
  "player_savevideo_complete": [
    "Save complete!",
    "¡Guardado completo!",
    "保存が完了しました!",
    "Selesai disimpan!",
    "Сохранение завершено!"
  ],
  "player_archiver_progress": [
    "Archiving $1%",
    "Archivando $1%",
    "$1% をアーカイブ中",
    "Mengarkib $1%",
    "Архивирование $1%"
  ],
  "player_archiver_saved": [
    "Archive saved!",
    "¡Archivo guardado!",
    "アーカイブを保存しました!",
    "Arkib disimpan!",
    "Архив сохранён!"
  ],
  "player_quality_current": [
    "(current)",
    "(actual)",
    "(現在)",
    "(current)",
    "(текущее)"
  ],
  "player_buffer_incognito_warning": [
    "Not enough space to predownload in incognito mode, will buffer $1",
    "No hay suficiente espacio para predescargar en modo incógnito, se almacenará en búfer $1",
    "シークレットモードでプリダウンロードに必要な空き容量がないため、$1 がバッファーされます",
    "Tidak cukup ruang untuk pramuat turun dalam mod inkognito, akan menimbal $1",
    "Недостаточно места для предзагрузки в режиме инкогнито, будет буферизована $1"
  ],
  "player_buffer_storage_warning": [
    "Video size exceeds limits, will buffer $1",
    "El tamaño del video excede los límites, se almacenará en búfer durante $1",
    "ビデオのサイズが制限を超えています、$1 バッファリングします",
    "Saiz video melebihi had, akan menimbal $1",
    "Размер видео превышает лимит, будет буферизировано $1"
  ],
  "player_error_drm": [
    "Failed to load! DRM is not supported!",
    "¡Error al cargar! ¡DRM no es compatible!",
    "読み込みに失敗しました! DRM には対応していません!",
    "Gagal memuatkan! DRM tidak disokong!",
    "Ошибка загрузки! DRM не поддерживается!"
  ],
  "player_error_load": [
    "Failed to load video!",
    "¡Error al cargar el video!",
    "動画の読み込みに失敗しました!",
    "Gagal memuatkan video!",
    "Не удалось загрузить видео!"
  ],
  "source_copied": [
    "Copied URL to clipboard!",
    "¡URL copiada al portapapeles!",
    "URL をクリップボードにコピーしました!",
    "URL disalin ke papan keratan!",
    "Скопировано!"
  ],
  "player_source_copybtn": [
    "Copy",
    "Copiar",
    "コピー",
    "Salin",
    "Копировать"
  ],
  "player_source_copybtn_label": [
    "Copy source URL, headers, and mode to clipboard",
    "Copiar URL de origen, encabezados y modo al portapapeles",
    "ソースの URL、ヘッダー、モードをクリップボードにコピー",
    "Salin URL sumber, pengepala, dan mod ke papan keratan",
    "Копировать адрес источника, заголовки и режим в буфер обмена"
  ],
  "player_source_copybtn_copied": [
    "Copied!",
    "¡Copiado!",
    "コピー済み!",
    "Disalin!",
    "Скопировано!"
  ],
  "player_source_autodetect": [
    "Auto Detect",
    "Detección Auto",
    "自動検出",
    "Auto Mengesan",
    "Автоопределение"
  ],
  "player_source_direct": [
    "Direct",
    "Directo",
    "ダイレクト",
    "Terus",
    "Прямой"
  ],
  "player_source_accelmp4": [
    "Accelerated MP4",
    "MP4 Acelerado",
    "高速化された MP4",
    "MP4 dipercepatkan",
    "Аппарат. ускорение MP4"
  ],
  "player_source_accelhls": [
    "Accelerated HLS",
    "HLS Acelerado",
    "高速化された HLS",
    "HLS dipercepatkan",
    "Аппарат. ускорение HLS"
  ],
  "player_source_acceldash": [
    "Accelerated DASH",
    "DASH Acelerado",
    "高速化された DASH",
    "DASH dipercepatkan",
    "Аппарат. ускорение DASH"
  ],
  "player_source_accelyt": [
    "Accelerated YouTube",
    "YouTube Acelerado",
    "高速化された YouTube",
    "YouTube dipercepatkan",
    "Аппарат. ускорение YouTube"
  ],
  "player_source_mode": [
    "Mode",
    "Modo",
    "モード",
    "Mod",
    "Режим"
  ],
  "player_source_url_placeholder": [
    "Source URL",
    "URL de origen",
    "ソースの URL",
    "Sumber URL",
    "Адрес источника"
  ],
  "player_source_headerbtn": [
    "Header Override ($1)",
    "Anulación de Encabezado ($1)",
    "ヘッダーを上書き ($1)",
    "Tajuk diganti ($1)",
    "Переопределение заголовка ($1)"
  ],
  "player_source_headerbtn_label": [
    "Toggle header override input",
    "Alternar entrada de anulación de encabezado",
    "ヘッダー上書き入力へ切り替え",
    "Togol input ganti pengepala",
    "Ввод переопределения заголовка"
  ],
  "player_source_headerbtn_disabled": [
    "Header Override (Extension Only)",
    "Anulación de Encabezado (Solo Extensión)",
    "ヘッダーを上書き (拡張機能のみ)",
    "Tajuk diganti (Sambungan Sahaja)",
    "Переопределение заголовка (Только расширение)"
  ],
  "player_source_playbtn": [
    "Play",
    "Reproducir",
    "再生",
    "Main",
    "Воспроизвести"
  ],
  "player_source_playbtn_playing": [
    "Playing",
    "Reproduciendo",
    "再生中",
    "Bermain",
    "Воспроизведение"
  ],
  "player_source_playbtn_loading": [
    "Loading...",
    "Cargando...",
    "読み込み中...",
    "Memuatkan...",
    "Загрузка…"
  ],
  "player_source_deletebtn": [
    "Delete",
    "Borrar",
    "削除",
    "Hapus",
    "Удалить"
  ],
  "player_source_headers_label": [
    "Header override input",
    "Entrada de anulación de encabezado",
    "ヘッダーの上書き入力",
    "Input mengatasi pengepala",
    "Ввод переопределения заголовка"
  ],
  "player_source_headers_placeholder": [
    "Header-Name: Header Value\nHeader2-Name: Header2 Value",
    "Nombre-de-Encabezado: Valor del Encabezado\nNombre-de-Encabezado2: Valor del Encabezado2",
    "ヘッダー名: ヘッダーの値\nヘッダー2の名: ヘッダー2の値",
    "Nama Pengepala: Nilai Pengepala\nNama Pengepala2: Nilai Pengepala2",
    "Имя заголовка: Значение заголовка\nИмя заголовка2: Значение заголовка2"
  ],
  "player_source_nonelisted": [
    "No Sources Listed",
    "No Se Enumeran Fuentes",
    "ソースの一覧がありません",
    "Tiada Senarai Sumber",
    "Нет источников"
  ],
  "player_source_onelisted": [
    "1 Source Listed",
    "1 Fuente Listada",
    "1 件のソースの一覧",
    "1 Senarai Sumber",
    "1 источник в списке"
  ],
  "player_source_multilisted": [
    "$1 Sources Listed",
    "$1 Fuentes Listadas",
    "$1 件のソースの一覧",
    "$1 Senarai Sumber",
    "$1 источников в списке"
  ],
  "player_source_addbtn": [
    "Add Source",
    "Añadir Fuente",
    "ソースを追加",
    "Masukkan Sumber",
    "Добавить источник"
  ],
  "player_source_clearbtn": [
    "Clear Sources",
    "Borrar Fuentes",
    "ソースをクリア",
    "Kosongkan Sumber",
    "Очистить источники"
  ],
  "player_audioconfig_duplicate_profile": [
    "(loaded from file on $1)",
    "(cargado desde el archivo en $1)",
    "($1 のファイルから読み込み済み)",
    "(dimuatkan daripada fail pada $1)",
    "(импортирован из файла $1)"
  ],
  "player_audioconfig_create_profile": [
    "Create new profile",
    "Crear nuevo perfil",
    "新規プロファイルを作成",
    "Ciptakan profil baru",
    "Создать новый профиль"
  ],
  "player_audioconfig_import_profile": [
    "Import profiles from file",
    "Importar perfiles desde archivo",
    "ファイルからプロファイルをインポート",
    "Import profil daripada fail",
    "Импорт профиля из файла"
  ],
  "player_audioconfig_import_invalid": [
    "Invalid profile file",
    "Archivo de perfil inválido",
    "無効なプロファイルファイル",
    "Fail profil tidak sah",
    "Недопустимый файл профиля"
  ],
  "player_audioconfig_profile": [
    "Profile",
    "Perfil",
    "プロファイル",
    "Profil",
    "Профиль"
  ],
  "player_audioconfig_profile_unnamed": [
    "Unnamed Profile",
    "Perfil sin Nombre",
    "無題のプロファイル",
    "Profil Tanpa Nama",
    "Безымянный профиль"
  ],
  "player_audioconfig_profile_load": [
    "Load Profile",
    "Cargar Perfil",
    "プロファイルを読み込む",
    "Muat Profile",
    "Загрузить профиль"
  ],
  "player_audioconfig_profile_loaded": [
    "Loaded Profile!",
    "¡Perfil cargado!",
    "プロファイルを読み込みました!",
    "Profil Dimuatkan!",
    "Профиль загружен!"
  ],
  "player_audioconfig_profile_save": [
    "Save Profile",
    "Guardar Perfil",
    "プロファイルを保存",
    "Simpan Profil",
    "Сохранить профиль"
  ],
  "player_audioconfig_profile_saving": [
    "Saving...",
    "Guardando...",
    "保存中...",
    "Menyimpan...",
    "Сохранение…"
  ],
  "player_audioconfig_profile_saved": [
    "Saved Profile!",
    "¡Perfil Guardado!",
    "プロファイルを保存しました!",
    "Profil Disimpan!",
    "Профиль сохранён!"
  ],
  "player_audioconfig_profile_download": [
    "Download Profile",
    "Descargar Perfil",
    "プロファイルをダウンロード",
    "Muat turun Profil",
    "Скачать профиль"
  ],
  "player_audioconfig_profile_downloaded": [
    "Downloaded!",
    "¡Descargado!",
    "ダウンロードしました!",
    "Dimuat turun!",
    "Скачан!"
  ],
  "player_audioconfig_profile_delete": [
    "Delete",
    "Borrar",
    "削除",
    "Hapus",
    "Удалить"
  ],
  "player_audioconfig_profile_deleting": [
    "Deleting...",
    "Borrando...",
    "削除中...",
    "Menghapus...",
    "Удаление…"
  ],
  "player_audioconfig_profile_deleted": [
    "Deleted!",
    "¡Borrado!",
    "削除しました!",
    "Dihapuskan!",
    "Удалён!"
  ],
  "audiomixer_title": [
    "Audio Channel Mixer",
    "Mezclador de Canales de Audio",
    "オーディオチャンネルミキサー",
    "Pengadun Saluran Audio",
    "Микшер аудиоканала"
  ],
  "audiomixer_volume_master_handle_label": [
    "$1 gain is $2 dB. Use arrows to adjust. Press M to toggle mono",
    "Ganancia de $1 es $2 dB. Usa las flechas para ajustar. Presiona M para alternar mono",
    "$1 のゲインは $2 dB です。矢印キーで調整します。M キーでモノラルを切り替えます",
    "$1 gain is $2 dB. Gunakan anak panah untuk menyesuaikan. Tekan M untuk mengalihkan mono",
    "$1 усиление $2 dB. Используйте стрелки для регулировки. Нажмите M, чтобы переключить моно"
  ],
  "audiomixer_volume_handle_label": [
    "$1 gain is $2 dB. Use arrows to adjust. Press M to toggle mute",
    "Ganancia de $1 es $2 dB. Usa las flechas para ajustar. Presiona M para alternar silencio",
    "$1 のゲインは $2 dB です。矢印キーで調整します。M キーでミュートを切り替えます",
    "$1 gain is $2 dB. Gunakan anak panah untuk menyesuaikan. Tekan M untuk mengalihkan bisu",
    "$1 усиление $2 dB. Используйте стрелки для регулировки. Нажмите M, чтобы переключить отключение звука"
  ],
  "audiomixer_solo_label": [
    "Solo",
    "Solo",
    "ソロ",
    "Solo",
    "Соло"
  ],
  "audiomixer_mute_label": [
    "Mute",
    "Silenciar",
    "消音",
    "Bisu",
    "Отключить звук"
  ],
  "audiomixer_mono": [
    "Mono",
    "Mono",
    "モノ",
    "Mono",
    "Моно"
  ],
  "audiomixer_dynamics_label": [
    "Edit dynamics of channel",
    "Editar dinámica del canal",
    "チャンネルのダイナミクスを編集",
    "Edit dinamik saluran",
    "Изменить динамику канала"
  ],
  "audiocrosstalk_title": [
    "Audio Crosstalk Correction",
    "Corrección de Crosstalk de Audio",
    "オーディオクロストーク補正",
    "Audio Crosstalk Correction",
    "Коррекция перекрёстных помех"
  ],
  "audiocrosstalk_enabled": [
    "Crosstalk Correction Enabled",
    "Corrección de Crosstalk Habilitada",
    "クロストーク補正有効",
    "Crosstalk Correction Enabled",
    "Коррекция перекрёстных помех включена"
  ],
  "audiocrosstalk_disabled": [
    "Crosstalk Correction Disabled",
    "Corrección de Crosstalk Deshabilitada",
    "クロストーク補正無効",
    "Crosstalk Correction Disabled",
    "Коррекция перекрёстных помех отключена"
  ],
  "audiocrosstalk_decaygain": [
    "Decay",
    "Decaimiento",
    "減衰",
    "Decay",
    "Затухание"
  ],
  "audiocrosstalk_colorgain": [
    "Max Coloration",
    "Coloración Máxima",
    "色付け",
    "Max Coloration",
    "Усиление цвета"
  ],
  "audiocrosstalk_microdelay": [
    "Delta T",
    "Delta T",
    "Delta T",
    "Delta T",
    "Дельта T"
  ],
  "audiocrosstalk_lowbypass": [
    "Low Bypass",
    "Bypass Bajo",
    "低周波バイパス",
    "Low Bypass",
    "Низкий байпас"
  ],
  "audiocrosstalk_highbypass": [
    "High Bypass",
    "Bypass Alto",
    "高周波バイパス",
    "High Bypass",
    "Высокий байпас"
  ],
  "audiocrosstalk_speakerdistance": [
    "Speaker Distance",
    "Distancia Entre Altavoz",
    "スピーカー間の距離",
    "Speaker Distance",
    "Расстояние до динамика"
  ],
  "audiocrosstalk_headdistance": [
    "Head Distance",
    "Distancia de la Cabeza",
    "ヘッド間の距離",
    "Head Distance",
    "Расстояние до головы"
  ],
  "audiocompressor_title": [
    "Audio Compressor",
    "Compresor de Audio",
    "オーディオコンプレッサー",
    "Audio Compressor",
    "Компрессор"
  ],
  "audiocompressor_enabled": [
    "Compressor Enabled",
    "Compresor Habilitado",
    "コンプレッサー有効",
    "Compressor Enabled",
    "Компрессор включен"
  ],
  "audiocompressor_disabled": [
    "Compressor Disabled",
    "Compresor Desactivado",
    "コンプレッサー無効",
    "Compressor Disabled",
    "Компрессор отключен"
  ],
  "audiocompressor_threshold": [
    "Threshold",
    "Threshold",
    "スレッショルド",
    "Threshold",
    "Порог"
  ],
  "audiocompressor_knee": [
    "Knee",
    "Knee",
    "ニー",
    "Knee",
    "Колено"
  ],
  "audiocompressor_ratio": [
    "Ratio",
    "Ratio",
    "レシオ",
    "Ratio",
    "Степень"
  ],
  "audiocompressor_attack": [
    "Attack",
    "Attack",
    "アタック",
    "Attack",
    "Атака"
  ],
  "audiocompressor_release": [
    "Release",
    "Release",
    "リリース",
    "Release",
    "Восстановление"
  ],
  "audiocompressor_gain": [
    "Gain",
    "Ganancia",
    "ゲイン",
    "Gain",
    "Усиление"
  ],
  "audioeq_title": [
    "Audio Equalizer",
    "Ecualizador de Audio",
    "オーディオイコライザー",
    "Audio Equalizer",
    "Эквалайзер"
  ],
  "audioeq_instructions": [
    "Double click to change type",
    "Haz doble clic para cambiar el tipo",
    "ダブルクリックでタイプを変更",
    "Double click to change type",
    "Двойной клик для изменения типа"
  ],
  "audioeq_gain": [
    "Gain: $1dB",
    "Ganancia: $1dB",
    "ゲイン: $1dB",
    "Gain: $1dB",
    "Усиление: $1dB"
  ],
  "audioeq_qscroll": [
    "Scroll to change Q",
    "Desplázate para cambiar Q",
    "スクロールで Q を変更",
    "Scroll to change Q",
    "Прокрутите, чтобы изменить Q"
  ],
  "options_title": [
    "FastStream Options",
    "Configuraciones de FastStream",
    "FastStream のオプション",
    "FastStream Options",
    "Параметры FastStream"
  ],
  "options_promo_header": [
    "Enjoy FastStream? Leave a review!",
    "¿Te gusta FastStream? ¡Deja una reseña!",
    "FastStream にご満足いただけましたか? 評価をお願いします!",
    "Enjoy FastStream? Leave a review!",
    "Понравился FastStream? Оставьте отзыв!"
  ],
  "options_promo_body": [
    "FastStream is a hobby project maintained by volunteers. We appreciate your feedback as it helps us to know where to improve. Please feel free tell us:",
    "FastStream es un proyecto de hobby mantenido por voluntarios. Agradecemos tus comentarios ya que nos ayudan a saber dónde mejorar. Por favor, no dudes en comentarnos:",
    "FastStream はボランティアによって維持されている趣味なプロジェクトです。改善すべき事を知るためにフィードバックをいただければ幸いです。お気軽にお申し付けください:",
    "FastStream is a hobby project maintained by volunteers. We appreciate your feedback as it helps us to know where to improve. Please feel free tell us:",
    "FastStream - это хобби-проект, поддерживаемый добровольцами. Мы ценим ваши отзывы, так как они помогают понять, что можно улучшить. Не стесняйтесь, расскажите нам:"
  ],
  "options_promo_l1": [
    "How you use it",
    "Cómo lo usas",
    "使用方法",
    "How you use it",
    "Как вы используете расширение"
  ],
  "options_promo_l2": [
    "Any bugs you encounter",
    "Cualquier error que encuentres",
    "バグに遭遇した場合",
    "Any bugs you encounter",
    "О проблемах, с которыми вы столкнулись"
  ],
  "options_promo_l3": [
    "Feature requests",
    "Solicitudes de características",
    "機能のリクエスト",
    "Feature requests",
    "Запросить функцию"
  ],
  "options_promo_end": [
    "We also take accessibility very seriously. If you need accommodations that are lacking in the current version, please make a request and we will work on it ASAP.",
    "También tomamos la accesibilidad muy en serio. Si necesitas adaptaciones que faltan en la versión actual, haz una solicitud y trabajaremos en ello lo antes posible.",
    "私たちはアクセシビリティについても非常に重視をしています。現在のバージョンに不足している機能があった場合は、リクエストをしてください。できるだけ早く対応をします。",
    "We also take accessibility very seriously. If you need accommodations that are lacking in the current version, please make a request and we will work on it ASAP.",
    "Также мы серьёзно относимся к удобству использования. Если вам нужны дополнительные возможности, которых нет в текущей версии, отправьте запрос, и мы поработаем над ними."
  ],
  "options_promo_rate": [
    "OK I'll review FastStream",
    "OK, revisaré FastStream",
    "OK、FastStream を評価する",
    "OK I'll review FastStream",
    "Хорошо, оценю FastStream"
  ],
  "options_promo_norate": [
    "I don't want to review :(",
    "No quiero reseñar :(",
    "評価しない :(",
    "I don't want to review :(",
    "Не хочу оценивать :("
  ],
  "options_feedback_header": [
    "Do you have feedback?",
    "¿Tienes comentarios?",
    "フィードバックをお願いします!",
    "Do you have feedback?",
    "У вас есть отзыв?"
  ],
  "options_feedback_reason": [
    "We'd love to hear from you! Please fill out a short form. It's the only way we can improve since we don't track you.",
    "¡Nos encantaría saber de ti! Por favor, completa un formulario corto. Es la única forma en que podemos mejorar ya que no te rastreamos.",
    "あなたの意見を聞かせてください! 短いフォームを記入してください。私たちはあなたを追跡していないので、改善する唯一の方法です。",
    "We'd love to hear from you! Please fill out a short form. It's the only way we can improve since we don't track you.",
    "Мы хотели бы услышать ваше мнение! Пожалуйста, заполните короткую форму. Это единственный способ улучшить нас, поскольку мы не отслеживаем вас."
  ],
  "options_feedback_yes": [
    "Yes, I have feedback",
    "Sí, tengo comentarios",
    "はい、フィードバックを送信します",
    "Yes, I have feedback",
    "Да, у меня есть отзыв"
  ],
  "options_feedback_no": [
    "No, I'm good",
    "No, estoy bien",
    "いいえ、結構です",
    "No, I'm good",
    "Нет, мне хорошо"
  ],
  "options_help_feedback": [
    "Feedback Form",
    "Formulario de Comentarios",
    "フィードバックフォーム",
    "Feedback Form",
    "Форма обратной связи"
  ],
  "options_update_header": [
    "An Update is Available!",
    "¡Hay una actualización disponible!",
    "アップデートが利用可能です!",
    "An Update is Available!",
    "Доступно обновление!"
  ],
  "options_update_body": [
    "FastStream v$1 is now available (current version v$2). Would you like to update?",
    "FastStream v$1 está disponible (versión actual v$2). ¿Te gustaría actualizar?",
    "FastStream v$1 が利用可能です (現在のバージョン v$2)。アップデートしますか?",
    "FastStream v$1 is now available (current version v$2). Would you like to update?",
    "Доступен FastStream v$1 (текущая v$2). Обновить?"
  ],
  "options_update_go": [
    "Take me to Github",
    "Llévame a Github",
    "GitHub に移動",
    "Take me to Github",
    "Перейти на Github"
  ],
  "options_update_no": [
    "Ignore this update",
    "Ignorar esta actualización",
    "このアップデートを無視",
    "Ignore this update",
    "Игнорировать это обновление"
  ],
  "options_video_header": [
    "Video Options",
    "Opciones de video",
    "動画のオプション",
    "Video Options",
    "Параметры видео"
  ],
  "options_video_body": [
    "Applies CSS filters to the video. Doesn't work with picture-in-picture.",
    "Aplica filtros CSS al vídeo. No funciona con imagen en imagen.",
    "動画に CSS フィルタを適用します。ピクチャー イン ピクチャー (PiP) では動作しません。",
    "Applies CSS filters to the video. Doesn't work with picture-in-picture.",
    "Применять CSS-фильтры к видео. Не работает в режиме «Картинка в картинке»"
  ],
  "options_video_delay": [
    "Video Delay",
    "Video Delay",
    "Video Delay",
    "Video Delay",
    "Video Delay"
  ],
  "options_video_brightness": [
    "Brightness",
    "Brillo",
    "明るさ",
    "Brightness",
    "Яркость"
  ],
  "options_video_contrast": [
    "Contrast",
    "Contraste",
    "コントラスト",
    "Contrast",
    "Контрастность"
  ],
  "options_video_saturation": [
    "Saturation",
    "Saturación",
    "彩度",
    "Saturation",
    "Насыщенность"
  ],
  "options_video_grayscale": [
    "Grayscale",
    "Escala de grises",
    "グレースケール",
    "Grayscale",
    "Оттенок"
  ],
  "options_video_sepia": [
    "Sepia",
    "Sepia",
    "セピア",
    "Sepia",
    "Сепия"
  ],
  "options_video_invert": [
    "Invert",
    "Invertir",
    "反転",
    "Invert",
    "Инвертирование"
  ],
  "options_video_hue": [
    "Hue Rotate",
    "Tono Rotar",
    "色相の回転",
    "Hue Rotate",
    "Поворот\nоттенка"
  ],
  "options_video_daltonizer_type": [
    "Color blindness correction",
    "Corrección del daltonismo",
    "色覚異常の矯正",
    "Color blindness correction",
    "Коррекция дальтонизма"
  ],
  "options_video_daltonizer_strength": [
    "Strength",
    "Intensidad",
    "強度",
    "Strength",
    "Усиление"
  ],
  "options_video_daltonizer_none": [
    "None",
    "Ninguno",
    "なし",
    "None",
    "Нет"
  ],
  "options_video_daltonizer_protanomaly": [
    "Protanomaly",
    "Protanomaly",
    "Protanomaly",
    "Protanomaly",
    "Протаномалия"
  ],
  "options_video_daltonizer_deuteranomaly": [
    "Deuteranomaly",
    "Deuteranomaly",
    "Deuteranomaly",
    "Deuteranomaly",
    "Дейтераномалия"
  ],
  "options_video_daltonizer_tritanomaly": [
    "Tritanomaly",
    "Tritanomaly",
    "Tritanomaly",
    "Tritanomaly",
    "Тританомалия"
  ],
  "options_general_header": [
    "General Options",
    "Opciones Generales",
    "一般設定",
    "General Options",
    "Общие настройки"
  ],
  "options_general_predownload": [
    "Predownload entire video in the background if possible",
    "Si es posible, predescargue el video completo en segundo plano",
    "可能な場合は動画全体をバックグラウンドで事前にダウンロードする",
    "Predownload entire video in the background if possible",
    "По возможности, предзагружать видео в фоновом режиме."
  ],
  "options_general_targetspeed": [
    "Target download speed of predownloader",
    "Velocidad de descarga objetivo del predescargador",
    "プリダウンローダーのターゲット速度",
    "Target download speed of predownloader",
    "Целевая скорость предзагрузки"
  ],
  "options_general_maxsize": [
    "Maximum size of predownloaded video",
    "Tamaño máximo de video predescargado",
    "プリダウンローダーの最大サイズ",
    "Maximum size of predownloaded video",
    "Максимальный размер предзагружаемого видео"
  ],
  "options_general_previewenabled": [
    "Show preview when hovering over the timeline",
    "Muestra la vista previa al pasar el cursor sobre la línea de tiempo",
    "タイムライン上でマウスを移動するとプレビューが表示されます",
    "Show preview when hovering over the timeline",
    "Отображать предпросмотр при наведении курсора на временную шкалу"
  ],
  "options_general_analyze": [
    "Automatically analyze sequential videos for intros/outros\n(turn off if you have CPU performance issues)",
    "Analiza automáticamente videos secuenciales para intros/outros\n(desactiva si tienes problemas de rendimiento de CPU)",
    "イントロ/アウトロが付いた動画を自動的に解析する\n(CPU パフォーマンスに問題がある場合は OFF にしてください)",
    "Automatically analyze sequential videos for intros/outros\n(turn off if you have CPU performance issues)",
    "Анализировать последовательные видео на наличие вступлений/окончаний\n(Отключите, при проблемах с производительностью)"
  ],
  "options_general_storeprogress": [
    "Save progress of videos in local storage",
    "Guardar progreso de videos en el almacenamiento local",
    "動画の進行状況をローカルストレージに保存する",
    "Save progress of videos in local storage",
    "Сохранять прогресс видео в локальном хранилище"
  ],
  "options_general_autosub": [
    "Automatically enable best found subtitle track\n(Change default language in subtitle settings)",
    "Habilitar automáticamente la mejor pista de subtítulos encontrada\n(Cambiar el idioma predeterminado en la configuración de subtítulos)",
    "自動的に最適な字幕トラックを有効化する\n(字幕設定でデフォルトの言語を変更できます)",
    "Automatically enable best found subtitle track\n(Change default language in subtitle settings)",
    "Автовключение наиболее подходящих субтитров\n(Измените язык по умолчанию в настройках субтитров)"
  ],
  "options_general_stream": [
    "Use player to play HLS/DASH streams when opening playlist URLs (.m3u8/.mpd)",
    "Use el reproductor para reproducir transmisiones HLS/DASH al abrir URLs de listas de reproducción (.m3u8/.mpd)",
    "プレイリスト URL (.m3u8/.mpd) を開くときに HLS/DASH ストリームを再生するプレーヤーを使用する",
    "Use player to play HLS/DASH streams when opening playlist URLs (.m3u8/.mpd)",
    "Использовать плеер для воспроизведения HLS/DASH-потоков при открытии ссылки с плейлистом (.m3u8/.mpd)"
  ],
  "options_general_mp4": [
    "Use player to play MP4 videos when opening video URLs (.mp4)",
    "Use el reproductor para reproducir videos MP4 al abrir URLs de video (.mp4)",
    "動画の URL (.mp4) を開くときにMP4 の動画を再生するプレーヤーを使用する",
    "Use player to play MP4 videos when opening video URLs (.mp4)",
    "Использовать плеер для воспроизведения видео в MP4 при открытии ссылки с видео (.mp4)"
  ],
  "options_general_seekstep": [
    "Seek keybind base step size (seconds)",
    "Buscar tamaño de paso base de la tecla de acceso rápido (segundos)",
    "シークキーバインドのベースステップサイズ (秒)",
    "Seek keybind base step size (seconds)",
    "Шаг перемотки горячими клавишами (секунды)"
  ],
  "options_general_replace_delay": [
    "Delay before auto-replacing player (ms)",
    "Retraso antes de reemplazar auto (ms)",
    "プレーヤーを自動的に置き換える前の遅延 (ミリ秒)",
    "Delay before auto-replacing player (ms)",
    "Задержка перед автозаменой плеера (мс)"
  ],
  "options_general_autoplayyt": [
    "Autoplay YouTube videos if possible",
    "Reproducir automáticamente videos de YouTube incrustados",
    "YouTube 動画の自動再生",
    "Autoplay YouTube videos",
    "Автовоспроизведение на YouTube"
  ],
  "options_general_autoplaynext": [
    "Autoplay next video when current video ends",
    "Reproducir automáticamente el siguiente video",
    "次の動画の自動再生",
    "Autoplay next video",
    "Автовоспроизведение следующего видео"
  ],
  "options_general_quality": [
    "Default video quality",
    "Calidad de video predeterminada",
    "動画の品質",
    "Default video quality",
    "Качество видео"
  ],
  "options_general_clickaction": [
    "Single click action",
    "Acción de clic",
    "シングルクリック時のアクション",
    "Single click action",
    "Действие по одиночному клику"
  ],
  "options_general_dblclickaction": [
    "Double click action",
    "Acción de doble clic",
    "ダブルクリック時のアクション",
    "Double click action",
    "Действие по двойному клику"
  ],
  "options_general_tplclickaction": [
    "Triple click action",
    "Acción de triple clic",
    "トリプルクリック時のアクション",
    "Triple click action",
    "Действие по тройному клику"
  ],
  "options_general_clickaction_playpause": [
    "Toggle play/pause",
    "Alternar reproducir/pausar",
    "再生/一時停止に切り替え",
    "Toggle play/pause",
    "Воспроизведение/Пауза"
  ],
  "options_general_clickaction_fullscreen": [
    "Toggle fullscreen",
    "Alternar pantalla completa",
    "フルスクリーンに切り替え",
    "Toggle fullscreen",
    "Во весь экран"
  ],
  "options_general_clickaction_pip": [
    "Toggle picture-in-picture",
    "Alternar imagen en imagen",
    "ピクチャー イン ピクチャー (PiP) に切り替え",
    "Toggle picture-in-picture",
    "Картинка в картинке"
  ],
  "options_general_clickaction_hidecontrols": [
    "Hide controls",
    "Ocultar controles",
    "コントロールを非表示",
    "Hide controls",
    "Скрыть элементы управления"
  ],
  "options_general_clickaction_hideplayer": [
    "Hide player",
    "Ocultar reproductor",
    "プレーヤーを非表示",
    "Hide player",
    "Скрыть плеер"
  ],
  "options_general_vischangeaction": [
    "When player visiblity changes",
    "Cuando cambia la visibilidad del reproductor",
    "プレーヤーの可視性が変更されたとき",
    "When player visiblity changes",
    "При изменении видимости плеера"
  ],
  "options_general_vischangeaction_nothing": [
    "Do nothing",
    "No hacer nada",
    "何もしない",
    "Do nothing",
    "Ничего не делать"
  ],
  "options_general_vischangeaction_playpause": [
    "Toggle play/pause",
    "Alternar reproducir/pausar",
    "再生/一時停止に切り替え",
    "Toggle play/pause",
    "Воспроизведение/Пауза"
  ],
  "options_general_vischangeaction_miniplayer": [
    "Toggle miniplayer",
    "Alternar miniplayer",
    "ミニプレーヤーに切り替え",
    "Toggle miniplayer",
    "Мини-плеер"
  ],
  "options_general_minipos": [
    "Miniplayer position",
    "Posición del miniplayer",
    "ミニプレーヤーの位置",
    "Miniplayer position",
    "Положение мини-плеера"
  ],
  "options_general_minipos_topleft": [
    "Top Left",
    "Arriba a la izquierda",
    "左上",
    "Top Left",
    "Сверху слева"
  ],
  "options_general_minipos_topright": [
    "Top Right",
    "Arriba a la derecha",
    "右上",
    "Top Right",
    "Сверху справа"
  ],
  "options_general_minipos_bottomleft": [
    "Bottom Left",
    "Abajo a la izquierda",
    "左下",
    "Bottom Left",
    "Снизу слева"
  ],
  "options_general_minipos_bottomright": [
    "Bottom Right",
    "Abajo a la derecha",
    "右下",
    "Bottom Right",
    "Снизу справа"
  ],
  "options_general_minisize": [
    "Miniplayer size",
    "Tamaño del miniplayer",
    "ミニプレーヤーのサイズ",
    "Miniplayer size",
    "Размер мини-плеера"
  ],
  "options_general_vischangeaction_pip": [
    "Toggle picture-in-picture",
    "Alternar imagen en imagen",
    "ピクチャー イン ピクチャー (PiP) に切り替え",
    "Toggle picture-in-picture",
    "Картинка в картинке"
  ],
  "options_general_ytclient": [
    "YT client to use. Try changing if you have issues.",
    "Cliente de YouTube. Intente cambiar si tiene problemas.",
    "使用する YouTube クライアント (YouTube の問題がある場合に変更してください)",
    "YT client to use. Try changing if you have issues.",
    "Клиент YouTube для использования. Попробуйте изменить, если у вас возникли проблемы."
  ],
  "options_export_header": [
    "Import/Export Settings",
    "Importar/Exportar Configuraciones",
    "設定のインポート/エクスポート",
    "Import/Export Settings",
    "Настройки импорта/экспорта"
  ],
  "options_import": [
    "Import Settings From File",
    "Importar Configuraciones Desde Archivo",
    "ファイルから設定をインポート",
    "Import Settings From File",
    "Импорт настроек из файла"
  ],
  "options_export": [
    "Export Settings To File",
    "Exportar Configuraciones a Archivo",
    "設定をファイルにエクスポート",
    "Export Settings To File",
    "Экспорт настроек в файл"
  ],
  "options_keybinds_header": [
    "Keyboard Shortcuts",
    "Atajos de Teclado",
    "キーボードショートカット",
    "Keyboard Shortcuts",
    "Сочетания клавиш"
  ],
  "options_keybinds_body": [
    "Keybinds are only active when the player is focused.",
    "Las teclas de acceso rápido solo están activas cuando el jugador está enfocado.",
    "キーバインドはプレーヤーをフォーカス時のみ有効です。",
    "Keybinds are only active when the player is focused.",
    "Сочетания клавиш активны только при фокусе на плеере"
  ],
  "options_keybinds_reset": [
    "Reset to Defaults",
    "Restablecer a los valores predeterminados",
    "デフォルトにリセット",
    "Reset to Defaults",
    "Сбросить по умолчанию"
  ],
  "options_autourl_header": [
    "Auto-enable URLs",
    "Activar URLs Automáticamente",
    "URL で自動的に有効化",
    "Auto-enable URLs",
    "Автовключение по ссылкам"
  ],
  "options_autourl_body": [
    "Will automatically enable the extension upon visiting these URLs and disable upon leaving. One URL per line, pages starting with that URL will also match. For regex, prepend with a tilde (~). One regex per line. To exclude sites, prepend with an exclamation mark (!).",
    "Activará automáticamente la extensión al visitar estas URL y la desactivará al salir. Una URL por línea, también coincidirán las páginas que comiencen con esa URL. Para regex, prepone con una tilde (~). Una regex por línea.",
    "これらの URL にアクセスすると自動的に拡張機能が有効化され、離れる事で無効化されます。1 行に 1 つの URL があり、その URL で始まるページも一致します。正規表現の場合は、先頭にチルダ (~) を付けます。1 行に 1 つの正規表現となります。",
    "Will automatically enable the extension upon visiting these URLs and disable upon leaving. One URL per line, pages starting with that URL will also match. For regex, prepend with a tilde (~). One regex per line.",
    "Активировать расширение при посещении этих адресов и отключать при выходе. По одному адресу в строке, также применяется к страницам, начинающимся с этого адреса. Для регулярного выражения добавьте тильду (~). Одно регулярное выражение на строку."
  ],
  "options_autourl_hint": [
    "Hint: Test regex on",
    "Sugerencia: Prueba regex en",
    "ヒント: 正規表現のテストができます",
    "Hint: Test regex on",
    "Подсказка: протестируйте регулярное выражение на"
  ],
  "options_pattern_header": [
    "Custom Source Patterns",
    "Patrones de Fuente Personalizados",
    "カスタムソースパターン",
    "Custom Source Patterns",
    "Пользовательские шаблоны источников"
  ],
  "options_pattern_body": [
    "These patterns are used to detect custom video sources on webpages. They are applied in order, and the first match is used. For advanced users only.",
    "Estos patrones se utilizan para detectar fuentes de video personalizadas en páginas web. Se aplican en orden y se usa la primera coincidencia. Solo para usuarios avanzados.",
    "これらのパターンは、Web ページ上のカスタム動画ソースを検出するために使用されます。順番に適用され、最初に一致したものが使用されます。上級者向け。",
    "These patterns are used to detect custom video sources on webpages. They are applied in order, and the first match is used. For advanced users only.",
    "Эти шаблоны используются для обнаружения пользовательских источников видео на веб-страницах. Применяются по порядку и используется первое совпадение. Только для продвинутых пользователей."
  ],
  "options_help_header": [
    "Help",
    "Ayuda",
    "ヘルプ",
    "Help",
    "Помощь"
  ],
  "options_help_welcome": [
    "Welcome Page",
    "Página de Bienvenida",
    "ようこそのページ",
    "Welcome Page",
    "Страница приветствия"
  ],
  "options_help_issues": [
    "Issue Tracker",
    "Seguimiento de Problemas",
    "問題を報告",
    "Issue Tracker",
    "Сообщить о проблеме"
  ],
  "subtitles_settings_fontFamily": [
    "Font Family",
    "Fuente",
    "フォントファミリー",
    "Font Family",
    "Шрифт"
  ],
  "subtitles_settings_fontWeight": [
    "Font Weight",
    "Peso de Fuente",
    "フォントの太さ",
    "Font Weight",
    "Вес шрифта"
  ],
  "subtitles_settings_fontSize": [
    "Font Size",
    "Tamaño de Fuente",
    "フォントのサイズ",
    "Font Size",
    "Размер шрифта"
  ],
  "subtitles_settings_color": [
    "Font Color",
    "Color de Fuente",
    "フォントの色",
    "Font Color",
    "Цвет шрифта"
  ],
  "subtitles_settings_background": [
    "Background Color",
    "Color de Fondo",
    "背景の色",
    "Background Color",
    "Цвет фона"
  ],
  "subtitles_settings_outlineColor": [
    "Outline Color",
    "Outline Color",
    "輪郭線の色",
    "Outline Color",
    "Цвет контура"
  ],
  "subtitles_settings_outlineWidth": [
    "Outline Width",
    "Outline Width",
    "輪郭線の太さ",
    "Outline Width",
    "Ширина контура"
  ],
  "subtitles_settings_defaultLanguage": [
    "Language",
    "Idioma",
    "言語",
    "Language",
    "Язык"
  ]
};
export class Localize {
  static getMessage(key, substitutions) {
    if (EnvUtils.isExtension()) {
      return chrome.i18n.getMessage(key, substitutions) || key;
    }
    if (!Object.hasOwn(TranslationMap, key)) {
      return key;
    }
    const index = Localize.getTranslationMapIndex();
    if (index === -1) {
      return key;
    }
    // Replace $1, $2, etc. with substitutions
    let result = TranslationMap[key][index];
    substitutions = substitutions || [];
    for (let i = 0; i < substitutions.length; i++) {
      result = result.replace(`$${i + 1}`, substitutions[i]);
    }
    return result;
  }
  static getLanguage() {
    if (EnvUtils.isExtension()) {
      return chrome.i18n.getUILanguage();
    }
    return navigator.language;
  }
  static getTranslationMapIndex() {
    const languages = TranslationMap['LANGUAGES'];
    if (!languages) {
      return -1;
    }
    const languageCode = this.getLanguage().split('-')[0];
    for (let i = 0; i < languages.length; i++) {
      if (languages[i] === languageCode) {
        return i;
      }
    }
    return 0;
  }
}
