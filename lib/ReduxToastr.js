"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ReduxToastr = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _classnames = _interopRequireDefault(require("classnames"));

var _ToastrBox = _interopRequireDefault(require("./ToastrBox"));

var _ToastrConfirm = _interopRequireDefault(require("./ToastrConfirm"));

var actions = _interopRequireWildcard(require("./actions"));

var _toastrEmitter = require("./toastrEmitter");

var _utils = require("./utils");

var _constants = require("./constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReduxToastr = /*#__PURE__*/function (_React$Component) {
  _inherits(ReduxToastr, _React$Component);

  var _super = _createSuper(ReduxToastr);

  function ReduxToastr(props) {
    var _this;

    _classCallCheck(this, ReduxToastr);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toastrFired", {});

    _defineProperty(_assertThisInitialized(_this), "toastrPositions", ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center']);

    (0, _utils.updateConfig)(props);
    return _this;
  }

  _createClass(ReduxToastr, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          add = _this$props.add,
          showConfirm = _this$props.showConfirm,
          clean = _this$props.clean,
          removeByType = _this$props.removeByType,
          remove = _this$props.remove;

      _toastrEmitter.EE.on('toastr/confirm', showConfirm);

      _toastrEmitter.EE.on('add/toastr', add);

      _toastrEmitter.EE.on('clean/toastr', clean);

      _toastrEmitter.EE.on('removeByType/toastr', removeByType);

      _toastrEmitter.EE.on('remove/toastr', remove);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _toastrEmitter.EE.removeListener('toastr/confirm');

      _toastrEmitter.EE.removeListener('add/toastr');

      _toastrEmitter.EE.removeListener('clean/toastr');

      _toastrEmitter.EE.removeListener('removeByType/toastr');

      _toastrEmitter.EE.removeListener('remove/toastr');

      this.toastrFired = {};
    }
  }, {
    key: "_addToMemory",
    value: function _addToMemory(id) {
      this.toastrFired[id] = true;
    }
  }, {
    key: "_renderToastrForPosition",
    value: function _renderToastrForPosition(position) {
      var _this2 = this;

      var toastrs = this.props.toastr.toastrs;

      if (toastrs) {
        return toastrs.filter(function (item) {
          return item.position === position;
        }).map(function (item) {
          var mergedItem = _objectSpread(_objectSpread({}, item), {}, {
            options: _objectSpread({
              progressBar: _this2.props.progressBar,
              transitionIn: _this2.props.transitionIn,
              transitionOut: _this2.props.transitionOut,
              closeOnToastrClick: _this2.props.closeOnToastrClick
            }, item.options)
          });

          return /*#__PURE__*/_react["default"].createElement("div", {
            key: item.id
          }, /*#__PURE__*/_react["default"].createElement(_ToastrBox["default"], _extends({
            inMemory: _this2.toastrFired,
            addToMemory: function addToMemory() {
              return _this2._addToMemory(item.id);
            },
            item: mergedItem
          }, _this2.props)), item.options && item.options.attention && /*#__PURE__*/_react["default"].createElement("div", {
            onClick: function onClick() {
              if (typeof item.options.onAttentionClick === 'function') {
                item.options.onAttentionClick(item.id);
              } else {
                _this2.props.remove(item.id);
              }
            },
            className: "toastr-attention"
          }));
        });
      }
    }
  }, {
    key: "_renderToastrs",
    value: function _renderToastrs() {
      var _this3 = this;

      var toastr = this.props.toastr;
      var width = toastr.toastrs && toastr.toastrs[0] && toastr.toastrs[0].options && toastr.toastrs[0].options.width;
      var style = width ? {
        width: width
      } : {};
      return /*#__PURE__*/_react["default"].createElement("div", null, this.toastrPositions.map(function (position) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: position,
          className: position,
          style: style
        }, _this3._renderToastrForPosition(position));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          toastr = _this$props2.toastr;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('redux-toastr', className),
        "aria-live": "assertive"
      }, toastr.confirm && /*#__PURE__*/_react["default"].createElement(_ToastrConfirm["default"], _extends({
        confirm: toastr.confirm
      }, this.props)), this._renderToastrs());
    }
  }]);

  return ReduxToastr;
}(_react["default"].Component);

exports.ReduxToastr = ReduxToastr;

_defineProperty(ReduxToastr, "displayName", 'ReduxToastr');

_defineProperty(ReduxToastr, "propTypes", {
  toastr: _propTypes["default"].object,
  position: _propTypes["default"].string,
  newestOnTop: _propTypes["default"].bool,
  timeOut: _propTypes["default"].number,
  confirmOptions: _propTypes["default"].object,
  progressBar: _propTypes["default"].bool,
  transitionIn: _propTypes["default"].oneOf(_constants.TRANSITIONS["in"]),
  transitionOut: _propTypes["default"].oneOf(_constants.TRANSITIONS.out),
  preventDuplicates: _propTypes["default"].bool,
  closeOnToastrClick: _propTypes["default"].bool
});

_defineProperty(ReduxToastr, "defaultProps", {
  position: 'top-right',
  newestOnTop: true,
  timeOut: 5000,
  progressBar: false,
  transitionIn: _constants.TRANSITIONS["in"][0],
  transitionOut: _constants.TRANSITIONS.out[0],
  preventDuplicates: false,
  closeOnToastrClick: false,
  getState: function getState(state) {
    return state.toastr;
  },
  confirmOptions: {
    okText: 'ok',
    cancelText: 'cancel'
  }
});

var _default = (0, _reactRedux.connect)(function (state, ownProps) {
  return {
    toastr: ownProps.getState ? ownProps.getState(state) : state.toastr
  };
}, actions)(ReduxToastr);

exports["default"] = _default;