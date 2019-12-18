// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"instagramPost.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InstagramPost =
/*#__PURE__*/
function () {
  function InstagramPost() {
    _classCallCheck(this, InstagramPost);

    this.img = "";
    this.user = "";
    this.like = 0;
    this.hashtags = [];
  }

  _createClass(InstagramPost, [{
    key: "hastag",
    value: function hastag(tag) {
      for (var i = 0; i < this.hashtags.length; i++) {
        if (this.hashtags[i] == tag) return true;
      }

      return false;
    }
  }]);

  return InstagramPost;
}();

exports.default = InstagramPost;
},{}],"instagramModel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _instagramPost = _interopRequireDefault(require("./instagramPost"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InstagramModel =
/*#__PURE__*/
function () {
  function InstagramModel() {
    _classCallCheck(this, InstagramModel);

    console.log("instagrammodle constructor");
    var p1 = new _instagramPost.default();
    p1.img = "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiCkY7J163mAhUFC-wKHUdWBhoQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.arabpng.com%2Fpng-fz80nt%2F&psig=AOvVaw1qB-rzu4BE9nQHq8sMwYfV&ust=1576156695863820";
    p1.hashtags = ["Sport", "Kultur"];
    p1.user = ["Ein Spiler"];
    var p2 = new _instagramPost.default();
    p2.img = "http://www.kzvbw.de/site/binaries/subthema/content/gallery/kzvbw/presse/politik/presse_politik_jacek-dudzinski_717x403.jpg";
    p2.hashtags = ["Politik", "Musik"];
    p2.user = ["Ein Politker"];
    var p3 = new _instagramPost.default();
    p3.img = "data:image/jpeg;base64,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";
    p3.hashtags = ["gggg"];
    p3.user = ["Ein GGGGer"];
    var p4 = new _instagramPost.default();
    p4.img = "https://upload.wikimedia.org/wikipedia/commons/5/54/Augsburg_Tram_4.png";
    p4.hashtags = ["gggg", "4"];
    p4.user = ["Ein Politker"];
    this.posts = [p1, p2, p3, p4];
    this.filterposts = [];
  }

  _createClass(InstagramModel, [{
    key: "filterByTag",
    value: function filterByTag(tag) {
      console.log("filterByTag", tag);
      this.filterposts = [];

      for (var i = 0; i < this.posts.length; i++) {
        var post = this.posts[i];

        if (post.hastag(tag)) {
          this.filterposts.push(post);
        }
      }
    }
  }]);

  return InstagramModel;
}();

exports.default = InstagramModel;
},{"./instagramPost":"instagramPost.js"}],"instagramView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InstagramView =
/*#__PURE__*/
function () {
  function InstagramView(m) {
    _classCallCheck(this, InstagramView);

    this.model = m;
    console.log("InstagramView constructor", this.model);
  }

  _createClass(InstagramView, [{
    key: "renderPosts",
    value: function renderPosts() {
      console.log("renderPost", this.model);
      var container = document.getElementById("postslist");

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      for (var i = 0; i < this.model.filterposts.length; i++) {
        var post = this.model.filterposts[i];
        var newShowpost = document.createElement("figure");
        newShowpost.className = 'newShowpost';
        var user = document.createTextNode(post.user);
        user.className = 'userName';
        var newPostUser = document.createElement("p");
        newPostUser.className = 'newPostUser';
        var textHash = document.createTextNode("This is the results for The Hashtag :");
        var hashtags = document.createTextNode(post.hashtags);
        hashtags.className = 'hashtags';
        var newPostImg = document.createElement("img");
        var postImgUrl = post.img;
        newShowpost.appendChild(newPostUser);
        container.appendChild(newShowpost);
        newShowpost.appendChild(newPostImg);
        newShowpost.appendChild(textHash);
        newPostImg.setAttribute("src", postImgUrl);
        newShowpost.appendChild(newPostImg);
        document.getElementById("postslist").appendChild(user);
        document.getElementById("postslist").appendChild(newShowpost);
        document.getElementById("postslist").appendChild(textHash);
        document.getElementById("postslist").appendChild(hashtags);
        container.appendChild(newShowpost);
        container.appendChild(newPostUser);
        newShowpost.appendChild(hashtags);
        newShowpost.appendChild(user);
      }
    }
  }]);

  return InstagramView;
}();

var _default = InstagramView;
exports.default = _default;
},{}],"instagramController.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InstagramController =
/*#__PURE__*/
function () {
  function InstagramController(instaModel, instaView) {
    _classCallCheck(this, InstagramController);

    this.view = instaView;
    this.model = instaModel;
    console.log('hio');
  }

  _createClass(InstagramController, [{
    key: "searchByTag",
    value: function searchByTag(tag) {
      console.log('searchByTag:', tag); //var searchByTag = new tag(input);

      this.model.filterByTag(tag);
      this.view.renderPosts(tag);
    }
  }]);

  return InstagramController;
}();

var _default = InstagramController;
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _instagramModel = _interopRequireDefault(require("./instagramModel"));

var _instagramView = _interopRequireDefault(require("./instagramView"));

var _instagramController = _interopRequireDefault(require("./instagramController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instaModel = new _instagramModel.default();
var instaView = new _instagramView.default(instaModel);
var instaController = new _instagramController.default(instaModel, instaView);
var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function (ev) {
  ev.preventDefault();
  var input = document.getElementById("newTag").value;
  instaController.searchByTag(input);
});
},{"./instagramModel":"instagramModel.js","./instagramView":"instagramView.js","./instagramController":"instagramController.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49574" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Insta-Frontend.e31bb0bc.js.map