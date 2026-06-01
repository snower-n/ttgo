(function () {
  var nav = document.body.getAttribute('data-nav');
  if (nav) {
    document.querySelectorAll('.nav-links a[data-nav="' + nav + '"]').forEach(function (el) {
      el.classList.add('active');
    });
  }

  var toggle = document.getElementById('menuToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  document.querySelectorAll('form[data-ttgo-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var data = {};
      fd.forEach(function (v, k) { data[k] = v; });
      data.submittedAt = new Date().toISOString();
      var key = form.getAttribute('data-storage') || 'ttgo_messages';
      var list = JSON.parse(localStorage.getItem(key) || '[]');
      list.push(data);
      localStorage.setItem(key, JSON.stringify(list));
      form.reset();
      var toast = document.getElementById('toast');
      if (toast) {
        toast.classList.add('show');
        setTimeout(function () { toast.classList.remove('show'); }, 4000);
      }
    });
  });
})();
