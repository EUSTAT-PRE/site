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
/**
 * Aplica target="_blank" a un enlace externo (URL absoluta que no sea eustat.eus).
 */
function applyExternalLinkTarget(a) {
  var href = a.getAttribute('href');
  if (href && /^https?:\/\//i.test(href) && href.indexOf('eustat.eus') === -1) {
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Procesar todos los enlaces presentes en el DOM inicial.
  document.querySelectorAll('a[href]').forEach(applyExternalLinkTarget);

  // MutationObserver para enlaces que Open SDG inyecta dinámicamente
  // (ej. pestaña "Indicador internacional" que se hidrata al hacer clic).
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType !== 1) return; // solo elementos
        // El propio nodo, si es un <a>
        if (node.tagName === 'A') applyExternalLinkTarget(node);
        // Todos los <a> dentro del nodo añadido
        node.querySelectorAll && node.querySelectorAll('a[href]').forEach(applyExternalLinkTarget);
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Añade la clase is-sticky al wrapper de la barra ODS cuando está pegado al top,
  // para activar la sombra y el efecto visual de barra fija.
  var odsWrapper = document.querySelector('.ods-navigation-wrapper');
  if (odsWrapper) {
    var wrapperTop = odsWrapper.offsetTop;
    window.addEventListener('scroll', function () {
      odsWrapper.classList.toggle('is-sticky', window.scrollY >= wrapperTop);
    }, { passive: true });
  }
});
