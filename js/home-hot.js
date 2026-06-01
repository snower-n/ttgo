(function () {
  function render() {
    var el = document.getElementById('homeHot');
    if (!el || !window.TTGO_DATA) return;
    var day = TTGO_DATA.dayTours.slice(0, 3);
    var multi = TTGO_DATA.multiDayTours.slice(0, 3);
    var html = '';
    day.forEach(function (t) {
      html += '<a class="tour-card" href="day-tour-detail.html?id=' + t.id + '">' +
        '<div class="thumb" style="background-image:url(\'' + t.image + '\')"></div>' +
        '<div class="body"><h3>' + t.title + '</h3><p>' + t.summary + '</p>' +
        '<div class="meta"><span class="price">' + t.price + '</span><span class="days">' + t.duration + '</span></div></div></a>';
    });
    multi.forEach(function (t) {
      html += '<a class="tour-card" href="multi-day-detail.html?id=' + t.id + '">' +
        '<div class="thumb" style="background-image:url(\'' + t.image + '\')"></div>' +
        '<div class="body"><h3>' + t.title + '</h3><p>' + t.summary + '</p>' +
        '<div class="meta"><span class="price">' + t.price + '</span><span class="days">' + t.duration + '</span></div></div></a>';
    });
    el.innerHTML = html;
  }

  render();
  window.addEventListener('ttgo:langchange', function () {
    if (window.TTGO_DATA.refresh) TTGO_DATA.refresh();
    render();
  });
})();
