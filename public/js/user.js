/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/user.js":
/*!******************************!*\
  !*** ./resources/js/user.js ***!
  \******************************/
/***/ (function() {

var _this = this;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.onload = function () {
  param = 3;
  xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/getPosts?id=".concat(param));
  xhttp.setRequestHeader('X-CSRF-TOKEN', document.getElementById('_token').value);
  xhttp.setRequestHeader('Accept', 'application/json');
  xhttp.send('"id": 3');

  xhttp.onload = function (data) {
    populate(data.target.response);
  };

  document.querySelector('#createPost').addEventListener('submit', function (e) {
    var _console;

    e.preventDefault();
    var formData = new FormData(e.target);
    displaySpinner('.create-post .post-submit');

    (_console = console).log.apply(_console, _toConsumableArray(formData));

    xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/storeTextPost");
    xhttp.setRequestHeader('X-CSRF-TOKEN', document.getElementById('_token').value);
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.send();

    xhttp.onload = function (data) {
      console.log(data.target);
    };
  });
};

function displaySpinner(el) {
  document.querySelector(el + ' .spinLoader').classList.add('spinLoader-visible');
  document.querySelector(el).classList.add('button-with-spinLoader');
}

function populate(res) {
  document.querySelector('.one').innerHTML += JSON.parse(res);
  document.querySelector('.one').innerHTML += JSON.parse(res);
  document.querySelector('.one').innerHTML += JSON.parse(res);
  document.querySelector('.one').innerHTML += JSON.parse(res);
  document.querySelector('.one').innerHTML += JSON.parse(res);
  document.querySelector('.one').innerHTML += JSON.parse(res);
  document.querySelector('.one').innerHTML += JSON.parse(res);
  document.querySelector('.one').innerHTML += JSON.parse(res);
  document.querySelector('.one').innerHTML += JSON.parse(res);
}

window.showThis = function (next, e) {
  var curr = parseInt(document.querySelector('.navfooter .active').dataset.order);
  var currName = '.container.' + document.querySelector('.navfooter .active').dataset.name;
  var currNavName = '.navfooter .' + document.querySelector('.navfooter .active').dataset.name;
  var nextName = '.container.' + e.target.dataset.name;
  var nextNavName = '.navfooter .' + e.target.dataset.name;
  var tabcurr = document.querySelector(currName);
  var tabnex = document.querySelector(nextName);
  console.log((-curr + next) * 100);
  console.log(tabnex.style.transform);
  tabcurr.style.transform = "translatex(".concat((curr - next) * 100, "px)");
  tabcurr.style.transition = "all .1s";
  tabcurr.style.height = "0";
  tabnex.style.height = "auto";
  tabnex.style.transition = "all .41s";
  tabnex.style.transform = "translatex(0px)";
  document.querySelector(currNavName).classList.remove('active');
  tabcurr.classList.remove('active');
  document.querySelector(nextNavName).classList.add('active');
  tabnex.classList.add('active');
};

window.postSubmit = function () {
  console.log(_this);
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/user.js"]();
/******/ 	
/******/ })()
;