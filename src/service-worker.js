---
---

(() => {
	'use strict';

	let version = 'v{{ "now" | date: "%Y%m%d%H%M%S" }}';

	let clearOldCaches = () => {
		return caches.keys().then(keys => {
			return Promise.all(keys.map(key => {
				if (key.indexOf(version) === -1) {
					return caches.delete(key);
				}
			}));
		});
	};

	let updateCache = () => {
		return caches.open(version).then(cache => {
			cache.addAll([
				'{% asset_path application.css %}',
				'{% asset_path application.js %}',
				'{% asset_path html.png %}',
				'{% asset_path theorchid-256x256.png %}',
				'{% asset_path releases/beyond-the-vast-endless-sea-800.jpg %}',
				'{% asset_path releases/new-mexico-ep-800.jpg %}',
				'{% asset_path releases/shadowing-lull-ep-800.jpg %}'
			]);

			return cache.addAll([
				'/',
				'/releases',
				'/releases/beyond-the-vast-endless-sea',
				'/releases/new-mexico-ep',
				'/releases/shadowing-lull-ep',
				'/shows'
			]);
		});
	};

	// Clear old caches…
	self.addEventListener('activate', event => {
		event.waitUntil(clearOldCaches().then(() => {
			return self.clients.claim();
		}));
	});

	// Load resources from the cache first, then the network…
	self.addEventListener('fetch', event => {
		let request = event.request;

		event.respondWith(caches.match(request).then(response => {
			return response || fetch(request);
		}));
	});

	// Populate the cache…
	self.addEventListener('install', event => {
		event.waitUntil(updateCache().then(() => {
			return self.skipWaiting();
		}));
	});
})();