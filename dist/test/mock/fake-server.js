'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());

app.use(function (req, res, next) {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', 0);
  return next();
});

app.use('*', function (req, res) {
  res.sendFile(_path2.default.join(process.cwd(), './src/index.html'));
});

var port = process.env.FAKE_SERVER_PORT || 3000;
app.listen(port, function () {
  console.log('Fake server is running on port ' + port);
});

module.exports = app;