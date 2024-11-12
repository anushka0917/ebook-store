'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _logoSvg = require('./logo.svg');

var _logoSvg2 = _interopRequireDefault(_logoSvg);

var _pagesHome = require('./pages/Home');

var _pagesHome2 = _interopRequireDefault(_pagesHome);

var _pagesBookDetails = require('./pages/BookDetails');

var _pagesBookDetails2 = _interopRequireDefault(_pagesBookDetails);

var _pagesLogin = require('./pages/Login');

var _pagesLogin2 = _interopRequireDefault(_pagesLogin);

var _pagesSignup = require('./pages/Signup');

var _pagesSignup2 = _interopRequireDefault(_pagesSignup);

var _pagesCart = require('./pages/Cart');

var _pagesCart2 = _interopRequireDefault(_pagesCart);

require('./App.css');

function App() {
  return _react2['default'].createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2['default'].createElement(
      'div',
      { className: 'App' },
      _react2['default'].createElement(
        'header',
        { className: 'App-header' },
        _react2['default'].createElement('img', { src: _logoSvg2['default'], className: 'App-logo', alt: 'logo' }),
        _react2['default'].createElement(
          'p',
          null,
          'Edit ',
          _react2['default'].createElement(
            'code',
            null,
            'src/App.js'
          ),
          ' and save to reload.'
        ),
        _react2['default'].createElement(
          'a',
          {
            className: 'App-link',
            href: 'https://reactjs.org',
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          'Learn React'
        )
      ),
      _react2['default'].createElement(
        _reactRouterDom.Routes,
        null,
        _react2['default'].createElement(_reactRouterDom.Route, { path: '/', element: _react2['default'].createElement(_pagesHome2['default'], null) }),
        _react2['default'].createElement(_reactRouterDom.Route, { path: '/book/:id', element: _react2['default'].createElement(_pagesBookDetails2['default'], null) }),
        _react2['default'].createElement(_reactRouterDom.Route, { path: '/login', element: _react2['default'].createElement(_pagesLogin2['default'], null) }),
        _react2['default'].createElement(_reactRouterDom.Route, { path: '/signup', element: _react2['default'].createElement(_pagesSignup2['default'], null) }),
        _react2['default'].createElement(_reactRouterDom.Route, { path: '/cart', element: _react2['default'].createElement(_pagesCart2['default'], null) })
      )
    )
  );
}

exports['default'] = App;
module.exports = exports['default'];