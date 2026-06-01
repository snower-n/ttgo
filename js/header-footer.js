(function () {
  var footers = document.querySelectorAll('footer');
  footers.forEach(function (footer) {
    if (footer.querySelector('.footer-main')) return;
    footer.innerHTML =
      '<div class="container footer-main">' +
        '<div class="footer-col">' +
          '<div class="logo-foot">TTGO</div>' +
          '<p style="font-size:.88rem;opacity:.8;line-height:1.6" data-i18n="footer.desc"></p>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4 data-i18n="footer.services"></h4>' +
          '<ul>' +
            '<li><a href="day-tours.html" data-i18n="footer.day"></a></li>' +
            '<li><a href="multi-day-tours.html" data-i18n="footer.multi"></a></li>' +
            '<li><a href="charter.html" data-i18n="footer.charter"></a></li>' +
            '<li><a href="airport.html" data-i18n="footer.airport"></a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4 data-i18n="footer.about"></h4>' +
          '<ul>' +
            '<li><a href="about.html" data-i18n="footer.aboutUs"></a></li>' +
            '<li><a href="contact.html" data-i18n="footer.contactLink"></a></li>' +
            '<li><a href="index.html#booking" data-i18n="footer.onlineBook"></a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4 data-i18n="footer.contact"></h4>' +
          '<div class="contact-item" data-i18n="footer.wechat"></div>' +
          '<div class="contact-item" data-i18n="footer.email"></div>' +
          '<div class="contact-item" data-i18n="footer.hours"></div>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<div class="container" data-i18n="footer.copy"></div>' +
      '</div>';
  });

  if (window.TTGO_I18N) TTGO_I18N.apply();
})();
