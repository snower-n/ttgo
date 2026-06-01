window.TTGO_I18N = (function () {
  var STORAGE_KEY = 'ttgo_lang';
  var lang = localStorage.getItem(STORAGE_KEY) || 'zh';

  function t(key) {
    var parts = key.split('.');
    var o = window.TTGO_LOCALES && window.TTGO_LOCALES[lang];
    for (var i = 0; i < parts.length; i++) {
      if (!o) return key;
      o = o[parts[i]];
    }
    return typeof o === 'string' ? o : key;
  }

  function getLang() { return lang; }

  function setLang(next) {
    if (!window.TTGO_LOCALES[next]) return;
    lang = next;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = next === 'zh' ? 'zh-CN' : next === 'ja' ? 'ja' : 'en';
    if (window.TTGO_DATA && TTGO_DATA.refresh) TTGO_DATA.refresh();
    apply();
    window.dispatchEvent(new CustomEvent('ttgo:langchange', { detail: { lang: lang } }));
  }

  function applyEl(el) {
    var key = el.getAttribute('data-i18n');
    if (!key) return;
    var val = t(key);
    if (el.hasAttribute('data-i18n-html')) el.innerHTML = val;
    else el.textContent = val;
  }

  function applySelect(formKey) {
    document.querySelectorAll('select[data-i18n-select="' + formKey + '"]').forEach(function (sel) {
      var opts = TTGO_LOCALES[lang].form && TTGO_LOCALES[lang].form[formKey + 'Options'];
      if (!opts) return;
      var cur = sel.value;
      sel.innerHTML = '';
      Object.keys(opts).forEach(function (k) {
        var o = document.createElement('option');
        o.value = k;
        o.textContent = opts[k];
        if (k === cur) o.selected = true;
        sel.appendChild(o);
      });
    });
  }

  function applyFooter() {
    document.querySelectorAll('footer').forEach(function (footer) {
      if (!footer.querySelector('.footer-main')) return;
      footer.querySelectorAll('[data-i18n]').forEach(applyEl);
    });
  }

  function applyLangSwitcher() {
    document.querySelectorAll('.lang [data-lang]').forEach(function (el) {
      el.classList.toggle('active', el.getAttribute('data-lang') === lang);
      el.onclick = function () { setLang(el.getAttribute('data-lang')); };
    });
  }

  function applyPageBundle() {
    var page = document.body.getAttribute('data-page');
    if (!page || !TTGO_LOCALES[lang].pages || !TTGO_LOCALES[lang].pages[page]) return;
    var bundle = TTGO_LOCALES[lang].pages[page];
    document.querySelectorAll('[data-i18n-page]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-page');
      if (bundle[k]) {
        if (el.hasAttribute('data-i18n-html')) el.innerHTML = bundle[k];
        else el.textContent = bundle[k];
      }
    });
    if (bundle.title) document.title = bundle.title;
  }

  function apply() {
    document.querySelectorAll('[data-i18n]').forEach(applyEl);
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    applySelect('service');
    applyLangSwitcher();
    applyPageBundle();
    applyFooter();
    var toast = document.getElementById('toast');
    if (toast && !toast.classList.contains('show')) toast.textContent = t('toast.success');
  }

  function init() {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang === 'ja' ? 'ja' : 'en';
    apply();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { t: t, getLang: getLang, setLang: setLang, apply: apply };
})();
