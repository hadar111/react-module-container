'use strict';

require('mocha');

var _chai = require('chai');

var _tagAppender = require('../src/tag-appender');

describe('tag appender', function () {

  before(function () {
    this.jsdom = require('jsdom-global')();
  });

  after(function () {
    this.jsdom();
  });

  it('should unload css in the right order', function () {
    var cssUrl = 'http://example.com/test.css';
    var css1 = (0, _tagAppender.createLinkElement)(cssUrl);
    var css2 = (0, _tagAppender.createLinkElement)(cssUrl);

    var headElement = document.getElementsByTagName('head')[0];
    headElement.appendChild(css1);
    headElement.appendChild(css2);

    (0, _tagAppender.unloadStyles)(document, [cssUrl]);

    (0, _chai.expect)(document.getElementsByTagName('link').length).to.equal(1);
    (0, _chai.expect)(document.getElementsByTagName('link')[0]).to.equal(css2);
  });
});