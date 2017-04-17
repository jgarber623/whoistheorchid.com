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
				'{% asset_path releases/apogee-perigee-800.jpg %}',
				'{% asset_path releases/beyond-the-vast-endless-sea-800.jpg %}',
				'{% asset_path releases/new-mexico-ep-800.jpg %}',
				'{% asset_path releases/shadowing-lull-ep-800.jpg %}',
				'{% asset_path compilations/code-red-an-international-compilation-to-benefit-the-aclu-800.jpg %}',
				'{% asset_path compilations/we-stand-an-international-compilation-in-support-of-planned-parenthood-800.jpg %}'
			]);

			return cache.addAll([
				'/',
				'/releases',
				'/releases/apogee-perigee',
				'/releases/beyond-the-vast-endless-sea',
				'/releases/new-mexico-ep',
				'/releases/shadowing-lull-ep',
				'/shows',
				'/biography'
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
