(function () {
  function render() {
    var el = document.getElementById('tourList');
    var type = document.body.getAttribute('data-list-type');
    if (!el || !type || !window.TTGO_DATA) return;

    var list = type === 'day' ? TTGO_DATA.dayTours : TTGO_DATA.multiDayTours;
    var detailPage = type === 'day' ? 'day-tour-detail.html' : 'multi-day-detail.html';

    el.innerHTML = list.map(function (t) {
      return (
        '<a class="tour-card" href="' + detailPage + '?id=' + t.id + '">' +
          '<div class="thumb" style="background-image:url(\'' + t.image + '\')"></div>' +
          '<div class="body"><h3>' + t.title + '</h3><p>' + t.summary + '</p>' +
          '<div class="meta"><span class="price">' + t.price + '</span><span class="days">' + t.duration + '</span></div></div></a>'
      );
    }).join('');
  }

  render();
  window.addEventListener('ttgo:langchange', function () {
    if (window.TTGO_DATA.refresh) TTGO_DATA.refresh();
    render();
  });
})();
