// Add any custom javascript here.

/**
 * Aplica target="_blank" y rel="noopener noreferrer" a todos los enlaces externos de la página.
 *
 * Se considera enlace externo cualquier <a href> que:
 *  - Comience por http/https (URL absoluta), Y
 *  - No apunte a eustat.eus
 *
 * Esto cubre los campos de metadatos del indicador (dato_global, indicador_meta_enlace, etc.)
 * que se almacenan como HTML crudo en los YAML y Jekyll no puede modificar en tiempo de build,
 * así como cualquier otro enlace externo que pueda añadirse en el futuro.
 *
 * Si el enlace ya tiene target="_blank", setAttribute lo sobreescribe sin duplicar.
 */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href && /^https?:\/\//i.test(href) && href.indexOf('eustat.eus') === -1) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
