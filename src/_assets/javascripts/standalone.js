(function(window) {
	'use strict';

	// Handle click events on same-origin links…
	var location = window.location,
		regex = /^(a|html)$/i;

	window.addEventListener('click', function(event) {
		var node = event.target;

		while (!regex.test(node.nodeName)) {
			node = node.parentNode;
		}

		if (node.href && ~node.href.indexOf(location.host)) {
			event.preventDefault();

			window.location = node.href;
		}
	});

	// Update `<html>` element's `class`…
	document.documentElement.classList.add('standalone');
})(window);