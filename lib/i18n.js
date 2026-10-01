// Interface texts. Works in the page and in the worker (no DOM here). Static
// texts in index.html name their key with data-i18n (plain text) or
// data-i18n-html (our own text with markup).

export const LANGUAGES = [
  { code: 'en', name: 'English', short: 'EN' },
  { code: 'es', name: 'Español', short: 'ES' },
  { code: 'pt-BR', name: 'Português (Brasil)', short: 'PT' },
];

const HB = '<a href="https://github.com/R-drg/project8-sw#how-to-install" target="_blank" rel="noopener">README</a>';

const TEXTS = {
  en: {
    lead:
      'Builds the <strong>Nintendo Switch</strong> package of <strong>Tony Hawk\'s Project 8</strong> from your own ' +
      '<strong>Xbox 360</strong> copy. Everything runs in <strong>this browser</strong>: your game files are never uploaded.',
    languageBar: 'Language',
    step1: '1. Choose your game',
    formatIso: 'Disc image (.iso)',
    formatXex: 'Game folder',
    formatHint:
      'For the <strong>game folder</strong>, select the folder that contains <code>default.xex</code> and the ' +
      '<code>DATA</code> folder.',
    nothingChosen: 'Nothing chosen yet.',
    chosenFile: '{name} ({size})',
    chosenFolder: '{name}: {count} files ({size})',
    chosenFolderOne: '{name}: 1 file ({size})',
    step2: '2. Create the package',
    step2First: 'Installing for the first time:',
    create: 'Create project8-sw.zip',
    step2Update:
      'Already installed, and you only want the new version (<code>.nro</code>, <code>.toml</code> and the licences):',
    createUpdate: 'Create project8-sw-update.zip',
    step3: '3. Copy it to the Switch',
    step3Extract: 'Extract the downloaded <code>.zip</code> into <code>sdmc:/switch/</code>.',
    step3Start:
      'Hold <strong>R</strong> while starting any installed game to open the <strong>Homebrew Menu</strong>, then start ' +
      `<code>project8-sw.nro</code>. Updating replaces <code>thps_p8.toml</code>: note any setting you changed first. More in the ${HB}.`,
    checking: 'Checking your game…',
    supported: 'Supported: the 2006 retail disc',
    executableOnly:
      'Supported, but the DATA folder is missing: choose the whole game to create the full package. The update ' +
      'package only needs default.xex.',
    wrongRelease:
      'This is Tony Hawk\'s Project 8, but not the release this port is made for, so it cannot run it. Only the ' +
      '2006 retail disc is supported. If you think yours is that disc, it may be damaged or modified; include this ' +
      'code in a report:',
    notGame: 'This does not look like Tony Hawk\'s Project 8 for Xbox 360.',
    gameName: 'Tony Hawk\'s Project 8',
    notIso: 'Not an Xbox 360 disc image',
    notComplete: 'Not a complete game',
    noExecutable: 'default.xex was not found: choose the disc image, or the folder that contains default.xex and DATA.',
    incomplete: 'The DATA folder was not found: choose the whole game (the disc image, or the folder with default.xex and DATA).',
    notSupported: 'this copy of the game is not the supported release (code {hash}).',
    downloadingBuild: 'Downloading project8-sw…',
    downloadFailed: 'could not download {url} (HTTP {status}). Check your connection and try again.',
    buildMismatch: 'the downloaded program is not the expected one. Reload the page and try again.',
    logRelease: 'Your copy: Tony Hawk\'s Project 8, {edition}.',
    logUpdate: 'Update package: the game files are not copied.',
    readingFiles: 'Reading your game…',
    copied: 'Copied {path}',
    done: 'Package complete.',
    noStreaming: 'this browser window cannot save large downloads. Use a normal (not private) window of Chrome, Edge or Firefox.',
    downloadStarted: 'Download started ({size}). Keep this page open until it finishes.',
    finished: 'Finished in {seconds} s.',
    error: 'Error: {message}',
    cancelled: 'the download was cancelled',
    sourceCode: 'Source code',
    installerSource: 'Installer source',
    credits:
      'Built on <a href="https://github.com/R-drg/Project8Recomp" target="_blank" rel="noopener">Project8Recomp</a> and ' +
      '<a href="https://github.com/rexglue/rexglue-sdk" target="_blank" rel="noopener">ReXGlue</a>, with the native renderer of ' +
      '<a href="https://github.com/StevensND/nfsmw-nx" target="_blank" rel="noopener">nfsmw-nx</a> by StevensND, ' +
      '<a href="https://github.com/danfromtico/mesa-switch" target="_blank" rel="noopener">mesa-switch</a> and ' +
      '<a href="https://github.com/switchbrew/libnx" target="_blank" rel="noopener">libnx</a>. This page is adapted from ' +
      '<a href="https://github.com/StevensND/nfsmw-nx-installer" target="_blank" rel="noopener">nfsmw-nx-installer</a>.',
    legal:
      'Tony Hawk\'s Project 8 and its marks belong to their respective owners. project8-sw is an unofficial fan project and is not affiliated with, endorsed or sponsored by Activision, Neversoft, Tony Hawk, Inc., Nintendo or Microsoft. Nintendo Switch is a trademark of Nintendo; Xbox 360 is a trademark of Microsoft. This site does not host or distribute disc images, game data or the original game executable: your disc image or game folder is read only inside your browser, is never uploaded, and its files are copied straight into the zip saved on your computer. You need your own legally obtained copy of the game. The cover art is © Activision Publishing, Inc. Title font: Permanent Marker by Font Diner (Apache License 2.0).',
  },
  es: {
    lead:
      'Crea el paquete de <strong>Nintendo Switch</strong> de <strong>Tony Hawk\'s Project 8</strong> a partir de tu ' +
      'propia copia de <strong>Xbox 360</strong>. Todo se ejecuta en <strong>este navegador</strong>: tus archivos del juego nunca se suben.',
    languageBar: 'Idioma',
    step1: '1. Elige tu juego',
    formatIso: 'Imagen de disco (.iso)',
    formatXex: 'Carpeta del juego',
    formatHint:
      'Para la <strong>carpeta del juego</strong>, selecciona la carpeta que contiene <code>default.xex</code> y la ' +
      'carpeta <code>DATA</code>.',
    nothingChosen: 'Todavía no has elegido nada.',
    chosenFile: '{name} ({size})',
    chosenFolder: '{name}: {count} archivos ({size})',
    chosenFolderOne: '{name}: 1 archivo ({size})',
    step2: '2. Crea el paquete',
    step2First: 'Si lo instalas por primera vez:',
    create: 'Crear project8-sw.zip',
    step2Update:
      'Si ya está instalado y solo quieres la versión nueva (<code>.nro</code>, <code>.toml</code> y las licencias):',
    createUpdate: 'Crear project8-sw-update.zip',
    step3: '3. Cópialo a la Switch',
    step3Extract: 'Extrae el <code>.zip</code> descargado en <code>sdmc:/switch/</code>.',
    step3Start:
      'Mantén <strong>R</strong> pulsado al abrir cualquier juego instalado para abrir el <strong>Homebrew Menu</strong> y ' +
      `abre <code>project8-sw.nro</code>. Actualizar reemplaza <code>thps_p8.toml</code>: apunta antes cualquier ajuste que hayas cambiado. Más en el ${HB}.`,
    checking: 'Comprobando tu juego…',
    supported: 'Compatible: el disco comercial de 2006',
    executableOnly:
      'Compatible, pero falta la carpeta DATA: elige el juego completo para crear el paquete completo. El paquete ' +
      'de actualización solo necesita default.xex.',
    wrongRelease:
      'Es Tony Hawk\'s Project 8, pero no la versión para la que está hecho este port, así que no puede ejecutarla. ' +
      'Solo es compatible el disco comercial de 2006. Si crees que el tuyo es ese disco, puede estar dañado o ' +
      'modificado; incluye este código en un informe:',
    notGame: 'Esto no parece Tony Hawk\'s Project 8 de Xbox 360.',
    gameName: 'Tony Hawk\'s Project 8',
    notIso: 'No es una imagen de disco de Xbox 360',
    notComplete: 'No es un juego completo',
    noExecutable: 'No se encontró default.xex: elige la imagen de disco o la carpeta que contiene default.xex y DATA.',
    incomplete: 'No se encontró la carpeta DATA: elige el juego completo (la imagen de disco o la carpeta con default.xex y DATA).',
    notSupported: 'esta copia del juego no es la versión compatible (código {hash}).',
    downloadingBuild: 'Descargando project8-sw…',
    downloadFailed: 'no se pudo descargar {url} (HTTP {status}). Comprueba tu conexión e inténtalo de nuevo.',
    buildMismatch: 'el programa descargado no es el esperado. Recarga la página e inténtalo de nuevo.',
    logRelease: 'Tu copia: Tony Hawk\'s Project 8, {edition}.',
    logUpdate: 'Paquete de actualización: no se copian los archivos del juego.',
    readingFiles: 'Leyendo tu juego…',
    copied: 'Copiado {path}',
    done: 'Paquete completo.',
    noStreaming: 'esta ventana del navegador no puede guardar descargas grandes. Usa una ventana normal (no privada) de Chrome, Edge o Firefox.',
    downloadStarted: 'Descarga iniciada ({size}). Mantén esta página abierta hasta que termine.',
    finished: 'Terminado en {seconds} s.',
    error: 'Error: {message}',
    cancelled: 'se canceló la descarga',
    sourceCode: 'Código fuente',
    installerSource: 'Código del instalador',
    credits:
      'Basado en <a href="https://github.com/R-drg/Project8Recomp" target="_blank" rel="noopener">Project8Recomp</a> y ' +
      '<a href="https://github.com/rexglue/rexglue-sdk" target="_blank" rel="noopener">ReXGlue</a>, con el renderizador nativo de ' +
      '<a href="https://github.com/StevensND/nfsmw-nx" target="_blank" rel="noopener">nfsmw-nx</a> de StevensND, ' +
      '<a href="https://github.com/danfromtico/mesa-switch" target="_blank" rel="noopener">mesa-switch</a> y ' +
      '<a href="https://github.com/switchbrew/libnx" target="_blank" rel="noopener">libnx</a>. Esta página está adaptada de ' +
      '<a href="https://github.com/StevensND/nfsmw-nx-installer" target="_blank" rel="noopener">nfsmw-nx-installer</a>.',
    legal:
      'Tony Hawk\'s Project 8 y sus marcas pertenecen a sus respectivos propietarios. project8-sw es un proyecto no oficial hecho por fans y no está afiliado, respaldado ni patrocinado por Activision, Neversoft, Tony Hawk, Inc., Nintendo ni Microsoft. Nintendo Switch es una marca de Nintendo; Xbox 360 es una marca de Microsoft. Este sitio no aloja ni distribuye imágenes de disco, datos del juego ni el ejecutable original: tu imagen de disco o carpeta del juego solo se lee dentro de tu navegador, nunca se sube, y sus archivos se copian directamente al zip guardado en tu ordenador. Necesitas tu propia copia del juego obtenida legalmente. La portada es © Activision Publishing, Inc. Fuente del título: Permanent Marker de Font Diner (Apache License 2.0).',
  },
  'pt-BR': {
    lead:
      'Cria o pacote de <strong>Nintendo Switch</strong> de <strong>Tony Hawk\'s Project 8</strong> a partir da sua ' +
      'própria cópia de <strong>Xbox 360</strong>. Tudo roda <strong>neste navegador</strong>: os arquivos do seu jogo nunca são enviados.',
    languageBar: 'Idioma',
    step1: '1. Escolha o seu jogo',
    formatIso: 'Imagem de disco (.iso)',
    formatXex: 'Pasta do jogo',
    formatHint:
      'Para a <strong>pasta do jogo</strong>, selecione a pasta que contém o <code>default.xex</code> e a pasta ' +
      '<code>DATA</code>.',
    nothingChosen: 'Nada escolhido ainda.',
    chosenFile: '{name} ({size})',
    chosenFolder: '{name}: {count} arquivos ({size})',
    chosenFolderOne: '{name}: 1 arquivo ({size})',
    step2: '2. Crie o pacote',
    step2First: 'Se é a primeira instalação:',
    create: 'Criar project8-sw.zip',
    step2Update:
      'Se já está instalado e você só quer a versão nova (<code>.nro</code>, <code>.toml</code> e as licenças):',
    createUpdate: 'Criar project8-sw-update.zip',
    step3: '3. Copie para o Switch',
    step3Extract: 'Extraia o <code>.zip</code> baixado em <code>sdmc:/switch/</code>.',
    step3Start:
      'Segure <strong>R</strong> ao abrir qualquer jogo instalado para abrir o <strong>Homebrew Menu</strong> e então abra ' +
      `<code>project8-sw.nro</code>. Atualizar substitui o <code>thps_p8.toml</code>: anote antes qualquer configuração que você mudou. Mais no ${HB}.`,
    checking: 'Verificando o seu jogo…',
    supported: 'Compatível: o disco comercial de 2006',
    executableOnly:
      'Compatível, mas a pasta DATA está faltando: escolha o jogo inteiro para criar o pacote completo. O pacote de ' +
      'atualização só precisa do default.xex.',
    wrongRelease:
      'Este é Tony Hawk\'s Project 8, mas não a versão para a qual este port foi feito, então ele não consegue rodá-la. ' +
      'Só o disco comercial de 2006 é compatível. Se você acha que o seu é esse disco, ele pode estar danificado ou ' +
      'modificado; inclua este código em um relatório:',
    notGame: 'Isto não parece ser Tony Hawk\'s Project 8 de Xbox 360.',
    gameName: 'Tony Hawk\'s Project 8',
    notIso: 'Não é uma imagem de disco de Xbox 360',
    notComplete: 'Não é um jogo completo',
    noExecutable: 'O default.xex não foi encontrado: escolha a imagem de disco ou a pasta que contém o default.xex e a DATA.',
    incomplete: 'A pasta DATA não foi encontrada: escolha o jogo inteiro (a imagem de disco ou a pasta com o default.xex e a DATA).',
    notSupported: 'esta cópia do jogo não é a versão compatível (código {hash}).',
    downloadingBuild: 'Baixando o project8-sw…',
    downloadFailed: 'não foi possível baixar {url} (HTTP {status}). Verifique a sua conexão e tente de novo.',
    buildMismatch: 'o programa baixado não é o esperado. Recarregue a página e tente de novo.',
    logRelease: 'Sua cópia: Tony Hawk\'s Project 8, {edition}.',
    logUpdate: 'Pacote de atualização: os arquivos do jogo não são copiados.',
    readingFiles: 'Lendo o seu jogo…',
    copied: 'Copiado {path}',
    done: 'Pacote completo.',
    noStreaming: 'esta janela do navegador não consegue salvar downloads grandes. Use uma janela normal (não anônima) do Chrome, Edge ou Firefox.',
    downloadStarted: 'Download iniciado ({size}). Mantenha esta página aberta até terminar.',
    finished: 'Concluído em {seconds} s.',
    error: 'Erro: {message}',
    cancelled: 'o download foi cancelado',
    sourceCode: 'Código-fonte',
    installerSource: 'Código do instalador',
    credits:
      'Feito com <a href="https://github.com/R-drg/Project8Recomp" target="_blank" rel="noopener">Project8Recomp</a> e ' +
      '<a href="https://github.com/rexglue/rexglue-sdk" target="_blank" rel="noopener">ReXGlue</a>, com o renderizador nativo do ' +
      '<a href="https://github.com/StevensND/nfsmw-nx" target="_blank" rel="noopener">nfsmw-nx</a> de StevensND, ' +
      '<a href="https://github.com/danfromtico/mesa-switch" target="_blank" rel="noopener">mesa-switch</a> e ' +
      '<a href="https://github.com/switchbrew/libnx" target="_blank" rel="noopener">libnx</a>. Esta página é adaptada do ' +
      '<a href="https://github.com/StevensND/nfsmw-nx-installer" target="_blank" rel="noopener">nfsmw-nx-installer</a>.',
    legal:
      'Tony Hawk\'s Project 8 e suas marcas pertencem aos seus respectivos donos. project8-sw é um projeto não oficial feito por fãs e não é afiliado, endossado nem patrocinado pela Activision, Neversoft, Tony Hawk, Inc., Nintendo ou Microsoft. Nintendo Switch é uma marca da Nintendo; Xbox 360 é uma marca da Microsoft. Este site não hospeda nem distribui imagens de disco, dados do jogo ou o executável original: a sua imagem de disco ou pasta do jogo é lida só dentro do seu navegador, nunca é enviada, e os seus arquivos são copiados direto para o zip salvo no seu computador. Você precisa da sua própria cópia do jogo, obtida legalmente. A arte da capa é © Activision Publishing, Inc. Fonte do título: Permanent Marker, de Font Diner (Apache License 2.0).',
  },
};

let current = 'en';

export function setLanguage(code) {
  current = TEXTS[code] ? code : 'en';
}

export function getLanguage() {
  return current;
}

// The saved choice, else the first browser language we have, else English.
export function preferredLanguage(saved) {
  if (saved && TEXTS[saved]) {
    return saved;
  }
  const wanted = (typeof navigator !== 'undefined' && navigator.languages) || [];
  for (const tag of wanted) {
    if (TEXTS[tag]) {
      return tag;
    }
    const base = tag.split('-')[0];
    if (base === 'pt') {
      return 'pt-BR';
    }
    if (TEXTS[base]) {
      return base;
    }
  }
  return 'en';
}

export function t(key, vars = {}) {
  const text = (TEXTS[current] && TEXTS[current][key]) ?? TEXTS.en[key] ?? key;
  return text.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match));
}

export function formatSize(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit++;
  }
  return `${value.toFixed(unit ? 1 : 0)} ${units[unit]}`;
}

export const KEYS = Object.keys(TEXTS.en);
export const ALL_TEXTS = TEXTS;
