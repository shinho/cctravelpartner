(function () {
  function getBasePath() {
    var pathname = window.location.pathname.replace(/\\/g, '/');
    var segments = pathname.split('/').filter(Boolean);
    var pagesIndex = segments.lastIndexOf('pages');
    var depth = pagesIndex === -1 ? 0 : segments.length - pagesIndex - 1;
    return '../'.repeat(depth);
  }

  var base = getBasePath();

  function replacePlaceholders(html) {
    return html.replace(/__ROOT__/g, base);
  }

  function loadPartial(id, path) {
    return fetch(path, { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Unable to load ' + path);
        }
        return response.text();
      })
      .then(function (html) {
        var container = document.getElementById(id);
        if (container) {
          container.innerHTML = replacePlaceholders(html);
        }
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    Promise.all([
      loadPartial('site-header', base + 'assets/header.html'),
      loadPartial('site-footer', base + 'assets/footer.html')
    ]).catch(function (error) {
      console.error(error);
    });
  });
})();
