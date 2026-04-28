// nav.js – Gemeinsame Navigation für alle WERKBYTE Seiten
// Einbinden mit: <script src="nav.js"></script> direkt nach <body>

(function() {
  const LOGO_B64 = "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj4KICA8cGF0aCBkPSJNMTAwIDU1CiAgICBMMTA4IDQ3IEwxMTYgNTIgTDExMiA2MgogICAgQzExOCA2NSAxMjMgNzAgMTI2IDc2IEwxMzYgNzQgTDE0MCA4MiBMMTMyIDg4CiAgICBDMTMzIDk0IDEzMyAxMDAgMTMyIDEwNiBMMTQwIDExMiBMMTM2IDEyMCBMMTI2IDExOAogICAgQzEyMyAxMjQgMTE4IDEyOSAxMTIgMTMyIEwxMTYgMTQyIEwxMDggMTQ3IEwxMDAgMTM5CiAgICBMOTIgMTQ3IEw4NCAxNDIgTDg4IDEzMgogICAgQzgyIDEyOSA3NyAxMjQgNzQgMTE4IEw2NCAxMjAgTDYwIDExMiBMNjggMTA2CiAgICBDNjcgMTAwIDY3IDk0IDY4IDg4IEw2MCA4MiBMNjQgNzQgTDc0IDc2CiAgICBDNzcgNzAgODIgNjUgODggNjIgTDg0IDUyIEw5MiA0NyBaIgogICAgZmlsbD0iIzQ2YjljOCIvPgogIDxjaXJjbGUgY3g9IjEwMCIgY3k9Ijk3IiByPSIyOCIgZmlsbD0iIzBkMTExNyIvPgogIDxnIGZpbGw9IiNjOGQ4ZTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg4LDU1KSBzY2FsZSgwLjYpIj4KICAgIDxjaXJjbGUgY3g9IjIwIiBjeT0iOCIgcj0iNyIvPgogICAgPGVsbGlwc2UgY3g9IjE1IiBjeT0iMjgiIHJ4PSI4IiByeT0iMTQiIHRyYW5zZm9ybT0icm90YXRlKC0yMCwxNSwyOCkiLz4KICAgIDxsaW5lIHgxPSIyMCIgeTE9IjE4IiB4Mj0iMzUiIHkyPSIxMCIgc3Ryb2tlPSIjYzhkOGUwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPGxpbmUgeDE9IjIwIiB5MT0iMTgiIHgyPSI1IiB5Mj0iMjUiIHN0cm9rZT0iI2M4ZDhlMCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxsaW5lIHgxPSIxNSIgeTE9IjQwIiB4Mj0iNSIgeTI9IjU1IiBzdHJva2U9IiNjOGQ4ZTAiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8bGluZSB4MT0iMTUiIHkxPSI0MCIgeDI9IjI4IiB5Mj0iNTIiIHN0cm9rZT0iI2M4ZDhlMCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxsaW5lIHgxPSIyMCIgeTE9IjAiIHgyPSIyMCIgeTI9Ii00MCIgc3Ryb2tlPSIjYzhkOGUwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8L2c+CiAgPHJlY3QgeD0iMTI1IiB5PSIzMCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiBmaWxsPSIjNDZiOWM4Ii8+CiAgPHJlY3QgeD0iMTQzIiB5PSIyMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjNDZiOWM4Ii8+CiAgPHJlY3QgeD0iMTQzIiB5PSIzNCIgd2lkdGg9IjgiIGhlaWdodD0iOCIgZmlsbD0iIzQ2YjljOCIvPgogIDxyZWN0IHg9IjE1NSIgeT0iMjgiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzQ2YjljOCIvPgogIDxyZWN0IHg9IjEzNyIgeT0iMTIiIHdpZHRoPSI3IiBoZWlnaHQ9IjciIGZpbGw9IiM0NmI5YzgiIG9wYWNpdHk9IjAuNiIvPgogIDxsaW5lIHgxPSIxMDMiIHkxPSI1NSIgeDI9IjEzMiIgeTI9IjM3IiBzdHJva2U9IiNjOGQ4ZTAiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHRleHQgeD0iMTgiIHk9IjE3MCIgZm9udC1mYW1pbHk9IkFyaWFsIEJsYWNrLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMjgiIGZpbGw9IiNjOGQ4ZTAiIGxldHRlci1zcGFjaW5nPSIxIj5XRVJLPC90ZXh0PgogIDx0ZXh0IHg9Ijk3IiB5PSIxNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCBCbGFjayxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjI4IiBmaWxsPSIjNDZiOWM4IiBsZXR0ZXItc3BhY2luZz0iMSI+QllURTwvdGV4dD4KPC9zdmc+";

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

  // ── Read current lang from URL param ──
  function getLangFromURL() {
    return new URLSearchParams(window.location.search).get('lang') || 'de';
  }

  // ── Navigate to page keeping lang param ──
  function navTo(href) {
    const lang = getLangFromURL();
    if (lang !== 'de') {
      const sep = href.includes('?') ? '&' : '?';
      href = href + sep + 'lang=' + lang;
    }
    window.location.href = href;
  }

  // ── Inject nav CSS ──
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
    #wb-nav a{text-decoration:none}
    .wbn-logo{display:flex;align-items:center}
    .wbn-logo img{height:50px;width:auto;cursor:pointer}
    .wbn-links{display:flex;gap:1.8rem;list-style:none;position:absolute;left:50%;transform:translateX(-50%)}
    .wbn-links a{color:#7a95a8;font-size:.9rem;font-weight:500;letter-spacing:.03em;transition:color .2s;cursor:pointer}
    .wbn-links a:hover,.wbn-links a.active{color:#fff}
    .wbn-right{display:flex;align-items:center;gap:.7rem}
    .wbn-contact{
      background:#46b9c8;color:#0d1117;
      padding:.44rem 1.2rem;border-radius:6px;
      font-weight:700;font-size:.84rem;letter-spacing:.03em;
      cursor:pointer;transition:background .2s,transform .15s;white-space:nowrap;
    }
    .wbn-contact:hover{background:#5dd0de;transform:translateY(-1px)}

    /* Lang picker */
    .wbn-lang{position:relative}
    .wbn-ltoggle{
      display:flex;align-items:center;gap:6px;cursor:pointer;
      background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);
      color:#7a95a8;padding:.4rem .8rem;border-radius:6px;
      font-size:.82rem;font-weight:600;letter-spacing:.05em;
      transition:color .2s,border-color .2s;user-select:none;
    }
    .wbn-ltoggle:hover{color:#fff;border-color:rgba(255,255,255,.3)}
    .wbn-ltoggle svg{width:13px;height:13px;stroke:currentColor;fill:none;stroke-width:1.8;flex-shrink:0}
    .wbn-chev{transition:transform .2s}
    .wbn-lang.open .wbn-chev{transform:rotate(180deg)}
    .wbn-ldrop{
      display:none;position:absolute;top:calc(100% + 8px);right:0;
      background:#1c2633;border:1px solid rgba(70,185,200,.2);
      border-radius:10px;overflow:hidden;width:222px;
      box-shadow:0 14px 36px rgba(0,0,0,.55);z-index:600;
    }
    .wbn-lang.open .wbn-ldrop{display:block}
    .wbn-lsearch-wrap{padding:8px 8px 4px;border-bottom:1px solid rgba(255,255,255,.07)}
    .wbn-lsearch{
      width:100%;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);
      border-radius:6px;padding:.4rem .7rem;color:#fff;
      font-size:.82rem;font-family:inherit;outline:none;
    }
    .wbn-lsearch::placeholder{color:#7a95a8}
    .wbn-lsearch:focus{border-color:rgba(70,185,200,.4)}
    .wbn-llist{max-height:256px;overflow-y:auto;padding:4px 0}
    .wbn-llist::-webkit-scrollbar{width:4px}
    .wbn-llist::-webkit-scrollbar-thumb{background:rgba(70,185,200,.25);border-radius:4px}
    .wbn-lopt{
      display:flex;align-items:center;gap:10px;
      padding:.5rem 1rem;font-size:.85rem;color:#7a95a8;
      cursor:pointer;transition:background .12s,color .12s;
      border:none;background:none;width:100%;text-align:left;
    }
    .wbn-lopt:hover{background:rgba(70,185,200,.1);color:#fff}
    .wbn-lopt.active{color:#46b9c8;font-weight:600}
    .wbn-lno{padding:.8rem 1rem;font-size:.82rem;color:#7a95a8;text-align:center}
    .wbn-lflag{font-size:.95rem;line-height:1;flex-shrink:0;width:20px}

    /* Hide Google Translate bar */
    .goog-te-banner-frame,.skiptranslate{display:none!important}
    body{top:0!important}
    #google_translate_element{display:none}

    @media(max-width:820px){
      .wbn-links{display:none}
    }
  `;
  document.head.appendChild(style);

  // ── Detect active page ──
  const page = window.location.pathname.split('/').pop() || 'index.html';

  // ── Build nav HTML ──
  const nav = document.createElement('nav');
  nav.id = 'wb-nav';
  nav.innerHTML = `
    <div class="wbn-logo" onclick="navTo('index.html')">
      <img src="data:image/svg+xml;base64,${LOGO_B64}" alt="WERKBYTE"/>
    </div>
    <ul class="wbn-links">
      <li><a onclick="navTo('index.html#leistungen')" class="${page==='index.html'?'':''}">Leistungen</a></li>
      <li><a onclick="navTo('ueber-uns.html')" class="${page==='ueber-uns.html'?'active':''}">Über Uns</a></li>
      <li><a onclick="navTo('index.html#sicherheit')" class="">Sicherheit</a></li>
      <li><a onclick="navTo('kontakt.html')" class="${page==='kontakt.html'?'active':''}">Kontakt</a></li>
    </ul>
    <div class="wbn-right">
      <div class="wbn-contact" onclick="navTo('kontakt.html')">Kontakt</div>
      <div class="wbn-lang" id="wbnLang">
        <div class="wbn-ltoggle" id="wbnToggle">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <span id="wbnCurLang">🇩🇪 DE</span>
          <svg class="wbn-chev" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="wbn-ldrop" id="wbnDrop">
          <div class="wbn-lsearch-wrap">
            <input class="wbn-lsearch" id="wbnSearch" type="text"
              placeholder="Sprache suchen / Search..." autocomplete="off"/>
          </div>
          <div class="wbn-llist" id="wbnList"></div>
        </div>
      </div>
    </div>
    <div id="google_translate_element"></div>
  `;

  // Insert nav as first element in body
  document.body.insertBefore(nav, document.body.firstChild);

  // ── Lang logic ──
  let currentLang = getLangFromURL();

  function renderLangList(filter) {
    const list = document.getElementById('wbnList');
    const langs = filter
      ? LANGUAGES.filter(l =>
          l.label.toLowerCase().includes(filter) ||
          l.en.toLowerCase().includes(filter) ||
          l.code.toLowerCase().includes(filter))
      : LANGUAGES;
    if (!langs.length) {
      list.innerHTML = '<div class="wbn-lno">Keine Sprache gefunden</div>';
      return;
    }
    list.innerHTML = langs.map(l => `
      <button class="wbn-lopt ${l.code===currentLang?'active':''}"
        onclick="window._wbnSelectLang('${l.code}','${l.gt}','${l.flag}','${l.label}')">
        <span class="wbn-lflag">${l.flag}</span>${l.label}
      </button>`).join('');
  }

  document.getElementById('wbnToggle').addEventListener('click', () => {
    const wrap = document.getElementById('wbnLang');
    const opening = !wrap.classList.contains('open');
    wrap.classList.toggle('open');
    if (opening) {
      const s = document.getElementById('wbnSearch');
      s.value = '';
      renderLangList('');
      setTimeout(() => s.focus(), 60);
    }
  });

  document.getElementById('wbnSearch').addEventListener('input', function() {
    renderLangList(this.value.toLowerCase().trim());
  });

  document.addEventListener('click', e => {
    if (!document.getElementById('wbnLang').contains(e.target))
      document.getElementById('wbnLang').classList.remove('open');
  });

  // ── Google Translate init ──
  window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
      pageLanguage: 'de',
      autoDisplay: false,
      multilanguagePage: true
    }, 'google_translate_element');

    // Apply lang from URL param after GT loads
    if (currentLang !== 'de') {
      setTimeout(() => applyGT(currentLang), 1000);
    }
  };

  function applyGT(code, attempt) {
    attempt = attempt || 0;
    const lang = LANGUAGES.find(l => l.code === code);
    if (!lang) return;
    const sel = document.querySelector('.goog-te-combo');
    if (sel) {
      sel.value = lang.gt;
      sel.dispatchEvent(new Event('change'));
      // Verify it worked after short delay
      setTimeout(() => {
        const sel2 = document.querySelector('.goog-te-combo');
        if (sel2 && sel2.value !== lang.gt) {
          sel2.value = lang.gt;
          sel2.dispatchEvent(new Event('change'));
        }
      }, 500);
    } else if (attempt < 10) {
      // GT not ready yet, retry
      setTimeout(() => applyGT(code, attempt + 1), 400);
    }
  }

  // Load GT script
  if (!document.getElementById('wbn-gt-script')) {
    const s = document.createElement('script');
    s.id = 'wbn-gt-script';
    s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(s);
  }

  // ── Select language ──
  window._wbnSelectLang = function(code, gt, flag, label) {
    currentLang = code;
    document.getElementById('wbnCurLang').textContent = `${flag} ${code.toUpperCase()}`;
    document.getElementById('wbnLang').classList.remove('open');

    // Update URL param without reload
    const url = new URL(window.location.href);
    if (code === 'de') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', code);
    }
    history.replaceState({}, '', url);

    // Apply translation
    if (code === 'de') {
      // Reload to restore original
      window.location.reload();
    } else {
      applyGT(code);
    }

    // Re-render list to update active state
    renderLangList(document.getElementById('wbnSearch').value.toLowerCase().trim());
  };

  // ── Set label from URL on load ──
  const initLang = LANGUAGES.find(l => l.code === currentLang);
  if (initLang && currentLang !== 'de') {
    document.getElementById('wbnCurLang').textContent = `${initLang.flag} ${initLang.code.toUpperCase()}`;
  }

  renderLangList('');

})();
