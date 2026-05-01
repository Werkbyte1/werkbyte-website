;(function(){

var T={
  de:{
    /* NAV */
    'nav.start':'Startseite',
    'nav.about':'Über Uns',
    'nav.services':'Leistungen',
    'nav.contact':'Kontakt',
    'nav.cta':'Anfrage senden →',
    /* INDEX - Hero */
    'hero.badge':'IRATA ZERTIFIZIERT · WELTWEIT',
    'hero.h1a':'Industrieklettern &amp;',
    'hero.h1b':'Maschinenservice',
    'hero.sub':'Flexibel. Sicher. Weltweit einsatzbereit.',
    'hero.desc':'Wir realisieren Montage, Wartung und Servicearbeiten an Industrieanlagen in schwer zugänglichen Bereichen. Sicher, effizient und ohne Gerüst oder Bühne.',
    'hero.btn1':'Anfrage senden',
    'hero.btn2':'Unsere Leistungen',
    /* INDEX - Leistungen */
    'serv.label':'Was wir tun',
    'serv.title':'Unsere Leistungen',
    'serv.sub':'Professionelle Höhenarbeit und Industriemontage',
    'serv.1.title':'Höhenarbeiten',
    'serv.1.desc':'Industriekletterarbeiten für Montage, Wartung, Inspektion und Reinigung an Anlagen, Bauwerken und schwer zugänglichen Bereichen.',
    'serv.2.title':'Maschinenwartung',
    'serv.2.desc':'Industrieller Service für Maschinen und Anlagen. Von Inspektion und Wartung über Reparatur bis zur Inbetriebnahme.',
    'serv.3.title':'Homogenisatoren',
    'serv.3.desc':'Service für Hochdruck-Homogenisatoren verschiedener Hersteller: Wartung, Diagnose, Reparatur, Störungsbehebung und Montage.',
    /* INDEX - Sicherheit */
    'safe.1.title':'Sicherheit &amp; Qualität',
    'safe.2.title':'Warum <span style="color:var(--cyan)">WERK</span>BYTE?',
    'safe.band':'Unsere Leistungen richten sich an <strong style="color:var(--white)">Industrie, Anlagenbetreiber, Gewerbebkunden</strong> und <strong style="color:var(--white)">technische Dienstleister</strong>',
    /* CONTACT */
    'contact.label':'Kontakt',
    'contact.title':'Anfrage senden',
    'contact.sub':'Beschreib dein Anliegen. Wir melden uns innerhalb von 24 Stunden.',
    /* UEBER UNS */
    'about.label':'Wer wir sind',
    'about.title':'Zwei Fachleute. Eine Mission.',
    'about.sub':'Industriemechatronik trifft Höhentechnik. Wir bringen Lösungen dorthin, wo andere nicht hinkommen.',
    /* FOOTER */
    'footer.imp':'Impressum',
    'footer.dat':'Datenschutz'
  },
  en:{
    /* NAV */
    'nav.start':'Home',
    'nav.about':'About Us',
    'nav.services':'Services',
    'nav.contact':'Contact',
    'nav.cta':'Send Request →',
    /* INDEX - Hero */
    'hero.badge':'IRATA CERTIFIED · WORLDWIDE',
    'hero.h1a':'Industrial Climbing &amp;',
    'hero.h1b':'Machine Service',
    'hero.sub':'Flexible. Safe. Ready to deploy worldwide.',
    'hero.desc':'We carry out assembly, maintenance and service work on industrial plants in hard-to-reach areas. Safe, efficient and without scaffolding or platforms.',
    'hero.btn1':'Send Request',
    'hero.btn2':'Our Services',
    /* INDEX - Leistungen */
    'serv.label':'What we do',
    'serv.title':'Our Services',
    'serv.sub':'Professional rope access and industrial assembly',
    'serv.1.title':'Rope Access Work',
    'serv.1.desc':'Industrial climbing operations for assembly, maintenance, inspection and cleaning at plants, structures and hard-to-reach areas.',
    'serv.2.title':'Machine Maintenance',
    'serv.2.desc':'Industrial service for machinery and plants. From inspection and maintenance to repair and commissioning.',
    'serv.3.title':'Homogenizers',
    'serv.3.desc':'Service for high-pressure homogenizers from various manufacturers: maintenance, diagnosis, repair, troubleshooting and assembly.',
    /* INDEX - Sicherheit */
    'safe.1.title':'Safety &amp; Quality',
    'safe.2.title':'Why <span style="color:var(--cyan)">WERK</span>BYTE?',
    'safe.band':'Our services are aimed at <strong style="color:var(--white)">industry, plant operators, commercial customers</strong> and <strong style="color:var(--white)">technical service providers</strong>',
    /* CONTACT */
    'contact.label':'Contact',
    'contact.title':'Send Request',
    'contact.sub':'Describe your concern. We will get back to you within 24 hours.',
    /* UEBER UNS */
    'about.label':'Who we are',
    'about.title':'Two Experts. One Mission.',
    'about.sub':'Industrial mechatronics meets rope access. We bring solutions where others cannot reach.',
    /* FOOTER */
    'footer.imp':'Legal Notice',
    'footer.dat':'Privacy Policy'
  }
};

function getLang(){
  var s=location.search;
  if(!s)return 'de';
  var p=s.slice(1).split('&');
  for(var i=0;i<p.length;i++){
    var kv=p[i].split('=');
    if(kv[0]==='lang')return decodeURIComponent(kv[1]||'de');
  }
  return 'de';
}

function applyTranslations(){
  var lang=getLang();
  if(lang==='de')return; /* DE is default, no changes needed */
  var t=T[lang]||T['en']; /* Fall back to EN for unsupported languages */
  /* Apply to all elements with data-i18n attribute */
  var els=document.querySelectorAll?document.querySelectorAll('[data-i18n]'):[];
  for(var i=0;i<els.length;i++){
    var key=els[i].getAttribute('data-i18n');
    if(t[key]!==undefined){
      els[i].innerHTML=t[key];
    }
  }
  /* Update nav links */
  var nblinks=document.getElementById('nblinks');
  if(nblinks){
    var as=nblinks.getElementsByTagName('a');
    var keys=['nav.start','nav.about','nav.services','nav.contact'];
    for(var i=0;i<as.length&&i<keys.length;i++){
      if(t[keys[i]])as[i].textContent=t[keys[i]];
    }
  }
  /* Update mobile menu */
  var mob=document.getElementById('nbMob');
  if(mob){
    var mas=mob.getElementsByTagName('a');
    var mkeys=['nav.start','nav.about','nav.services','nav.contact','nav.cta'];
    var ki=0;
    for(var i=0;i<mas.length;i++){
      if(mas[i].className.indexOf('nb-cta')>=0){
        if(t['nav.cta'])mas[i].textContent=t['nav.cta'];
      } else if(ki<4){
        if(t[mkeys[ki]])mas[i].textContent=t[mkeys[ki]];
        ki++;
      }
    }
  }
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',applyTranslations);
} else {
  applyTranslations();
}
})();
