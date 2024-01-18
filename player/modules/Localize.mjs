import {EnvUtils} from '../utils/EnvUtils.mjs';
const TranslationMap = {
"LANGUAGES": [
    "en",
    "es",
    "ja"
  ],
  "extension_name": [
    "FastStream Video Player",
    "Reproductor de Video FastStream",
    "FastStream Video Player"
  ],
  "extension_description": [
    "Stream without buffering, a great video player and download accelerator all in one.",
    "Reproduce videos en línea sin interrupciones, un excelente reproductor de video y acelerador de descargas todo en uno.",
    "Stream without buffering, a great video player and download accelerator all in one."
  ],
  "extension_toggle_label": [
    "Toggle FastStream",
    "Alternar FastStream",
    "FastStream に切り替える"
  ],
  "welcome_page_title": [
    "Welcome to FastStream",
    "Bienvenido a FastStream",
    "FastStream へようこそ"
  ],
  "welcome_page_usage_header": [
    "Usage",
    "Cómo Utilizar",
    "使用方法"
  ],
  "welcome_page_usage_content0": [
    "There are four ways to use FastStream",
    "Hay cuatro formas de usar FastStream",
    "FastStream の使用方法は 4 つあります"
  ],
  "welcome_page_usage_content1": [
    "You can go to a website with a video stream, and turn faststream on by clicking on the icon. Play the stream and the client will be auto-replaced with FastStream",
    "Puedes ir a un sitio web con una transmisión de video y activar FastStream haciendo clic en el icono. Reproduce la transmisión y el cliente se reemplazará automáticamente con FastStream",
    "動画のある Web サイトを開いてアイコンをクリックで FastStream を ON にする事ができます。動画を再生するとクライアントは自動的に FastStream に置き換わります。"
  ],
  "welcome_page_usage_content2": [
    "You can go to a new tab, and press the extension icon to go to the player.",
    "Puedes ir a una nueva pestaña y presionar el ícono de la extensión para ir al reproductor.",
    "新しいタブを開いて拡張機能のアイコンをクリックでプレーヤーを開く事ができます。"
  ],
  "welcome_page_usage_content3": [
    "If you have the option enabled, go to a mp4/mpd/m3u8 url and the player will play it.",
    "Si tienes la opción habilitada, ve a una url mp4/mpd/m3u8 y el reproductor la reproducirá.",
    "オプションを有効化している場合に、mp4/mpd/m3u8 の URL にアクセスする事でプレーヤーが再生をします。"
  ],
  "welcome_page_usage_content4": [
    "Keep the player open in a new tab and it will collect sources as you browse elsewhere.",
    "Mantén el reproductor abierto en una nueva pestaña y recogerá fuentes mientras navegas en otros lugares.",
    "新しいタブでプレーヤーを開いておく事で、他の場所を参照してソースを取得します。"
  ],
  "welcome_page_usage_end": [
    "Thank you for installing FastStream! Please let us know if you have any issues or suggestions.",
    "Gracias por instalar FastStream! Háganos saber si tiene algún problema o sugerencia.",
    "FastStream をインストールしていただき感謝します! 問題やご提案がありましたらお知らせください。"
  ],
  "welcome_page_keybinds_header": [
    "Default Keyboard Controls",
    "Controles de Teclado Predeterminados",
    "デフォルトのキーボードコントロール"
  ],
  "welcome_page_keybinds_content0": [
    "You can change these keybinds in extension settings",
    "Puedes cambiar estas combinaciones de teclas en la configuración de la extensión",
    "これらのキーバインドは拡張機能の設定で変更できます"
  ],
  "welcome_page_keybinds_content1": [
    "arrow keys - 1 second seek forward/back",
    "teclas de flecha - avance/retroceso de 1 segundo",
    "矢印キー - 前後の 1 秒間隔のシーク"
  ],
  "welcome_page_keybinds_content2": [
    "keys - 10 second seek forward/back",
    "teclas - avance/retroceso de 10 segundos",
    "キー - 前後の 10 秒間隔のシーク"
  ],
  "welcome_page_keybinds_content3": [
    "key - Undo seek",
    "clave - Deshacer búsqueda",
    "キー - シークを戻す"
  ],
  "welcome_page_keybinds_content4": [
    "arrow keys - 10% volume up/down",
    "teclas de flecha - subir/bajar el volumen 10%",
    "矢印キー - 10% の音量を上下"
  ],
  "welcome_page_keybinds_content5": [
    "- Full screen",
    "- Pantalla completa",
    "- フルスクリーン"
  ],
  "welcome_page_keybinds_content6": [
    "- Add/decrease concurrent requests",
    "- Añadir/disminuir solicitudes concurrentes",
    "- 同時リクエストの増減"
  ],
  "welcome_page_keybinds_content7": [
    "- Force retry key - use this to re-attempt failed downloads",
    "- Tecla de reintento forzado - utilízala para volver a intentar descargas fallidas",
    "- 強制再試行キー - これを使用する事で失敗をしたダウンロードを再試行します"
  ],
  "welcome_page_keybinds_content8": [
    "- Skip intro/outro if applicable",
    "- Omitir intro/outro si corresponde",
    "- 該当時にイントロ/アウトロをスキップ"
  ],
  "welcome_page_keybinds_content9": [
    "- Hide/show player",
    "- Ocultar/mostrar jugador",
    "- プレーヤーを表示/非表示"
  ],
  "perms_page_title": [
    "FastStream Permissions",
    "Permisos de FastStream",
    "FastStream の権限"
  ],
  "perms_page_about_header": [
    "About the Permissions Required by FastStream",
    "Acerca de los Permisos Requeridos por FastStream",
    "FastStream に必要な権限について"
  ],
  "perms_page_about_content0": [
    "In order for the extension to function, it needs to be able to have certain permissions. These permissions are only used for basic functionality.",
    "Para que la extensión funcione, necesita tener ciertos permisos. Estos permisos solo se utilizan para la funcionalidad básica.",
    "拡張機能を動作させるには特定の権限を許可する必要があります。これらの権限は基本的な機能のみで使用されます。"
  ],
  "perms_page_about_content1": [
    "FastStream does not collect any data from you. It does not track you. It does not send any data to any servers. It does not even have a server to send data to.",
    "FastStream no recopila ningún dato de ti. No te rastrea. No envía ningún dato a ningún servidor. Ni siquiera tiene un servidor al que enviar datos.",
    "FastStream はユーザーからデータの収集、追跡、サーバーにデータの送信は一切しません。データを送信するサーバーもありません。"
  ],
  "perms_page_about_content2": [
    "Don't trust me? FastStream has its source available on",
    "¿No confías en mí? FastStream tiene su fuente disponible en",
    "信用ができませんか? FastStream のソースは次の場所で入手ができます。"
  ],
  "perms_page_about_content3": [
    "You can look through the code yourself, or manually install your very own custom build by following the instructions.",
    "Puedes revisar el código tú mismo, o instalar manualmente tu propia compilación personalizada siguiendo las instrucciones.",
    "自分でコードを確認する事もできますし、指示に従って自分だけのカスタムビルドを手動でインストールする事もできます。"
  ],
  "perms_page_breakdown_header": [
    "Breakdown of Permissions",
    "Desglose de Permisos",
    "権限の内訳"
  ],
  "perms_page_breakdown_content0": [
    "Here is a breakdown of the permissions FastStream requires, and why it needs them.",
    "Aquí hay un desglose de los permisos que FastStream requiere y por qué los necesita.",
    "FastStream が必要とする権限とその理由を説明します。"
  ],
  "perms_page_breakdown_content1": [
    "Note: The linked examples may refer to an older version of the code, but the gist should be the same overall. The list is not exhaustive, items are ordered by importance.",
    "Nota: Los ejemplos vinculados pueden referirse a una versión anterior del código, pero la esencia debería ser la misma en general. La lista no es exhaustiva, los elementos están ordenados por importancia.",
    "注: リンクされた例では古いバージョンのコードが参照されている場合がありますが、要点は全体的に同じであるはずです。リストはすべてを網羅している訳ではなく、項目の重要度の順で並べられています。"
  ],
  "perms_page_breakdown_perm1h": [
    "Be able to access and modify all websites",
    "Poder acceder y modificar todos los sitios web",
    "すべての Web サイトにアクセスをして変更できる事"
  ],
  "perms_page_breakdown_perm1d": [
    "FastStream needs to be able to access all websites so that it can inject the player into the website directly. It injects a content script into websites you visit in order to:",
    "FastStream necesita poder acceder a todos los sitios web para poder inyectar el reproductor directamente en el sitio web. Inyecta un script de contenido en los sitios web que visitas con el fin de:",
    "FastStream はプレーヤーを Web サイトに直接挿入ができるようにするため、すべての Web サイトにアクセスできるようにする必要があります。次の目的でアクセスをした Web サイトにコンテンツスクリプトを挿入します:"
  ],
  "perms_page_breakdown_perm1r1": [
    "Identify the largest visible video element to replace with the player.",
    "Identifica el elemento de video visible más grande para reemplazarlo con el reproductor.",
    "プレーヤーの置き換え、表示されている最大の動画の要素を特定。"
  ],
  "perms_page_breakdown_perm1r2": [
    "Enable fullscreen permissions when the player is injected into a frame.",
    "Habilitar permisos de pantalla completa cuando el reproductor se inyecta en un marco.",
    "プレーヤーがフレームに挿入されるときに全画面の権限を有効化。"
  ],
  "perms_page_breakdown_perm1r3": [
    "Scrape subtitle <track> elements from the page.",
    "Extraer los subtítulos <track> elementos de la página.",
    "字幕の <track> 要素をページから削除。"
  ],
  "perms_page_breakdown_perm2h": [
    "Access the webRequest API",
    "Accede a la API de webRequest",
    "webRequest API にアクセス"
  ],
  "perms_page_breakdown_perm2d": [
    "FastStream needs to be able to intercept HTTP requests to video sources in order to:",
    "FastStream necesita poder interceptar las solicitudes HTTP a las fuentes de video para:",
    "FastStream は動画ソースへの HTTP リクエストをインターセプトを可能にする必要があります:"
  ],
  "perms_page_breakdown_perm2r1": [
    "Identify video sources",
    "Identificar fuentes de video",
    "動画のソースを特定"
  ],
  "perms_page_breakdown_perm3h": [
    "Access the declarativeNetRequest API",
    "Accede a la API declarativeNetRequest",
    "declarativeNetRequest API へのアクセス"
  ],
  "perms_page_breakdown_perm3d": [
    "FastStream needs to be able to modify HTTP headers of select requests in order to:",
    "FastStream necesita poder modificar las cabeceras HTTP de ciertas solicitudes para:",
    "FastStream は選択されたリクエストの HTTP ヘッダーを変更できるようにする必要があります:"
  ],
  "perms_page_breakdown_perm3r1": [
    "Override headers for video sources.",
    "Sobrescribir encabezados para fuentes de video.",
    "動画ソースのヘッダーを上書き。"
  ],
  "perms_page_breakdown_perm4h": [
    "Store data on your browser",
    "Almacena datos en tu navegador",
    "ブラウザー上にデータを保存"
  ],
  "perms_page_breakdown_perm4d": [
    "FastStream needs to be able to store data in your browser so that it can remember your settings.",
    "FastStream necesita poder almacenar datos en tu navegador para que pueda recordar tus configuraciones.",
    "FastStream は、ユーザーの設定を記憶できるようにするためブラウザーにデータを保存可能にする必要があります。"
  ],
  "perms_page_breakdown_perm4r1": [
    "General extension options.",
    "Opciones generales de extensión.",
    "拡張機能の一般オプション。"
  ],
  "perms_page_breakdown_perm5h": [
    "Access the tabs API",
    "Accede a la API de pestañas",
    "Tabs API にアクセス"
  ],
  "perms_page_breakdown_perm5d": [
    "FastStream needs to be able to send messages between players and content scripts in each tab.",
    "FastStream necesita poder enviar mensajes entre reproductores y scripts de contenido en cada pestaña.",
    "FastStream は、各タブ上のプレーヤーとコンテンツスクリプト間でメッセージを送信可能にする必要があります。"
  ],
  "perms_page_breakdown_perm5r1": [
    "Sending sources to players from the background script.",
    "Enviando fuentes a los reproductores desde el script de fondo.",
    "バックグラウンドスクリプトからプレーヤーにソースを送信"
  ],
  "perms_page_granted": [
    "Granted",
    "Concedido",
    "許可"
  ],
  "perms_page_notgranted": [
    "Not Granted, click to grant",
    "No Concedido, haga clic para conceder",
    "許可がされていません、クリックで許可をします"
  ],
  "player_skipintro": [
    "Skip Intro",
    "Omitir Intro",
    "イントロをスキップ"
  ],
  "player_skipoutro": [
    "Skip Outro",
    "Omitir Outro",
    "アウトロをスキップ"
  ],
  "player_hidecontrols": [
    "Hide Controls",
    "Ocultar Controles",
    "コントロールを隠す"
  ],
  "player_loading": [
    "Loading...",
    "Cargando...",
    "読み込み中..."
  ],
  "player_nosource_header": [
    "No source is loaded!",
    "¡No se ha cargado ninguna fuente!",
    "ソースは読み込まれていません!"
  ],
  "player_nosource_instruction1": [
    "Drag and drop a video file to play it.",
    "Arrastra y suelta un archivo de video para reproducirlo.",
    "動画ファイルをドラッグ&ドロップで再生できます。"
  ],
  "player_nosource_instruction2p1": [
    "Click",
    "Hacer clic",
    "クリック"
  ],
  "player_nosource_instruction2p2": [
    "to load sources detected from other tabs.",
    "para cargar fuentes detectadas desde otras pestañas.",
    "他のタブから検出されたソースを読み込み。"
  ],
  "player_playpause_label": [
    "Play or pause video",
    "Reproducir o pausar vídeo",
    "動画を再生/一時停止"
  ],
  "player_mute_label": [
    "Mute audio",
    "Silenciar el audio",
    "オーディオを消音"
  ],
  "player_timestamp_label": [
    "Timestamp",
    "Marca de tiempo",
    "タイムスタンプ"
  ],
  "player_sourcesbrowser_title": [
    "Sources Browser",
    "Navegador de Fuentes",
    "ソースの参照"
  ],
  "player_sourcesbrowser_toggle_label": [
    "Toggle sources browser",
    "Alternar navegador de fuentes",
    "ソースの参照を開く"
  ],
  "player_sourcesbrowser_closebtn_label": [
    "Close sources browser",
    "Cerrar navegador de fuentes",
    "ソースの参照を閉じる"
  ],
  "player_audioconfig_title": [
    "Audio Configuration",
    "Configuración de Audio",
    "オーディオの設定"
  ],
  "player_audioconfig_toggle_label": [
    "Toggle audio config window",
    "Alternar ventana de configuración de audio",
    "オーディオ設定ウィンドウを開く"
  ],
  "player_audioconfig_toggle_closebtn_label": [
    "Close audio config window",
    "Cerrar ventana de configuración de audio",
    "オーディオ設定ウィンドウを閉じる"
  ],
  "player_opensubtitles_title": [
    "OpenSubtitles Search",
    "Búsqueda en OpenSubtitles",
    "OpenSubtitles を検索"
  ],
  "player_opensubtitles_closebtn_label": [
    "Close OpenSubtitles search window",
    "Cerrar ventana de búsqueda de OpenSubtitles",
    "OpenSubtitles 検索ウィンドウを閉じる"
  ],
  "player_opensubtitles_search_placeholder": [
    "Search by title, filename, etc...",
    "Buscar por título, nombre de archivo, etc...",
    "タイトル、ファイル名などで検索..."
  ],
  "player_opensubtitles_searchbtn": [
    "Search",
    "Buscar",
    "検索"
  ],
  "player_opensubtitles_seasonnum": [
    "Season #",
    "Estación #",
    "シーズン #"
  ],
  "player_opensubtitles_episodenum": [
    "Episode #",
    "Episodio #",
    "エピソード #"
  ],
  "player_opensubtitles_type_all": [
    "All",
    "Todo",
    "すべて"
  ],
  "player_opensubtitles_type_movie": [
    "Movie",
    "Película",
    "映画"
  ],
  "player_opensubtitles_type_episode": [
    "Episode",
    "Episodio",
    "エピソード"
  ],
  "player_opensubtitles_language": [
    "Language",
    "Idioma",
    "言語"
  ],
  "player_opensubtitles_year": [
    "Year",
    "Año",
    "年"
  ],
  "player_opensubtitles_sortby": [
    "Sort By",
    "Ordenar por",
    "ソート順"
  ],
  "player_opensubtitles_sortby_downloads": [
    "Downloads",
    "Descargas",
    "ダウンロード"
  ],
  "player_opensubtitles_sortby_date": [
    "Upload Date",
    "Fecha de carga",
    "アップロード日時"
  ],
  "player_opensubtitles_sortby_rating": [
    "Rating",
    "Calificación",
    "評価"
  ],
  "player_opensubtitles_sortby_votes": [
    "Votes",
    "Votos",
    "投票"
  ],
  "player_opensubtitles_sort": [
    "Sort",
    "Ordenar",
    "ソート"
  ],
  "player_opensubtitles_sort_desc": [
    "Descending",
    "Descendente",
    "下り順"
  ],
  "player_opensubtitles_sort_asc": [
    "Ascending",
    "Ascendente",
    "上り順"
  ],
  "player_opensubtitles_searching": [
    "Searching...",
    "Buscando...",
    "検索中..."
  ],
  "player_opensubtitles_error": [
    "Error: $1",
    "Error: $1",
    "エラー: $1"
  ],
  "player_opensubtitles_disabled": [
    "Cannot set proper headers! Install the extension to use this feature!",
    "¡No se pueden establecer las cabeceras adecuadas! ¡Instala la extensión para usar esta función!",
    "適切なヘッダーを設定できません! この機能を使用するには拡張機能をインストールしてください!"
  ],
  "player_opensubtitles_error_down": [
    "OpenSubtitles is down!",
    "¡OpenSubtitles está caído!",
    "OpenSubtitles はダウンしています!"
  ],
  "player_opensubtitles_down_alert": [
    "OpenSubtitles download failed! Their servers are probably down!",
    "¡La descarga de OpenSubtitles ha fallado! ¡Probablemente sus servidores estén caídos!",
    "OpenSubtitles のダウンロードに失敗しました! サーバーがダウンしているかもしれません!"
  ],
  "player_opensubtitles_noresults": [
    "No results found!",
    "¡No se encontraron resultados!",
    "結果が見つかりません!"
  ],
  "player_opensubtitles_quota": [
    "OpenSubtitles limits subtitle downloads! You have no more downloads left! Your quota resets in $1",
    "¡OpenSubtitles limita las descargas de subtítulos! ¡No te quedan más descargas! Tu cuota se restablece en $1",
    "OpenSubtitles は字幕のダウンロードを制限します! ダウンロードの残り回数がありません! クォータは、 $1 でリセットされます。"
  ],
  "player_opensubtitles_askopen": [
    "Would you like to open the OpenSubtitles website to download the subtitle file manually?",
    "¿Le gustaría abrir el sitio web de OpenSubtitles para descargar el archivo de subtítulos manualmente?",
    "OpenSubtitles の Web サイトを開いて字幕ファイルを手動でダウンロードしますか?"
  ],
  "player_subtitlesmenu_toggle_label": [
    "Toggle subtitles menu",
    "Alternar menú de subtítulos",
    "字幕メニューを開く"
  ],
  "player_subtitlesmenu_backbtn": [
    "Back",
    "Volver",
    "戻る"
  ],
  "player_subtitlesmenu_settings": [
    "Subtitle Settings",
    "Configuración de Subtítulos",
    "字幕の設定"
  ],
  "player_subtitlesmenu_testbtn": [
    "Test Subtitles",
    "Prueba Subtítulos",
    "字幕をテスト"
  ],
  "player_subtitlesmenu_testbtn_stop": [
    "Stop Testing",
    "Deja de Probar",
    "テストを停止"
  ],
  "player_subtitlesmenu_uploadbtn": [
    "Upload File",
    "Subir Archivo",
    "ファイルをアップロード"
  ],
  "player_subtitlesmenu_urlbtn": [
    "From URL",
    "Desde URL",
    "URL から"
  ],
  "player_subtitlesmenu_urlprompt": [
    "Enter URL",
    "Ingrese URL",
    "URL を入力"
  ],
  "player_subtitlesmenu_searchbtn": [
    "Search OpenSubtitles",
    "Buscar en OpenSubtitles",
    "OpenSubtitles を検索"
  ],
  "player_subtitlesmenu_clearbtn": [
    "Clear Subtitles",
    "Borrar subtítulos",
    "字幕をクリア"
  ],
  "player_subtitlesmenu_settingsbtn": [
    "Subtitle Settings",
    "Configuración de Subtítulos",
    "字幕の設定"
  ],
  "player_subtitlesmenu_resynctool_label": [
    "Resync Tool",
    "Herramienta de Resincronización",
    "再同期ツール"
  ],
  "player_subtitlesmenu_savetool_label": [
    "Save subtitle file",
    "Guardar archivo de subtítulos",
    "字幕ファイルを保存"
  ],
  "player_subtitlesmenu_removetool_label": [
    "Remove subtitle track",
    "Eliminar pista de subtítulos",
    "字幕トラックを削除"
  ],
  "player_subtitlesmenu_shifttool_label": [
    "Shift subtitles $1s",
    "Cambiar subtítulos $1s",
    "$1 の字幕をシフト"
  ],
  "player_subtitlesmenu_shifttool_message": [
    "Shifted subtitles $1s",
    "Subtítulos cambiados $1s",
    "字幕を $1s シフト"
  ],
  "player_testsubtitle": [
    "This is a test subtitle",
    "Este es un subtítulo de prueba",
    "これはテストの字幕です"
  ],
  "player_qualitymenu_label": [
    "Video quality",
    "Calidad de video",
    "動画の品質"
  ],
  "player_languagemenu_label": [
    "Language selection",
    "Selección de idioma",
    "言語の選択"
  ],
  "player_languagemenu_video": [
    "Video",
    "Video",
    "ビデオ"
  ],
  "player_languagemenu_audio": [
    "Audio",
    "Audio",
    "オーディオ"
  ],
  "player_playbackrate_label": [
    "Playback rate",
    "Velocidad de reproducción",
    "再生速度"
  ],
  "player_settings_title": [
    "FastStream Settings",
    "Configuraciones de FastStream",
    "FastStream の設定"
  ],
  "player_settings_closebtn_label": [
    "Close settings window",
    "Cerrar ventana de configuración",
    "設定ウィンドウを閉じる"
  ],
  "player_settings_label": [
    "Settings",
    "Configuraciones",
    "設定"
  ],
  "player_savevideo_label": [
    "Save video. hold ALT to save partial video. hold SHIFT to dump buffer.",
    "Guardar video. mantén presionado ALT para guardar un video parcial. mantén presionado SHIFT para vaciar el búfer.",
    "ALT を押しながらで動画の一部を保存します。SHIFT を押しながらでバッファーをダンプします。"
  ],
  "player_screenshot_label": [
    "Take screenshot",
    "Tomar captura de pantalla",
    "スクリーンショットを撮る"
  ],
  "player_pip_label": [
    "Picture in picture",
    "Imagen en imagen",
    "ピクチャー イン ピクチャー (PiP)"
  ],
  "player_fullscreen_label": [
    "Fullscreen",
    "Pantalla completa",
    "フルスクリーン"
  ],
  "player_fragment_failed_singular": [
    "$1 Fragment Failed! Click to retry.",
    "¡$1 fragmento falló! Haz clic para reintentar.",
    "$1 の分割処理に失敗しました! クリックで再試行します。"
  ],
  "player_fragment_failed_plural": [
    "$1 Fragments Failed! Click to retry.",
    "¡$1 fragmentos fallidos! Haz clic para reintentar.",
    "$1 の分割処理に失敗しました! クリックで再試行します。"
  ],
  "player_fragment_allbuffered": [
    "100% Buffered",
    "100% en Buffer",
    "100% バッファー済み"
  ],
  "player_welcometext": [
    "Welcome to FastStream v$1!",
    "¡Bienvenido a FastStream v$1!",
    "FastStream v$1 へようこそ!"
  ],
  "player_nosource_alert": [
    "No source is loaded!",
    "¡No se ha cargado ninguna fuente!",
    "ソースは読み込まれていません!"
  ],
  "player_archive_loading": [
    "Loading archive... $1%",
    "Cargando archivo... $1%",
    "$1% のアーカイブを読み込み中..."
  ],
  "player_archive_loaded": [
    "Loaded archive!",
    "¡Archivo cargado!",
    "アーカイブを読み込みました!"
  ],
  "player_archive_fail": [
    "Failed to load archive!",
    "¡No se pudo cargar el archivo!",
    "アーカイブの読み込みに失敗しました!"
  ],
  "player_filename_prompt": [
    "Enter a name for the file",
    "Introduzca un nombre para el archivo",
    "ファイル名を入力"
  ],
  "player_screenshot_saving": [
    "Taking screenshot...",
    "Tomando captura de pantalla...",
    "スクリーンショットを撮る..."
  ],
  "player_screenshot_saved": [
    "Screenshot saved!",
    "¡Captura de pantalla guardada!",
    "スクリーンショットを保存しました!"
  ],
  "player_screenshot_fail": [
    "Failed to take screenshot!",
    "¡Error al tomar la captura de pantalla!",
    "スクリーンショットの撮影に失敗しました!"
  ],
  "player_savevideo_inprogress_alert": [
    "Already making save!",
    "¡Ya guardando!",
    "すでに保存済みです!"
  ],
  "player_savevideo_unsupported": [
    "Saving is not supported for this video!",
    "¡No se admite guardar este video!",
    "この動画は保存に対応していません!"
  ],
  "player_savevideo_partial_confirm": [
    "Video has not finished downloading yet! Are you sure you want to save it?",
    "¡El video aún no ha terminado de descargarse! ¿Estás seguro de que quieres guardarlo?",
    "動画のダウンロードが完了していません! 本当に保存をしますか?"
  ],
  "player_savevideo_incognito_confirm": [
    "Incognito Mode will use RAM to buffer videos. Your computer may not have enough memory to save the entire video!\nAre you sure you want to proceed?",
    "El Modo Incógnito utilizará la RAM para almacenar en búfer los videos. ¡Es posible que tu computadora no tenga suficiente memoria para guardar el video completo!\n¿Estás seguro de que quieres proceder?",
    "シークレットモードでは、RAM を使用して動画をバッファーします。コンピューターに動画全体を保存するのに必要なメモリがない可能性があります。\n続行してもよろしいですか?"
  ],
  "player_savevideo_start": [
    "Making save...",
    "Guardando...",
    "保存中..."
  ],
  "player_savevideo_progress": [
    "Saving $1%",
    "Guardando $1%",
    "$1% を保存中"
  ],
  "player_savevideo_fail": [
    "Failed to save video!",
    "¡Error al guardar el video!",
    "動画の保存に失敗しました!"
  ],
  "player_savevideo_failed_ask_archive": [
    "Failed to save video!\nWould you like to archive the player's buffer storage instead?\n- Drag and drop archive files on the player to load it",
    "Error al guardar el video!\n¿Le gustaría archivar el almacenamiento en búfer del reproductor en su lugar?\n- Arrastre y suelte los archivos de archivo en el reproductor para cargarlo",
    "動画の保存に失敗しました!\n代わりにプレーヤーのバッファーストレージをアーカイブしますか?\n- アーカイブファイルをプレーヤーにドラッグ&ドロップで読み込みます"
  ],
  "player_savevideo_complete": [
    "Save complete!",
    "¡Guardado completo!",
    "保存が完了しました!"
  ],
  "player_archiver_progress": [
    "Archiving $1%",
    "Archivando $1%",
    "$1% をアーカイブ中"
  ],
  "player_archiver_saved": [
    "Archive saved!",
    "¡Archivo guardado!",
    "アーカイブを保存しました!"
  ],
  "player_quality_current": [
    "(current)",
    "(actual)",
    "(現在)"
  ],
  "player_buffer_incognito_warning": [
    "Not enough space to predownload in incognito mode, will buffer $1s",
    "No hay suficiente espacio para predescargar en modo incógnito, se almacenará en búfer $1s",
    "シークレットモードでプリダウンロードに必要な空き容量がないため、$1 がバッファーされます"
  ],
  "player_buffer_storage_warning": [
    "Not enough space to predownload, will buffer $1s",
    "No hay suficiente espacio para predescargar, se almacenará en búfer $1s",
    "プリダウンロードに必要な空き容量がないため、$1 がバッファーされます"
  ],
  "player_error_drm": [
    "Failed to load! DRM is not supported!",
    "¡Error al cargar! ¡DRM no es compatible!",
    "読み込みに失敗しました! DRM には対応していません!"
  ],
  "player_error_load": [
    "Failed to load video!",
    "¡Error al cargar el video!",
    "動画の読み込みに失敗しました!"
  ],
  "player_source_autodetect": [
    "Auto Detect",
    "Detección Auto",
    "自動検出"
  ],
  "player_source_direct": [
    "Direct",
    "Directo",
    "ダイレクト"
  ],
  "player_source_accelmp4": [
    "Accelerated MP4",
    "MP4 Acelerado",
    "高速化された MP4"
  ],
  "player_source_accelhls": [
    "Accelerated HLS",
    "HLS Acelerado",
    "高速化された HLS"
  ],
  "player_source_acceldash": [
    "Accelerated DASH",
    "DASH Acelerado",
    "高速化された DASH"
  ],
  "player_source_accelyt": [
    "Accelerated YouTube",
    "YouTube Acelerado",
    "高速化された YouTube"
  ],
  "player_source_mode": [
    "Mode",
    "Modo",
    "モード"
  ],
  "player_source_url_placeholder": [
    "Source URL",
    "URL de origen",
    "ソースの URL"
  ],
  "player_source_headerbtn": [
    "Header Override ($1)",
    "Anulación de Encabezado ($1)",
    "ヘッダーを上書き ($1)"
  ],
  "player_source_headerbtn_label": [
    "Toggle header override input",
    "Alternar entrada de anulación de encabezado",
    "ヘッダー上書き入力へ切り替え"
  ],
  "player_source_headerbtn_disabled": [
    "Header Override (Extension Only)",
    "Anulación de Encabezado (Solo Extensión)",
    "ヘッダーを上書き (拡張機能のみ)"
  ],
  "player_source_playbtn": [
    "Play",
    "Reproducir",
    "再生"
  ],
  "player_source_playbtn_playing": [
    "Playing",
    "Reproduciendo",
    "再生中"
  ],
  "player_source_playbtn_loading": [
    "Loading...",
    "Cargando...",
    "読み込み中..."
  ],
  "player_source_deletebtn": [
    "Delete",
    "Borrar",
    "削除"
  ],
  "player_source_headers_label": [
    "Header override input",
    "Entrada de anulación de encabezado",
    "ヘッダーの上書き入力"
  ],
  "player_source_headers_placeholder": [
    "Header-Name: Header Value\nHeader2-Name: Header2 Value",
    "Nombre-de-Encabezado: Valor del Encabezado\nNombre-de-Encabezado2: Valor del Encabezado2",
    "ヘッダー名: ヘッダーの値\nヘッダー2の名: ヘッダー2の値"
  ],
  "player_source_nonelisted": [
    "No Sources Listed",
    "No Se Enumeran Fuentes",
    "ソースの一覧がありません"
  ],
  "player_source_onelisted": [
    "1 Source Listed",
    "1 Fuente Listada",
    "1 件のソースの一覧"
  ],
  "player_source_multilisted": [
    "$1 Sources Listed",
    "$1 Fuentes Listadas",
    "$1 件のソースの一覧"
  ],
  "player_source_addbtn": [
    "Add Source",
    "Añadir Fuente",
    "ソースを追加"
  ],
  "player_source_clearbtn": [
    "Clear Sources",
    "Borrar Fuentes",
    "ソースをクリア"
  ],
  "player_audioconfig_duplicate_profile": [
    "(loaded from file on $1)",
    "(cargado desde el archivo en $1)",
    "($1 のファイルから読み込み済み)"
  ],
  "player_audioconfig_create_profile": [
    "Create new profile",
    "Crear nuevo perfil",
    "新規プロファイルを作成"
  ],
  "player_audioconfig_import_profile": [
    "Import profiles from file",
    "Importar perfiles desde archivo",
    "ファイルからプロファイルをインポート"
  ],
  "player_audioconfig_import_invalid": [
    "Invalid profile file",
    "Archivo de perfil inválido",
    "無効なプロファイルファイル"
  ],
  "player_audioconfig_profile": [
    "Profile",
    "Perfil",
    "プロファイル"
  ],
  "player_audioconfig_profile_unnamed": [
    "Unnamed Profile",
    "Perfil sin Nombre",
    "無題のプロファイル"
  ],
  "player_audioconfig_profile_load": [
    "Load Profile",
    "Cargar Perfil",
    "プロファイルを読み込む"
  ],
  "player_audioconfig_profile_loaded": [
    "Loaded Profile!",
    "¡Perfil cargado!",
    "プロファイルを読み込みました!"
  ],
  "player_audioconfig_profile_save": [
    "Save Profile",
    "Guardar Perfil",
    "プロファイルを保存"
  ],
  "player_audioconfig_profile_saving": [
    "Saving...",
    "Guardando...",
    "保存中..."
  ],
  "player_audioconfig_profile_saved": [
    "Saved Profile!",
    "¡Perfil Guardado!",
    "プロファイルを保存しました!"
  ],
  "player_audioconfig_profile_download": [
    "Download Profile",
    "Descargar Perfil",
    "プロファイルをダウンロード"
  ],
  "player_audioconfig_profile_downloaded": [
    "Downloaded!",
    "¡Descargado!",
    "ダウンロードしました!"
  ],
  "player_audioconfig_profile_delete": [
    "Delete",
    "Borrar",
    "削除"
  ],
  "player_audioconfig_profile_deleting": [
    "Deleting...",
    "Borrando...",
    "削除中..."
  ],
  "player_audioconfig_profile_deleted": [
    "Deleted!",
    "¡Borrado!",
    "削除しました!"
  ],
  "audiomixer_title": [
    "Audio Channel Mixer",
    "Mezclador de Canales de Audio",
    "オーディオチャンネルミキサー"
  ],
  "audiomixer_solo_label": [
    "Solo",
    "Solo",
    "ソロ"
  ],
  "audiomixer_mute_label": [
    "Mute",
    "Silenciar",
    "消音"
  ],
  "audiocompressor_title": [
    "Audio Compressor",
    "Compresor de Audio",
    "オーディオコンプレッサー"
  ],
  "audiocompressor_enabled": [
    "Compressor Enabled",
    "Compresor Habilitado",
    "コンプレッサー有効"
  ],
  "audiocompressor_disabled": [
    "Compressor Disabled",
    "Compresor Desactivado",
    "コンプレッサー無効"
  ],
  "audiocompressor_threshold": [
    "Threshold",
    "Threshold",
    "スレッショルド"
  ],
  "audiocompressor_knee": [
    "Knee",
    "Knee",
    "ニー"
  ],
  "audiocompressor_ratio": [
    "Ratio",
    "Ratio",
    "レシオ"
  ],
  "audiocompressor_attack": [
    "Attack",
    "Attack",
    "アタック"
  ],
  "audiocompressor_release": [
    "Release",
    "Release",
    "リリース"
  ],
  "audiocompressor_gain": [
    "Gain",
    "Ganancia",
    "ゲイン"
  ],
  "audioeq_title": [
    "Audio Equalizer",
    "Ecualizador de Audio",
    "オーディオイコライザー"
  ],
  "audioeq_instructions": [
    "Double click to change type",
    "Haz doble clic para cambiar el tipo",
    "ダブルクリックでタイプを変更"
  ],
  "audioeq_gain": [
    "Gain: $1dB",
    "Ganancia: $1dB",
    "ゲイン: $1dB"
  ],
  "audioeq_qscroll": [
    "Scroll to change Q",
    "Desplázate para cambiar Q",
    "スクロールで Q を変更"
  ],
  "options_title": [
    "FastStream Options",
    "Configuraciones de FastStream",
    "FastStream のオプション"
  ],
  "options_promo_header": [
    "Enjoy FastStream? Leave a review!",
    "¿Te gusta FastStream? ¡Deja una reseña!",
    "FastStream にご満足いただけましたか? 評価をお願いします!"
  ],
  "options_promo_body": [
    "FastStream is a hobby project maintained by volunteers. We appreciate your feedback as it helps us to know where to improve. Please feel free tell us:",
    "FastStream es un proyecto de hobby mantenido por voluntarios. Agradecemos tus comentarios ya que nos ayudan a saber dónde mejorar. Por favor, no dudes en comentarnos:",
    "FastStream はボランティアによって維持されている趣味なプロジェクトです。改善すべき事を知るためにフィードバックをいただければ幸いです。お気軽にお申し付けください:"
  ],
  "options_promo_l1": [
    "How you use it",
    "Cómo lo usas",
    "使用方法"
  ],
  "options_promo_l2": [
    "Any bugs you encounter",
    "Cualquier error que encuentres",
    "バグに遭遇した場合"
  ],
  "options_promo_l3": [
    "Feature requests",
    "Solicitudes de características",
    "機能のリクエスト"
  ],
  "options_promo_end": [
    "We also take accessibility very seriously. If you need accommodations that are lacking in the current version, please make a request and we will work on it ASAP.",
    "También tomamos la accesibilidad muy en serio. Si necesitas adaptaciones que faltan en la versión actual, haz una solicitud y trabajaremos en ello lo antes posible.",
    "私たちはアクセシビリティについても非常に重視をしています。現在のバージョンに不足している機能があった場合は、リクエストをしてください。できるだけ早く対応をします。"
  ],
  "options_promo_rate": [
    "OK I'll review FastStream",
    "OK, revisaré FastStream",
    "OK、FastStream を評価する"
  ],
  "options_promo_norate": [
    "I don't want to review :(",
    "No quiero reseñar :(",
    "評価しない :("
  ],
  "options_update_header": [
    "An Update is Available!",
    "¡Hay una actualización disponible!",
    "アップデートが利用可能です!"
  ],
  "options_update_body": [
    "FastStream v$1 is now available (current version v$2). Would you like to update?",
    "FastStream v$1 está disponible (versión actual v$2). ¿Te gustaría actualizar?",
    "FastStream v$1 が利用可能です (現在のバージョン v$2)。アップデートしますか?"
  ],
  "options_update_go": [
    "Take me to Github",
    "Llévame a Github",
    "GitHub に移動"
  ],
  "options_update_no": [
    "Ignore this update",
    "Ignorar esta actualización",
    "このアップデートを無視"
  ],
  "options_video_header": [
    "Video Options",
    "Opciones de video",
    "動画のオプション"
  ],
  "options_video_body": [
    "Applies CSS filters to the video. Doesn't work with picture-in-picture.",
    "Aplica filtros CSS al vídeo. No funciona con imagen en imagen.",
    "動画に CSS フィルタを適用します。ピクチャー イン ピクチャー (PiP) では動作しません。"
  ],
  "options_video_brightness": [
    "Brightness",
    "Brillo",
    "明るさ"
  ],
  "options_video_contrast": [
    "Contrast",
    "Contraste",
    "コントラスト"
  ],
  "options_video_saturation": [
    "Saturation",
    "Saturación",
    "彩度"
  ],
  "options_video_grayscale": [
    "Grayscale",
    "Escala de grises",
    "グレースケール"
  ],
  "options_video_sepia": [
    "Sepia",
    "Sepia",
    "セピア"
  ],
  "options_video_invert": [
    "Invert",
    "Invertir",
    "反転"
  ],
  "options_video_hue": [
    "Hue Rotate",
    "Tono Rotar",
    "色相の回転"
  ],
  "options_video_daltonizer_type": [
    "Color blindness correction",
    "Corrección del daltonismo",
    "色覚異常の矯正"
  ],
  "options_video_daltonizer_strength": [
    "Strength",
    "Intensidad",
    "強度"
  ],
  "options_video_daltonizer_none": [
    "None",
    "Ninguno",
    "なし"
  ],
  "options_video_daltonizer_protanomaly": [
    "Protanomaly",
    "Protanomaly",
    "Protanomaly"
  ],
  "options_video_daltonizer_deuteranomaly": [
    "Deuteranomaly",
    "Deuteranomaly",
    "Deuteranomaly"
  ],
  "options_video_daltonizer_tritanomaly": [
    "Tritanomaly",
    "Tritanomaly",
    "Tritanomaly"
  ],
  "options_general_header": [
    "General Options",
    "Opciones Generales",
    "一般設定"
  ],
  "options_general_predownload": [
    "Predownload entire video in the background if possible",
    "Si es posible, predescargue el video completo en segundo plano",
    "可能な場合は動画全体をバックグラウンドで事前にダウンロードする"
  ],
  "options_general_targetspeed": [
    "Target download speed of predownloader",
    "Velocidad de descarga objetivo del predescargador",
    "プリダウンローダーのターゲット速度"
  ],
  "options_general_freeunused": [
    "Free unused channel buffers when switching quality levels",
    "Libera los búferes de canal no utilizados al cambiar los niveles de calidad",
    "品質レベル切り替え時に未使用のチャンネルバッファーを解放する"
  ],
  "options_general_analyze": [
    "Automatically analyze sequential videos for intros/outros\n(turn off if you have CPU performance issues)",
    "Analiza automáticamente videos secuenciales para intros/outros\n(desactiva si tienes problemas de rendimiento de CPU)",
    "イントロ/アウトロが付いた動画を自動的に解析する\n(CPU パフォーマンスに問題がある場合は OFF にしてください)"
  ],
  "options_general_storeprogress": [
    "Save progress of videos in local storage",
    "Guardar progreso de videos en el almacenamiento local",
    "動画の進行状況をローカルストレージに保存する"
  ],
  "options_general_autosub": [
    "Automatically enable best found subtitle track\n(Change default language in subtitle settings)",
    "Habilitar automáticamente la mejor pista de subtítulos encontrada\n(Cambiar el idioma predeterminado en la configuración de subtítulos)",
    "自動的に最適な字幕トラックを有効化する\n(字幕設定でデフォルトの言語を変更できます)"
  ],
  "options_general_stream": [
    "Use player to play HLS/DASH streams when opening playlist URLs (.m3u8/.mpd)",
    "Use el reproductor para reproducir transmisiones HLS/DASH al abrir URLs de listas de reproducción (.m3u8/.mpd)",
    "プレイリスト URL (.m3u8/.mpd) を開くときに HLS/DASH ストリームを再生するプレーヤーを使用する"
  ],
  "options_general_mp4": [
    "Use player to play MP4 videos when opening video URLs (.mp4)",
    "Use el reproductor para reproducir videos MP4 al abrir URLs de video (.mp4)",
    "動画の URL (.mp4) を開くときにMP4 の動画を再生するプレーヤーを使用する"
  ],
  "options_general_seekstep": [
    "Seek keybind base step size (seconds)",
    "Buscar tamaño de paso base de la tecla de acceso rápido (segundos)",
    "シークキーバインドのベースステップサイズ (秒)"
  ],
  "options_general_playbackrate": [
    "Default playback rate",
    "Velocidad de reproducción predeterminada",
    "デフォルトの再生速度"
  ],
  "options_general_autoplayyt": [
    "Autoplay YouTube videos",
    "Reproducir automáticamente videos de YouTube incrustados",
    "YouTube 動画の自動再生"
  ],
  "options_general_quality": [
    "Quality multiplier factor for quality selection algorithm (higher will choose higher quality)",
    "Factor multiplicador de calidad para el algoritmo de selección de calidad (mayor elegirá mayor calidad)",
    "品質選択アルゴリズムの品質倍率係数 (高いほど高品質を選択します)"
  ],
  "options_general_clickaction": [
    "Single click action",
    "Acción de clic",
    "シングルクリック時のアクション"
  ],
  "options_general_dblclickaction": [
    "Double click action",
    "Acción de doble clic",
    "ダブルクリック時のアクション"
  ],
  "options_general_tplclickaction": [
    "Triple click action",
    "Acción de triple clic",
    "トリプルクリック時のアクション"
  ],
  "options_general_clickaction_playpause": [
    "Toggle play/pause",
    "Alternar reproducir/pausar",
    "再生/一時停止に切り替え"
  ],
  "options_general_clickaction_fullscreen": [
    "Toggle fullscreen",
    "Alternar pantalla completa",
    "フルスクリーンに切り替え"
  ],
  "options_general_clickaction_pip": [
    "Toggle picture-in-picture",
    "Alternar imagen en imagen",
    "ピクチャー イン ピクチャー (PiP) に切り替え"
  ],
  "options_general_clickaction_hidecontrols": [
    "Hide controls",
    "Ocultar controles",
    "コントロールを非表示"
  ],
  "options_general_clickaction_hideplayer": [
    "Hide player",
    "Ocultar reproductor",
    "プレーヤーを非表示"
  ],
  "options_general_vischangeaction": [
    "When player visiblity changes",
    "Cuando cambia la visibilidad del reproductor",
    "プレーヤーの可視性が変更されたとき"
  ],
  "options_general_vischangeaction_nothing": [
    "Do nothing",
    "No hacer nada",
    "何もしない"
  ],
  "options_general_vischangeaction_playpause": [
    "Toggle play/pause",
    "Alternar reproducir/pausar",
    "再生/一時停止に切り替え"
  ],
  "options_general_vischangeaction_miniplayer": [
    "Toggle miniplayer",
    "Alternar miniplayer",
    "ミニプレーヤーに切り替え"
  ],
  "options_general_minipos": [
    "Miniplayer position",
    "Posición del miniplayer",
    "ミニプレーヤーの位置"
  ],
  "options_general_minipos_topleft": [
    "Top Left",
    "Arriba a la izquierda",
    "左上"
  ],
  "options_general_minipos_topright": [
    "Top Right",
    "Arriba a la derecha",
    "右上"
  ],
  "options_general_minipos_bottomleft": [
    "Bottom Left",
    "Abajo a la izquierda",
    "左下"
  ],
  "options_general_minipos_bottomright": [
    "Bottom Right",
    "Abajo a la derecha",
    "右下"
  ],
  "options_general_minisize": [
    "Miniplayer size",
    "Tamaño del miniplayer",
    "ミニプレーヤーのサイズ"
  ],
  "options_general_vischangeaction_pip": [
    "Toggle picture-in-picture",
    "Alternar imagen en imagen",
    "ピクチャー イン ピクチャー (PiP) に切り替え"
  ],
  "options_export_header": [
    "Import/Export Settings",
    "Importar/Exportar Configuraciones",
    "設定のインポート/エクスポート"
  ],
  "options_import": [
    "Import Settings From File",
    "Importar Configuraciones Desde Archivo",
    "ファイルから設定をインポート"
  ],
  "options_export": [
    "Export Settings To File",
    "Exportar Configuraciones a Archivo",
    "設定をファイルにエクスポート"
  ],
  "options_keybinds_header": [
    "Keyboard Shortcuts",
    "Atajos de Teclado",
    "キーボードショートカット"
  ],
  "options_keybinds_body": [
    "Keybinds are only active when the player is focused.",
    "Las teclas de acceso rápido solo están activas cuando el jugador está enfocado.",
    "キーバインドはプレーヤーをフォーカス時のみ有効です。"
  ],
  "options_keybinds_reset": [
    "Reset to Defaults",
    "Restablecer a los valores predeterminados",
    "デフォルトにリセット"
  ],
  "options_autourl_header": [
    "Auto-enable URLs",
    "Activar URLs Automáticamente",
    "URL で自動的に有効化"
  ],
  "options_autourl_body": [
    "Will automatically enable the extension upon visiting these URLs and disable upon leaving. One URL per line, pages starting with that URL will also match. For regex, prepend with a tilde (~). One regex per line.",
    "Activará automáticamente la extensión al visitar estas URL y la desactivará al salir. Una URL por línea, también coincidirán las páginas que comiencen con esa URL. Para regex, prepone con una tilde (~). Una regex por línea.",
    "これらの URL にアクセスすると自動的に拡張機能が有効化され、離れる事で無効化されます。1 行に 1 つの URL があり、その URL で始まるページも一致します。正規表現の場合は、先頭にチルダ (~) を付けます。1 行に 1 つの正規表現となります。"
  ],
  "options_autourl_hint": [
    "Hint: Test regex on",
    "Sugerencia: Prueba regex en",
    "ヒント: 正規表現のテストができます"
  ],
  "options_pattern_header": [
    "Custom Source Patterns",
    "Patrones de Fuente Personalizados",
    "カスタムソースパターン"
  ],
  "options_pattern_body": [
    "These patterns are used to detect custom video sources on webpages. They are applied in order, and the first match is used. For advanced users only.",
    "Estos patrones se utilizan para detectar fuentes de video personalizadas en páginas web. Se aplican en orden y se usa la primera coincidencia. Solo para usuarios avanzados.",
    "これらのパターンは、Web ページ上のカスタム動画ソースを検出するために使用されます。順番に適用され、最初に一致したものが使用されます。上級者向け。"
  ],
  "options_help_header": [
    "Help",
    "Ayuda",
    "ヘルプ"
  ],
  "options_help_welcome": [
    "Welcome Page",
    "Página de Bienvenida",
    "ようこそのページ"
  ],
  "options_help_issues": [
    "Issue Tracker",
    "Seguimiento de Problemas",
    "問題を報告"
  ],
  "subtitles_settings_fontFamily": [
    "Font Family",
    "Fuente",
    "フォントファミリー"
  ],
  "subtitles_settings_fontWeight": [
    "Font Weight",
    "Peso de Fuente",
    "フォントの太さ"
  ],
  "subtitles_settings_fontSize": [
    "Font Size",
    "Tamaño de Fuente",
    "フォントのサイズ"
  ],
  "subtitles_settings_color": [
    "Font Color",
    "Color de Fuente",
    "フォントの色"
  ],
  "subtitles_settings_background": [
    "Background Color",
    "Color de Fondo",
    "背景の色"
  ],
  "subtitles_settings_outlineColor": [
    "Outline Color",
    "Outline Color",
    "輪郭線の色"
  ],
  "subtitles_settings_outlineWidth": [
    "Outline Width",
    "Outline Width",
    "輪郭線の太さ"
  ],
  "subtitles_settings_defaultLanguage": [
    "Language",
    "Idioma",
    "言語"
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
