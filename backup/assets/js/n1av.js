// nav.js – Gemeinsame Navigation für alle WERKBYTE Seiten
// Einbinden mit: <script src="nav.js"></script> direkt nach <body>

(function() {
  (function() {
  const LOGO_SRC = "images/Logo transparent.png";   // ← Hier kommt dein sauberes Logo hin

  const LANGUAGES = [
    {code:'de',gt:'de',flag:'🇩🇪',label:'Deutsch',en:'German'},
    {code:'en',gt:'en',flag:'🇬🇧',label:'English',en:'English'},
    {code:'fr',gt:'fr',flag:'🇫🇷',label:'Français',en:'French'},
    {code:'es',gt:'es',flag:'🇪🇸',label:'Español',en:'Spanish'},
    {code:'pt',gt:'pt',flag:'🇵🇹',label:'Português',en:'Portuguese'},
    {code:'it',gt:'it',flag:'🇮🇹',label:'Italiano',en:'Italian'},
    {code:'nl',gt:'nl',flag:'🇳🇱',label:'Nederlands',en:'Dutch'},
    {code:'pl',gt:'pl',flag:'🇵🇱',label:'Polski',en:'Polish'},
    {code:'ru',gt:'ru',flag:'🇷🇺',label:'Русский',en:'Russian'},
    {code:'uk',gt:'uk',flag:'🇺🇦',label:'Українська',en:'Ukrainian'},
    {code:'tr',gt:'tr',flag:'🇹🇷',label:'Türkçe',en:'Turkish'},
    {code:'ar',gt:'ar',flag:'🇸🇦',label:'العربية',en:'Arabic'},
    {code:'zh',gt:'zh-CN',flag:'🇨🇳',label:'中文',en:'Chinese'},
    {code:'ja',gt:'ja',flag:'🇯🇵',label:'日本語',en:'Japanese'},
    {code:'ko',gt:'ko',flag:'🇰🇷',label:'한국어',en:'Korean'},
    {code:'hi',gt:'hi',flag:'🇮🇳',label:'हिन्दी',en:'Hindi'},
    {code:'sv',gt:'sv',flag:'🇸🇪',label:'Svenska',en:'Swedish'},
    {code:'no',gt:'no',flag:'🇳🇴',label:'Norsk',en:'Norwegian'},
    {code:'da',gt:'da',flag:'🇩🇰',label:'Dansk',en:'Danish'},
    {code:'fi',gt:'fi',flag:'🇫🇮',label:'Suomi',en:'Finnish'},
    {code:'cs',gt:'cs',flag:'🇨🇿',label:'Čeština',en:'Czech'},
    {code:'sk',gt:'sk',flag:'🇸🇰',label:'Slovenčina',en:'Slovak'},
    {code:'hu',gt:'hu',flag:'🇭🇺',label:'Magyar',en:'Hungarian'},
    {code:'ro',gt:'ro',flag:'🇷🇴',label:'Română',en:'Romanian'},
    {code:'bg',gt:'bg',flag:'🇧🇬',label:'Български',en:'Bulgarian'},
    {code:'hr',gt:'hr',flag:'🇭🇷',label:'Hrvatski',en:'Croatian'},
    {code:'sr',gt:'sr',flag:'🇷🇸',label:'Srpski',en:'Serbian'},
    {code:'el',gt:'el',flag:'🇬🇷',label:'Ελληνικά',en:'Greek'},
    {code:'he',gt:'iw',flag:'🇮🇱',label:'עברית',en:'Hebrew'},
    {code:'fa',gt:'fa',flag:'🇮🇷',label:'فارسی',en:'Persian'},
    {code:'id',gt:'id',flag:'🇮🇩',label:'Bahasa Indonesia',en:'Indonesian'},
    {code:'ms',gt:'ms',flag:'🇲🇾',label:'Bahasa Melayu',en:'Malay'},
    {code:'th',gt:'th',flag:'🇹🇭',label:'ภาษาไทย',en:'Thai'},
    {code:'vi',gt:'vi',flag:'🇻🇳',label:'Tiếng Việt',en:'Vietnamese'},
  ];

  function getLangFromURL() {
    return new URLSearchParams(window.location.search).get('lang') || 'de';
  }

  function navTo(href) {
    const lang = getLangFromURL();
    if (lang !== 'de') {
      const sep = href.includes('?') ? '&' : '?';
      href = href + sep + 'lang=' + lang;
    }
    window.location.href = href;
  }

  // CSS für Navigation
  const style = document.createElement('style');
  style.textContent = `
    :root{--nav-h:66px}
    body{padding-top:var(--nav-h)}
    #wb-nav{
      position:fixed;top:0;left:0;right:0;z-index:500;
      display:flex;align-items:center;justify-content:space-between;
      padding:0 4%;height:var(--nav-h);
      background:rgba(13,17,23,0.95);backdrop-filter:blur(16px);
      border-bottom:1px solid rgba(70,185,200,0.13);
      font-family:'Barlow',sans-serif;
    }
    .wbn-logo img{height:50px;width:auto;cursor:pointer}
    .wbn-links{display:flex;gap:1.8rem;list-style:none;position:absolute;left:50%;transform:translateX(-50%)}
    .wbn-links a{color:#7a95a8;font-size:.9rem;font-weight:500;letter-spacing:.03em;transition:color .2s}
    .wbn-links a:hover,.wbn-links a.active{color:#fff}
    .wbn-contact{
      background:#46b9c8;color:#0d1117;padding:.44rem 1.2rem;border-radius:6px;
      font-weight:700;font-size:.84rem;cursor:pointer;transition:background .2s;
    }
    .wbn-contact:hover{background:#5dd0de}
    /* Sprachauswahl CSS bleibt gleich - hier gekürzt */
    .wbn-lang{position:relative}
    .wbn-ltoggle{display:flex;align-items:center;gap:6px;cursor:pointer;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);color:#7a95a8;padding:.4rem .8rem;border-radius:6px;font-size:.82rem;font-weight:600}
    .wbn-lang.open .wbn-chev{transform:rotate(180deg)}
    @media(max-width:820px){.wbn-links{display:none}}
  `;
  document.head.appendChild(style);

  const page = window.location.pathname.split('/').pop() || 'index.html';

  const nav = document.createElement('nav');
  nav.id = 'wb-nav';
  nav.innerHTML = `
    <div class="wbn-logo" onclick="navTo('index.html')">
      <img src="${LOGO_SRC}" alt="WERKBYTE">
    </div>
    <ul class="wbn-links">
      <li><a onclick="navTo('index.html#leistungen')" class="${page==='index.html'?'active':''}">Leistungen</a></li>
      <li><a onclick="navTo('ueber-uns.html')" class="${page==='ueber-uns.html'?'active':''}">Über Uns</a></li>
      <li><a onclick="navTo('index.html#sicherheit')">Sicherheit</a></li>
      <li><a onclick="navTo('kontakt.html')" class="${page==='kontakt.html'?'active':''}">Kontakt</a></li>
    </ul>
    <div class="wbn-right">
      <div class="wbn-contact" onclick="navTo('kontakt.html')">Anfrage senden</div>
      <div class="wbn-lang" id="wbnLang">
        <div class="wbn-ltoggle" id="wbnToggle">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <span id="wbnCurLang">🇩🇪 DE</span>
          <svg class="wbn-chev" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="wbn-ldrop" id="wbnDrop">
          <div class="wbn-lsearch-wrap"><input class="wbn-lsearch" id="wbnSearch" placeholder="Sprache suchen..." autocomplete="off"></div>
          <div class="wbn-llist" id="wbnList"></div>
        </div>
      </div>
    </div>
  `;

  document.body.insertBefore(nav, document.body.firstChild);

  // === Sprachlogik (vereinfacht & stabil) ===
  let currentLang = getLangFromURL();

  function renderLangList(filter = '') {
    const list = document.getElementById('wbnList');
    const filtered = filter 
      ? LANGUAGES.filter(l => l.label.toLowerCase().includes(filter) || l.en.toLowerCase().includes(filter))
      : LANGUAGES;
    
    list.innerHTML = filtered.map(l => `
      <button class="wbn-lopt ${l.code === currentLang ? 'active' : ''}" 
        onclick="window._wbnSelectLang('${l.code}','${l.gt}','${l.flag}','${l.label}')">
        <span class="wbn-lflag">${l.flag}</span> ${l.label}
      </button>
    `).join('');
  }

  // Event Listener für Sprache
  document.getElementById('wbnToggle').addEventListener('click', () => {
    const wrap = document.getElementById('wbnLang');
    wrap.classList.toggle('open');
    if (wrap.classList.contains('open')) {
      document.getElementById('wbnSearch').focus();
      renderLangList('');
    }
  });

  document.getElementById('wbnSearch').addEventListener('input', (e) => renderLangList(e.target.value.toLowerCase().trim()));

  document.addEventListener('click', (e) => {
    if (!document.getElementById('wbnLang').contains(e.target)) {
      document.getElementById('wbnLang').classList.remove('open');
    }
  });

  window._wbnSelectLang = function(code, gt, flag, label) {
    currentLang = code;
    document.getElementById('wbnCurLang').textContent = `${flag} ${code.toUpperCase()}`;
    document.getElementById('wbnLang').classList.remove('open');

    const url = new URL(window.location.href);
    if (code === 'de') url.searchParams.delete('lang');
    else url.searchParams.set('lang', code);
    history.replaceState({}, '', url);

    if (code === 'de') location.reload();
    else {
      // Google Translate anwenden (optional, da du es schon hast)
      console.log(`Sprache gewechselt zu: ${code}`);
    }
    renderLangList(document.getElementById('wbnSearch').value.toLowerCase().trim());
  };

  // Google Translate (wie bisher)
  window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({pageLanguage: 'de', autoDisplay: false}, 'google_translate_element');
  };

  if (!document.getElementById('wbn-gt-script')) {
    const s = document.createElement('script');
    s.id = 'wbn-gt-script';
    s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(s);
  }

  renderLangList('');
})();