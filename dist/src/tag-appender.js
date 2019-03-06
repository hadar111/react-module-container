'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createLinkElement = createLinkElement;
exports.createScriptElement = createScriptElement;
exports.tagAppender = tagAppender;
exports.filesAppender = filesAppender;
exports.unloadStyles = unloadStyles;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var requireCache = {};

function noprotocol(url) {
  return url.replace(/^.*:\/\//, '//');
}

function createLinkElement(url) {
  var fileref = document.createElement('LINK');
  fileref.setAttribute('rel', 'stylesheet');
  fileref.setAttribute('type', 'text/css');
  fileref.setAttribute('href', url);
  return fileref;
}

function createScriptElement(url, crossorigin) {
  var fileref = document.createElement('SCRIPT');
  fileref.setAttribute('type', 'text/javascript');
  fileref.setAttribute('src', url);
  if (crossorigin) {
    fileref.setAttribute('crossorigin', 'anonymous');
  }
  return fileref;
}

function tagAppender(url, filetype, crossorigin) {
  var styleSheets = document.styleSheets;
  return requireCache[url] = new Promise(function (resolve, reject) {
    if (window.requirejs && filetype === 'js') {
      window.requirejs([url], resolve, reject);
      return;
    } else if (url in requireCache) {
      // requireCache[url].then(resolve, reject);
      // return;
    }

    var fileref = filetype === 'css' ? createLinkElement(url) : createScriptElement(url, crossorigin);

    var done = false;
    document.getElementsByTagName('head')[0].appendChild(fileref);
    fileref.onerror = function () {
      fileref.onerror = fileref.onload = fileref.onreadystatechange = null;
      delete requireCache[url];
      reject(url);
    };
    fileref.onload = fileref.onreadystatechange = function () {
      if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
        done = true;
        fileref.onerror = fileref.onload = fileref.onreadystatechange = null;
        resolve();
      }
    };
    if (filetype === 'css' && navigator.userAgent.match(' Safari/') && !navigator.userAgent.match(' Chrom') && navigator.userAgent.match(' Version/5.')) {
      var attempts = 20;
      var interval = setInterval(function () {
        for (var i = 0; i < styleSheets.length; i++) {
          if (noprotocol('' + styleSheets[i].href) === noprotocol(url)) {
            clearInterval(interval);
            fileref.onload();
            return;
          }
        }
        if (--attempts === 0) {
          clearInterval(interval);
          fileref.onerror();
        }
      }, 50);
    }
  });
}

function append(file, crossorigin) {
  return tagAppender(file, file.split('.').pop(), crossorigin);
}

function filesAppender(files, crossorigin) {
  return Promise.all(files.map(function (file) {
    if (Array.isArray(file)) {
      return file.reduce(function (promise, next) {
        return promise.then(function () {
          return append(next, crossorigin);
        }, function (err) {
          return console.log('filesAppender failed on - ' + err);
        });
      }, Promise.resolve());
    } else {
      return append(file, crossorigin);
    }
  }));
}

var getStyleSheetLinks = function getStyleSheetLinks(document) {
  return [].concat(_toConsumableArray(document.querySelectorAll('link'))).filter(function (link) {
    return link.rel === 'stylesheet' && link.href;
  }).reduceRight(function (acc, curr) {
    return _extends({}, acc, _defineProperty({}, noprotocol(curr.href), curr));
  }, {});
};

var getStyleSheetUrls = function getStyleSheetUrls(files) {
  var _ref;

  return (_ref = []).concat.apply(_ref, _toConsumableArray(files)).filter(function (file) {
    return file.endsWith('.css');
  }).map(function (file) {
    return noprotocol(file);
  });
};

function unloadStyles(document, files) {
  var links = getStyleSheetLinks(document);
  getStyleSheetUrls(files).forEach(function (file) {
    var link = links[file];
    if (link) {
      link.parentNode.removeChild(link);
    }
  });
}