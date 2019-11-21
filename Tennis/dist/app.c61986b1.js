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
})({"Shape.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Shape =
/** @class */
function () {
  function Shape(width, height, fill, ctx) {
    this.position = {
      x: 0,
      y: 0
    };
    this.width = width;
    this.height = height;
    this.fill = fill;
    this.context = ctx;
  }

  Shape.prototype.Positon = function (position) {
    this.position.x = position.x;
    this.position.y = position.y;
  };

  Shape.prototype.Move = function (speed) {
    if (speed === void 0) {
      speed = null;
    }

    if (speed !== null) {
      this.speed = speed;
    }

    this.position.x = this.position.x + this.speed.SpeedX;
    this.position.y = this.position.y + this.speed.SpeedY;
    this.Draw();
  };

  Shape.prototype.Draw = function () {
    this.context._2d.fillStyle = this.fill;

    this.context._2d.fillRect(this.position.x, this.position.y, this.width, this.height);
  };

  Shape.prototype.Reset = function () {
    console.log("reset"); //this.Move(-this.position.x, -this.position.y)

    this.position.x = this.context.canvas.width / 2;
    this.position.y = this.context.canvas.height / 2;
  };

  return Shape;
}();

exports.Shape = Shape;
},{}],"context.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Context =
/** @class */
function () {
  function Context(canvas) {
    this.canvas = canvas.element;
    this._2d = canvas.element.getContext('2d');
  }

  return Context;
}();

exports.Context = Context;
;

var Canvas =
/** @class */
function () {
  function Canvas(canvasID, canvasWidth, canvasHeight) {
    this.element = document.getElementById(canvasID);
    this.element.width = canvasWidth;
    this.element.height = canvasHeight;
    this.width = canvasWidth;
    this.height = canvasHeight;
  }

  return Canvas;
}();

exports.Canvas = Canvas;
},{}],"Circle.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Shape_1 = require("./Shape");

var Circle =
/** @class */
function (_super) {
  __extends(Circle, _super);

  function Circle() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Circle.prototype.Draw = function () {
    this.context._2d.fillStyle = this.fill;

    this.context._2d.beginPath();

    this.context._2d.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2, true);

    this.context._2d.fill();
  };

  return Circle;
}(Shape_1.Shape);

exports.Circle = Circle;
},{"./Shape":"Shape.ts"}],"Mouse.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Mouse =
/** @class */
function () {
  function Mouse(canvas) {
    this.canvas = canvas;
  }

  Mouse.prototype.CurrentPosition = function (event) {
    var rect = this.canvas.element.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = event.clientX - rect.left - root.scrollLeft;
    var mouseY = event.clientY - rect.top - root.scrollTop;
    return {
      x: mouseX,
      y: mouseY
    };
  };

  return Mouse;
}();

exports.Mouse = Mouse;
},{}],"ScreenText.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ScreenText =
/** @class */
function () {
  function ScreenText(text, position, context) {
    this.text = text;
    this.position = position;
    this.context = context;
  }

  ScreenText.prototype.Draw = function () {
    this.context._2d.fillText(this.text, this.position.x, this.position.y);
  };

  return ScreenText;
}();

exports.ScreenText = ScreenText;
},{}],"Player.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Player =
/** @class */
function () {
  function Player(score) {
    if (score === void 0) {
      score = 0;
    }

    this.score = score;
    this.score = score;
  }

  Player.prototype.ScoreAdd = function (score) {
    this.score += score;
  };

  Player.prototype.ScoreGet = function () {
    return this.score;
  };

  Player.prototype.ScoreReset = function (limit) {
    if (this.score === limit) {
      this.score = 0;
    }
  };

  return Player;
}();

exports.Player = Player;
},{}],"Playground.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Playground =
/** @class */
function () {
  function Playground(context) {
    this.context = context;
    this.shapeList = [];
  }

  Playground.prototype.AddShape = function (shape) {
    this.shapeList.push(shape);
  };

  Playground.prototype.CrasNotify = function () {
    for (var _i = 0, _a = this.shapeList; _i < _a.length; _i++) {
      var shape = _a[_i];
      this.crash(shape);
    }
  };

  Playground.prototype.crash = function (shape) {
    this.crashRightWall(shape);
    this.crashFloor(shape);
    this.crashLeftWall(shape);
    this.crashTop(shape);
  };

  Playground.prototype.noCrash = function (shape) {
    return {
      SpeedX: shape.speed.SpeedX,
      SpeedY: shape.speed.SpeedY
    };
  };

  Playground.prototype.crashRightWall = function (shape) {
    if (shape.position.x >= this.context.canvas.width) {
      shape.Move({
        SpeedX: -shape.speed.SpeedX,
        SpeedY: shape.speed.SpeedY
      });
    }
  };

  Playground.prototype.crashLeftWall = function (shape) {
    if (shape.position.x <= 0) {
      shape.Move({
        SpeedX: -shape.speed.SpeedX,
        SpeedY: shape.speed.SpeedY
      }); //shape.Reset();
    }
  };

  Playground.prototype.crashFloor = function (shape) {
    if (shape.position.y >= this.context.canvas.height) {
      shape.Move({
        SpeedX: shape.speed.SpeedX,
        SpeedY: -shape.speed.SpeedY
      });
    }
  };

  Playground.prototype.crashTop = function (shape) {
    if (shape.position.y <= 0) {
      shape.Move({
        SpeedX: shape.speed.SpeedX,
        SpeedY: -shape.speed.SpeedY
      });
    }
  };

  return Playground;
}();

exports.Playground = Playground;
},{}],"app.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Shape_1 = require("./Shape");

var context_1 = require("./context");

var Circle_1 = require("./Circle");

var Mouse_1 = require("./Mouse");

var ScreenText_1 = require("./ScreenText");

var Player_1 = require("./Player");

var Playground_1 = require("./Playground");

var cl = console.log;

if (false) {
  console.log = function () {};
}

var PADDLE_HEIGHT = 100;
var PADDLE_THICKNESS = 20;
var player1 = new Player_1.Player(0);
var player2 = new Player_1.Player(0);
var WINNING_SCORE = 3;
var ballX = 100;
var ballSpeedX = 8;
var ballY = 100;
var ballSpeedY = 4;
var canvas = new context_1.Canvas("gameCanvas", 800, 600);
var context = new context_1.Context(canvas);
var mouse = new Mouse_1.Mouse(canvas);

function calculateMousePosition(evt) {
  var rect = canvas.element.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY
  };
}

var paddle1Y = 200;
var paddle2Y = 200;
var playgrund = new Playground_1.Playground(context);
var player1Score = new ScreenText_1.ScreenText(player1.ScoreGet().toString(), {
  x: 100,
  y: 100
}, context);
var player2Score = new ScreenText_1.ScreenText(player2.ScoreGet().toString(), {
  x: canvas.width - 100,
  y: 100
}, context);

window.onload = function () {
  var rectagle = new Shape_1.Shape(10, 10, "white", context);
  rectagle.Positon({
    x: ballX,
    y: 200
  });
  var ball = new Circle_1.Circle(10, 10, "red", context);
  ball.Positon({
    x: 0,
    y: 150
  });
  ball.Move({
    SpeedX: ballSpeedX,
    SpeedY: ballSpeedY
  });
  playgrund.AddShape(ball);
  var framesPerSecond = 30;
  setInterval(function () {
    drawEverything(canvas, context, ball); //playgrund.CrasNotify();

    moveEverything(canvas, ball);
  }, 1000 / framesPerSecond);
  canvas.element.addEventListener("mousemove", function (event) {
    var mousePos = mouse.CurrentPosition(event);
    paddle1Y = mousePos.y - PADDLE_HEIGHT / 2;
  });
};

function computerMovement(ball) {
  var paddle2YCenter = paddle2Y + PADDLE_HEIGHT / 2;

  if (paddle2YCenter < ball.position.y - 35) {
    paddle2Y += 6;
  } else if (paddle2YCenter > ball.position.y + 35) {
    paddle2Y -= 6;
  }
}

function moveEverything(canvas, ball) {
  computerMovement(ball);

  if (ball.position.x >= canvas.width) {
    if (ball.position.y > paddle2Y && ball.position.y < paddle2Y + PADDLE_HEIGHT) {
      //ball.Move({ SpeedX: -ball.speed.SpeedX , SpeedY: ball.speed.SpeedY });
      var deltaY = ball.position.y - (paddle2Y + PADDLE_HEIGHT / 2);
      ball.Move({
        SpeedX: -ball.speed.SpeedX,
        SpeedY: deltaY * 0.3
      });
    } else {
      player1.ScoreAdd(1);
      player1.ScoreReset(4);
      ball.Reset();
    }
  }

  if (ball.position.x <= 0) {
    if (ball.position.y > paddle1Y && ball.position.y < paddle1Y + PADDLE_HEIGHT) {
      //ball.Move({ SpeedX: -ball.speed.SpeedX , SpeedY: ball.speed.SpeedY });
      var deltaY = ball.position.y - (paddle1Y + PADDLE_HEIGHT / 2);
      ball.Move({
        SpeedX: -ball.speed.SpeedX,
        SpeedY: deltaY * 0.3
      });
    } else {
      player2.ScoreAdd(1);
      player2.ScoreReset(4);
      ball.Reset();
    }
  }

  if (ball.position.y >= canvas.height) {
    ball.Move({
      SpeedX: ball.speed.SpeedX,
      SpeedY: -ball.speed.SpeedY
    });
  }

  if (ball.position.y <= 0) {
    ball.Move({
      SpeedX: ball.speed.SpeedX,
      SpeedY: -ball.speed.SpeedY
    });
  }
}

function drawEverything(canvas, context, ball) {
  var background = new Shape_1.Shape(canvas.width, canvas.height, "black", context);
  background.Draw(); // this is player paddle

  var paddleLeft = new Shape_1.Shape(PADDLE_THICKNESS, PADDLE_HEIGHT, "red", context);
  paddleLeft.Positon({
    x: 0,
    y: paddle1Y
  });
  paddleLeft.Draw(); // this is computer paddle

  var paddleRight = new Shape_1.Shape(PADDLE_THICKNESS, PADDLE_HEIGHT, "red", context);
  paddleRight.Positon({
    x: canvas.width - PADDLE_THICKNESS,
    y: paddle2Y
  });
  paddleRight.Draw(); // player score

  var player1Score = new ScreenText_1.ScreenText(player1.ScoreGet().toString() + " pont", {
    x: 100,
    y: 100
  }, context);
  var player2Score = new ScreenText_1.ScreenText(player2.ScoreGet().toString() + " pont", {
    x: canvas.width - 100,
    y: 100
  }, context);
  player1Score.Draw();
  player2Score.Draw(); // ball

  ball.Move();
}
},{"./Shape":"Shape.ts","./context":"context.ts","./Circle":"Circle.ts","./Mouse":"Mouse.ts","./ScreenText":"ScreenText.ts","./Player":"Player.ts","./Playground":"Playground.ts"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60179" + '/');

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
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.ts"], null)
//# sourceMappingURL=/app.c61986b1.js.map