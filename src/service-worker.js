---
---

(function() {
	var version = 'v{{ "now" | date: "%Y%m%d%H%M%S" }}';

	var clearOldCaches = function() {
		return caches.keys().then(function(keys) {
			return Promise.all(keys.map(function(key) {
				if (key.indexOf(version) === -1) {
					return caches.delete(key);
				}
			}));
		});
	};

	var updateCache = function() {
		return caches.open(version).then(function(cache) {
			cache.addAll([
				'{% asset_path html.png %}',
				'{% asset_path theorchid.png %}',
				'{% asset_path releases/beyond-the-vast-endless-sea-800.jpg %}',
				'{% asset_path releases/new-mexico-ep-800.jpg %}',
				'{% asset_path releases/shadowing-lull-ep-800.jpg %}'
			]);

			return cache.addAll([
				'/',
				'/releases',
				'/releases/beyond-the-vast-endless-sea',
				'releases/new-mexico-ep',
				'/releases/shadowing-lull-ep'
			]);
		});
	};

	// Clear old caches…
	self.addEventListener('activate', function(event) {
		event.waitUntil(clearOldCaches().then(function() {
			return self.clients.claim();
		}));
	});

	// Load resources from the cache first, then the network…
	self.addEventListener('fetch', function(event) {
		var request = event.request;

		event.respondWith(caches.match(request).then(function(response) {
			return response || fetch(request);
		}));
	});

	// Populate the cache…
	self.addEventListener('install', function(event) {
		event.waitUntil(updateCache().then(function() {
			return self.skipWaiting();
		}));
	});
})();