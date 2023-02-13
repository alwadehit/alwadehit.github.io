'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "737cf21a6c1f09dcb47e998fd28d4f13",
".git/config": "0783a1341985f286284eb9f7ca78f992",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "775a89a456b786d6cc8fffbcd0b8d152",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "92d1d5d8dad646bd1772176cbad14283",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e7d356877048b0d9bb58bffe0cba444b",
".git/logs/refs/heads/main": "b799b3806dfed7032ee9aafb5c3cd141",
".git/logs/refs/remotes/origin/main": "8e4f616c6d82e851021b2963f5ebd5d8",
".git/objects/04/659ec08451036b1f4ff8c43ed05c60636f8722": "b1fffc8e675eadd031c42cb7bbc5d364",
".git/objects/08/e3bdfd8230a2d3c762ee1f64db701c579b8643": "226547aba92ecfa1361f14eaf3c1c779",
".git/objects/12/f6a9a3f18b5d163044ea5583327d6c69ca41dc": "4be083d3bfeb5335376065316f621383",
".git/objects/18/23a52ba3a4e340fa318e5bf14faabdbd5ba8e6": "f47f846dc4346eb233a7dea12761de73",
".git/objects/1e/d1f0d391334400c82041458ec95f3923e66d23": "0ed2daa4f50e5de891c00144527167e0",
".git/objects/23/2222b3c4b9eb63ba4e88a373b72461b3c23999": "cc47c57302d2748dc7d6e1d2abcba694",
".git/objects/24/77a0c308f14a4035bfc1c54f046ee1536c77e2": "214cfa22962dd92cbb1be4daed3f883c",
".git/objects/2c/6c013ba4c94ce70162c04c0bb91095119d6b8c": "b202c51b82ad7e50071f9491b1248f48",
".git/objects/32/b9e387d84a5585653dbe4d7d31b1d45bfce258": "339cbf5461e2cf587372cbfe17612d2f",
".git/objects/3d/1954017343fc422eae7ca10cf09d07fb46774c": "f75458b2ed556899c381ab041dd9f8ce",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/602f010ddbbd30b06c2b988285d5b0fbe97ff0": "a659723110dd23da7de4003da1360ba5",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/49/125cc313851a39ffab14ce88607bd031cbe79f": "f2a0476ee71c7712f06114005d943a30",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4a/d105dcbb4c56e84837fd2058001c4d81853f92": "14e0afc6badf44c3c0c1641a96025db6",
".git/objects/4b/acee50be9b539ed8d821626a11de72b0feaa44": "63840dc8eba6e2ea6e335d2895e5bb66",
".git/objects/52/316dec3e92948aa8757e08a61372aebd09ef17": "0fa7f47a970a7d6308d32052be6aba60",
".git/objects/57/7296372cee89ac06a6fcef8b8a633adc97902f": "fdcfb6d16420b02b1486b68ab62c2d48",
".git/objects/58/d369b44f076c2271ad4e4ab8bb614b3e978a96": "23f7f86d63e3b2f811fa50bf88e3b33c",
".git/objects/5d/e4ba3e8371b77c5a400fd4bb7ec96a724c0ff4": "4e860129a7e1f811e0c897303debc0ad",
".git/objects/64/fce8d42db7c4f67307e8490839a2e6917992fd": "de7d388a41d7dbdd1ad32d8a57be1e2a",
".git/objects/67/61f7e9ef54fc51fa2b951ccd5355f8a06f6f5f": "5063cf0bdce86bbdd3a0b223f572ebab",
".git/objects/69/d9616e3fbde7aa201e427a0a0d768bc6dcef69": "e03b6a3257a30cf61697606839203587",
".git/objects/6b/851bd65b5d6005fadcf9a165c309868da39b06": "25419414a2fd734f95f5197e497d6851",
".git/objects/74/fb41d39a5008a73112b7c80aab235b0aeee1cd": "9fcac02f94f2c2d88e71f88e65134a2e",
".git/objects/78/63e5349e31749b393b33e6eeeb59d9d785bac5": "e56bd20599fb403305e589a7d07f5b59",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/89/992445436c1b83a5738a6451306c04fe144d4c": "7c3938adfe3fe13cbc161d25716e186f",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/7b3ed92d6ab9b51e46e3751c542e0ba1235103": "b633d79199fd8870b1f2b8b5ff03e59d",
".git/objects/a9/46ee2138c8f5f790ed26807341d31d0f468cf4": "2fc0f156b06c0f1edcb1a0ae552c0a36",
".git/objects/aa/333094d862d1c7b69d67f891acc1a53ea35a52": "f1be30113b96c5b6c06a4fb73ae773e0",
".git/objects/ae/5b3bf3b3dff2849fb30faaf1fd1704b046e5d0": "f41abacbe816c4d22148fe7e0d9690fa",
".git/objects/ae/5c9a840460f8622ff5b9e0b2ddcbe751a4e787": "196dfb5b0ec6e1bb99ed7ff041344891",
".git/objects/b4/2f01d6c842db92216d2888001b9f97b85e076c": "ed0e14a25694e924bcf806bbc9859c73",
".git/objects/b5/4fbc3e78e63421e569ce6e0915ab0a60f35fb4": "d8f895a0b6d6a1e700c7f1c839f28627",
".git/objects/b5/d35420ddab8175c00a6bc9d44dd5045bc544e4": "eaa6720ccb49a4e574d73a7aab964b3f",
".git/objects/b8/ae58ad083f4014161548ccfcedd31bb3bfcd93": "5df4375f06f37565cb5cd21878c489dc",
".git/objects/bd/bb1e181c9695ae2d178155d73fe379d3f23abc": "54260a282981d4a3953322dda87e4cba",
".git/objects/bf/4e5e72b384826960cbfc41e318bd025a763f95": "0a298b76b56a0ddc5a8833b8176dfe62",
".git/objects/c0/1626ec675107a3e4c384c0a9ecfca799f1430a": "2ffdfb1909a903070e8114b382f67dcb",
".git/objects/c2/02ea80922c218f148a61f9a0b374ebc4720723": "01b8428f7c55437c6b3df9fe47538825",
".git/objects/c4/703a56e5cc29c469a69278b54253508b77dddb": "f3a2adb01d73821e83ac6e41831eacd8",
".git/objects/c4/877a85b6753e25d8e10a5f623dc50d1524d935": "8e94bc59551e3eb13dd90fec8b97b61a",
".git/objects/c5/0db8878fe0c48062cca05846670a88602a2a5e": "615eac7df7f7ec21d2cd22b81ffe2910",
".git/objects/c5/3593a0985612ab849af1abe6f66207f714e389": "ff0645ae9ad90dde330ba54bffc5d2cc",
".git/objects/c8/2345f4911b884213f7794c20b13ab9347a0699": "b17e50d3f51d8f7da47c16546fe350be",
".git/objects/cb/90f21a83735c9b5887fc40d90264d95a85ad7b": "03cbdf472c5269336f1528fbaf4a5137",
".git/objects/d1/fe2faae8b98bcf1eed029d53b0e709fe5bb545": "51f377f23d2dd4c9f519ab35f94153a7",
".git/objects/d3/e7fe32b916cbe7d26679bc36dd940a7d6a7efd": "a2ebd33176d96ae0a0bc70fd0cf4a49d",
".git/objects/d5/eba260013d9ebce4ddfbd38780e5e5c95b479f": "6253da85c0d9994e1a30dd27a854f11c",
".git/objects/d6/4275177d94d944f82b8d1d1d7b055b475f95b6": "1039438af51092c1e8b446c55c7c80f6",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/dd/a7854c7e336a2b6084351ea2101af2b01fa592": "05dc4772bc262d7b9bd41b2aa8e6700d",
".git/objects/dd/cb7238124937ed6fdf607d0ab507716fe713e0": "4b5ed989f6964809052527df0ebe56c3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ec/236ba8e901ef914f3cf38cdc185088b2de1ce4": "becd07becf77fb03b24a5f9117bce2b6",
".git/objects/ef/ffde5c4885179183fd8b0d38efbeacf3440951": "fc58c4b90432fe1cafe21fc99e01c9d6",
".git/objects/f6/82c8508a69531879c4b2e9793cbe7d96a96b80": "c00cdc1e0899e646920d81f1c4a6e90d",
".git/objects/fd/d8cf75141c02ddaeeb0b0cff489d0e4a8ff646": "81e3c1c60fae86cb17f2c704317c92b7",
".git/objects/pack/pack-23d07e1da02f3047381d4e91a19c3a40bfddf229.idx": "2b1ca01bb140ccd685aa2dc9d1db5175",
".git/objects/pack/pack-23d07e1da02f3047381d4e91a19c3a40bfddf229.pack": "4df30dccb42a70bb3e9f98075e59a757",
".git/refs/heads/main": "9e7495bcec71aa4c40184c72b005405b",
".git/refs/remotes/origin/main": "8ea25715dfd009600b89e46da3521a9a",
"assets/AssetManifest.bin": "1622540c7d3a240ceb7ebc52c301e811",
"assets/AssetManifest.json": "126292721adb24f0962a73cc096bf7c4",
"assets/assets/alwadeh.png": "58dad237bfbd7ae685ec5936e29c65e2",
"assets/assets/fonts/Alexandria-Bold.ttf": "1bf93b97df59b33d2371ca545e897887",
"assets/assets/fonts/Alexandria-Regular.ttf": "ed3925cb571103cafb8101b83dab1b5b",
"assets/assets/fonts/Cairo-Bold.ttf": "80ada5fcee2d9415ee00ef7739eba6df",
"assets/assets/fonts/Cairo-Regular.ttf": "81b37df3b28d397659607391993eef22",
"assets/assets/images/alwadehERP01.png": "3b2368ce29354c07c291d13677148805",
"assets/assets/images/alwadehERP02.png": "d5dcc71a4217ade4144c47f48a146872",
"assets/assets/images/alwadehERP03.png": "29d43763fe437b06444c44976ccff23c",
"assets/assets/images/alwadehERP04.png": "25f40aec016db818c7d01b085fe65a44",
"assets/assets/images/alwadehERP05.png": "a914e8001e0709ce3af2095242a10f19",
"assets/assets/images/fatoora01.jpeg": "b7e60eda605244882b148b8c07bee3eb",
"assets/assets/images/fatoora01.png": "08705d151ed3fb5f11e30e468005db96",
"assets/assets/images/fatoora02.jpeg": "bd762a4dd0dd0565c7b2d5b265d006f6",
"assets/assets/images/fatoora02.png": "04b600970fdf85d3dabaa936763f5da0",
"assets/assets/images/fatoora03.jpeg": "b41e77974f22ee7cfdcb0433266655c9",
"assets/assets/images/fatoora03.png": "8a3fa79492b2ad1f578b440e171f267d",
"assets/assets/images/fatoora04.jpeg": "f588d1812ee490671ee42fa79ef51204",
"assets/assets/images/fatoora04.png": "686650f8502a92fd19b62909ca28ffc4",
"assets/assets/images/fatoora05.jpeg": "f17d8814d65cbc5b467977075ef2e308",
"assets/assets/images/fatoora05.png": "3002676729cab357ac94528ade229303",
"assets/assets/login.png": "df32eaf32ae78a7543d6adf16e5d84df",
"assets/assets/logo.png": "d9d62f5b460378d35843e6df8b8aed40",
"assets/assets/player.html": "5a56e6bef066313a27123f0f30764d42",
"assets/assets/whatsapp.png": "aa5031ab32a2515f8135970e3d47da54",
"assets/assets/zatca.png": "d37aeb4e7c44449e25556c5e2f5f73ad",
"assets/FontManifest.json": "325c31d3dc3f12fcc79bd0cdcba48b3d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "bc98ef5b34c69842dd204a43cbe8ab8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "92666cc97576adbea2e2d3061a953137",
"canvaskit/canvaskit.js": "678d9f53b0e5c5f22543631f43279fb9",
"canvaskit/canvaskit.wasm": "6972cd6e8f48c5f3c027416c7b2443a6",
"canvaskit/profiling/canvaskit.js": "5a0f05139f1d43c603dcfc67d15b1ec9",
"canvaskit/profiling/canvaskit.wasm": "09aacbc0d8b20c7ee684e310703e2d86",
"favicon.png": "9955226cabbdff0bfdd55b9a69775686",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "61f2178c79b247b3b6c6d8be650c2f0a",
"icons/Icon-512.png": "b2178c9257679d70e5500cb7ed7af569",
"icons/Icon-maskable-192.png": "61f2178c79b247b3b6c6d8be650c2f0a",
"icons/Icon-maskable-512.png": "b2178c9257679d70e5500cb7ed7af569",
"index.html": "069d5e001d6842323da145f881617ebb",
"/": "069d5e001d6842323da145f881617ebb",
"main.dart.js": "291b9bf87d6519bb8891712f839ad4be",
"manifest.json": "1046394ca1d2d7fc9beb00b62118f232",
"version.json": "980547175e325fe622a3362b84d55b6a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
