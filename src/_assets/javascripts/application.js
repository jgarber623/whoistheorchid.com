(function() {
  'use strict';

  // Modifying prototypes ¯\_(Y O L O)_/¯
  NodeList.prototype.forEach = Array.prototype.forEach;

  // Set <iframe> `src`
  document.querySelectorAll('iframe[data-src]').forEach(function(iframe) {
    iframe.src = iframe.getAttribute('data-src') + location.href;
  });
})();
