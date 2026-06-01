(function () {
  function render() {
    var type = document.body.getAttribute('data-detail-type');
    if (!type || !window.TTGO_DATA) return;

    var params = new URLSearchParams(window.location.search);
    var id = params.get('id');
    var list = type === 'day' ? TTGO_DATA.dayTours : TTGO_DATA.multiDayTours;
    var tour = list.find(function (t) { return t.id === id; });
    var root = document.getElementById('detailRoot');
    var tFn = window.TTGO_I18N ? TTGO_I18N.t.bind(TTGO_I18N) : function (k) { return k; };
    var lang = window.TTGO_I18N ? TTGO_I18N.getLang() : 'zh';

    if (!tour) {
      if (root) {
        root.innerHTML = '<div class="container" style="padding:80px 0;text-align:center"><h2>' + tFn('detail.notFound') + '</h2><p style="color:#718096;margin:16px 0"><a href="' + (type === 'day' ? 'day-tours.html' : 'multi-day-tours.html') + '">' + tFn('detail.backList') + '</a></p></div>';
      }
      document.title = tFn('detail.notFound') + ' | TTGO';
      return;
    }

    document.title = tour.title + ' | TTGO';

    var listLabel = type === 'day' ? tFn('nav.day') : tFn('nav.multi');
    var listUrl = type === 'day' ? 'day-tours.html' : 'multi-day-tours.html';
    var svcKey = type === 'day' ? 'day' : 'multi';

    var itineraryHtml = tour.itinerary.map(function (item) {
      return '<li><strong>' + item.time + '</strong> ' + item.text + '</li>';
    }).join('');

    var highlightsHtml = tour.highlights.map(function (h) {
      return '<span style="display:inline-block;margin:4px 8px 4px 0;padding:4px 12px;background:rgba(11,61,110,.08);color:#0b3d6e;border-radius:4px;font-size:.85rem">' + h + '</span>';
    }).join('');

    var includesHtml = tour.includes.map(function (i) {
      return '<li>' + i + '</li>';
    }).join('');

    var bookUrl = 'contact.html?service=' + svcKey + '&route=' + encodeURIComponent(tour.title);

    root.innerHTML =
      '<div class="detail-hero" style="background-image:linear-gradient(105deg,rgba(6,40,71,.5),rgba(11,61,110,.3)),url(\'' + tour.image + '\')">' +
        '<div class="container"><h1>' + tour.title + '</h1><p>' + tour.region + ' · ' + tour.duration + '</p></div>' +
      '</div>' +
      '<div class="container">' +
        '<div class="breadcrumb"><a href="index.html">' + tFn('common.home') + '</a> / ' +
          '<a href="' + listUrl + '">' + listLabel + '</a> / ' + tour.title +
        '</div>' +
        '<div class="detail-layout">' +
          '<div class="detail-main">' +
            '<p>' + tour.summary + '</p>' +
            '<div style="margin:16px 0">' + highlightsHtml + '</div>' +
            '<h2>' + tFn('detail.itinerary') + '</h2>' +
            '<ul class="itinerary">' + itineraryHtml + '</ul>' +
            '<h2>' + tFn('detail.includes') + '</h2>' +
            '<ul class="itinerary">' + includesHtml + '</ul>' +
            '<h2>' + tFn('detail.notes') + '</h2>' +
            '<p>' + tour.notes + '</p>' +
          '</div>' +
          '<aside class="sidebar-card">' +
            '<div class="price-big">' + tour.price + '</div>' +
            '<div class="spec">📍 ' + tour.region + '</div>' +
            '<div class="spec">⏱ ' + tour.duration + '</div>' +
            '<a href="' + bookUrl + '" class="btn btn-primary">' + tFn('detail.bookNow') + '</a>' +
            '<a href="' + listUrl + '" class="btn btn-outline" style="display:block;margin-top:10px;text-align:center">' + tFn('detail.backList') + '</a>' +
          '</aside>' +
        '</div>' +
      '</div>';
  }

  render();
  window.addEventListener('ttgo:langchange', function () {
    if (window.TTGO_DATA.refresh) TTGO_DATA.refresh();
    render();
    if (window.TTGO_I18N) TTGO_I18N.apply();
  });
})();
