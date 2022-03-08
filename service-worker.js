/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8e92ad1c24a242656567cf22798b1abd"
  },
  {
    "url": "assets/css/0.styles.59a4ae6f.css",
    "revision": "5e9ee275656071a87b54489a57d58421"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cb4f97b2.js",
    "revision": "5ad0e1504717a93d2ef0cd431ca2f2be"
  },
  {
    "url": "assets/js/11.702ab0c6.js",
    "revision": "94ab3dcbbd7c532c0209d80e85375bd3"
  },
  {
    "url": "assets/js/12.ff0f64f2.js",
    "revision": "297660cd384116bdde8c20d22e8cb9d9"
  },
  {
    "url": "assets/js/13.ab3cf34a.js",
    "revision": "5b0c575dfca2e4e470f65f308bd77344"
  },
  {
    "url": "assets/js/14.89e9bd7f.js",
    "revision": "c833c0ac3d00430153e28822620f06a1"
  },
  {
    "url": "assets/js/15.5e03c17e.js",
    "revision": "d2f71fbf755124b884f86d1c5fe0af37"
  },
  {
    "url": "assets/js/16.94aa8007.js",
    "revision": "9372ed92f8e5b95b5f05b54bc4dfc8f6"
  },
  {
    "url": "assets/js/17.99a6965c.js",
    "revision": "1c446780c7a9b0fe08e0d722f01835c0"
  },
  {
    "url": "assets/js/18.78e21869.js",
    "revision": "a3d03a99eed18574a1db96592654d3b1"
  },
  {
    "url": "assets/js/19.97e887d4.js",
    "revision": "b1e73962bbc65d4c9eeae406c0512299"
  },
  {
    "url": "assets/js/2.3401e4ec.js",
    "revision": "a9ac7875b56dbd23e51bd224cffc242f"
  },
  {
    "url": "assets/js/20.3878e926.js",
    "revision": "e704bd70e5edaa46fc1117f9e5678d52"
  },
  {
    "url": "assets/js/21.2003da3b.js",
    "revision": "e0a640108fd5f13cb0ba08240b9d465d"
  },
  {
    "url": "assets/js/22.17e88e0b.js",
    "revision": "1dd0e4aec20c16d5900068b81989c273"
  },
  {
    "url": "assets/js/23.ef7d42a5.js",
    "revision": "d52ba350089bd6c80751311b5c975491"
  },
  {
    "url": "assets/js/3.7fbcfaa7.js",
    "revision": "193c411481a5479f5ea32057790fc5e0"
  },
  {
    "url": "assets/js/4.86fd373a.js",
    "revision": "37fb213d192464f678ee452fcc5b897e"
  },
  {
    "url": "assets/js/5.0fb019fb.js",
    "revision": "84642b2d8d658890c1daaa041ee2ab78"
  },
  {
    "url": "assets/js/6.34a486fd.js",
    "revision": "11bb471334ddb22a792389b529c8f222"
  },
  {
    "url": "assets/js/7.f2581e38.js",
    "revision": "9483731fd626a8e99d9fcbc882c9c710"
  },
  {
    "url": "assets/js/8.8ce5c9b2.js",
    "revision": "f1fa5a4e5409fc30e5fb53f634c380eb"
  },
  {
    "url": "assets/js/9.b1d23eff.js",
    "revision": "e1b46cb0da57df411d2734bddba76818"
  },
  {
    "url": "assets/js/app.ad538475.js",
    "revision": "b26ff5bd3344ff2713dbc7fb97aaad7b"
  },
  {
    "url": "google603171b62dec4aac.html",
    "revision": "31d70d981f06209ee337ed729ce7075d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "115558599b1f0eb4b8ea600d7d06447f"
  },
  {
    "url": "guide/index.html",
    "revision": "60349731ae38d4d3c205f540f9a2f3b5"
  },
  {
    "url": "guide/locale.html",
    "revision": "fa7801048972fd6534f18fa9dc3131e8"
  },
  {
    "url": "guide/scoped-slot.html",
    "revision": "8003bebb380a16fc93c5344c795828cd"
  },
  {
    "url": "guide/slot.html",
    "revision": "794957444c6c46b00ab9abc1c27908b8"
  },
  {
    "url": "guide/utilities.html",
    "revision": "2b073fd67171802b70dcffa31371152b"
  },
  {
    "url": "images/vue-pivottable-demo.gif",
    "revision": "dbf19b1e437a35f12467d5f38986f10d"
  },
  {
    "url": "index.html",
    "revision": "8254953ff30ee7d68ffd639382894371"
  },
  {
    "url": "ko/guide/data.html",
    "revision": "1d4d6e93fc00fd8c907f0344c79f28d7"
  },
  {
    "url": "ko/guide/getting-started.html",
    "revision": "170ad2f8fa4eec3bb9a58a0a13673570"
  },
  {
    "url": "ko/guide/index.html",
    "revision": "16e0c177381077bd97f0044f49efa4bb"
  },
  {
    "url": "ko/guide/props.html",
    "revision": "dd3e7f1e50935bba0c6f85addb278dac"
  },
  {
    "url": "ko/guide/style.html",
    "revision": "1004eb70d796df9ff8806c2d01075005"
  },
  {
    "url": "ko/index.html",
    "revision": "fe67deaabc18e800b0bac3eb21f80f06"
  },
  {
    "url": "props/index.html",
    "revision": "81a833341ed92e7ac8ce1f6f074d03c6"
  },
  {
    "url": "styling/index.html",
    "revision": "05e9cc36965fef121851a4302cd9ae71"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
