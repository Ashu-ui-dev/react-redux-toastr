"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ProgressBar = _interopRequireDefault(require("./ProgressBar"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var ToastrBox = /*#__PURE__*/function (_React$Component) {
  _inherits(ToastrBox, _React$Component);

  var _super = _createSuper(ToastrBox);

  function ToastrBox(props) {
    var _this;

    _classCallCheck(this, ToastrBox);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handlePressEnterOrSpaceKeyToastr", function (e) {
      if (e.key === ' ' || e.key === 'Enter') {
        _this.handleClickToastr(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePressEnterOrSpaceKeyCloseButton", function (e) {
      if (e.key === ' ' || e.key === 'Enter') {
        _this.handleClickCloseButton(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickToastr", function () {
      var _this$props$item$opti = _this.props.item.options,
          onToastrClick = _this$props$item$opti.onToastrClick,
          closeOnToastrClick = _this$props$item$opti.closeOnToastrClick;
      _this.ignoreIsHiding = true;

      if (onToastrClick) {
        onToastrClick();
      }

      if (closeOnToastrClick) {
        _this._setShouldClose(true);

        _this._removeToastr();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickCloseButton", function (e) {
      var onCloseButtonClick = _this.props.item.options.onCloseButtonClick;
      e.stopPropagation();
      _this.ignoreIsHiding = true;

      if (onCloseButtonClick) {
        onCloseButtonClick();
      }

      _this._setShouldClose(true);

      _this._removeToastr();
    });

    _defineProperty(_assertThisInitialized(_this), "mouseEnter", function () {
      var removeOnHover = _this.props.item.options.removeOnHover;
      if (!removeOnHover && _this.intervalId) return;
      clearTimeout(_this.intervalId);

      _this._setIntervalId(null);

      _this._setIsHiding(false);

      var progressBar = _this.props.item.options.progressBar;

      var timeOut = _this._getItemTimeOut();

      if (timeOut && progressBar) {
        _this.setState({
          progressBar: null
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mouseLeave", function () {
      var _this$props$item$opti2 = _this.props.item.options,
          removeOnHover = _this$props$item$opti2.removeOnHover,
          removeOnHoverTimeOut = _this$props$item$opti2.removeOnHoverTimeOut;

      if (!_this.isHiding && (removeOnHover || _this.shouldClose)) {
        var interval = removeOnHover === true ? removeOnHoverTimeOut || 1000 : removeOnHover;

        _this._setIntervalId(setTimeout(_this._removeToastr, interval));

        var progressBar = _this.props.item.options.progressBar;

        var timeOut = _this._getItemTimeOut();

        if (timeOut && progressBar) {
          _this.setState({
            progressBar: {
              duration: interval
            }
          });
        }
      }
    });

    var _props$item$options = props.item.options,
        transitionIn = _props$item$options.transitionIn,
        transitionOut = _props$item$options.transitionOut;
    _this.isHiding = false;
    _this.shouldClose = false;
    _this.intervalId = null;
    _this.ignoreIsHiding = false;
    _this.transitionIn = transitionIn || _this.props.transitionIn;
    _this.transitionOut = transitionOut || _this.props.transitionOut; // an identifier to facilitate aria labelling for a11y for multiple instances of the component family in the DOM

    _this.id = props.item.a11yId || Math.floor(Math.random() * 9999);
    _this.state = {
      progressBar: null
    };
    (0, _utils._bind)(['renderSubComponent', 'renderIcon', 'renderToastr', 'renderCloseButton', 'renderMessage', '_onAnimationComplete', '_removeToastr', '_setTransition', '_clearTransition', '_setIntervalId', '_setIsHiding', '_setShouldClose'], _assertThisInitialized(_this));
    return _this;
  }

  _createClass(ToastrBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var item = this.props.item;
      if (this.props.inMemory[item.id]) return;

      var timeOut = this._getItemTimeOut();

      if (timeOut) {
        this._setIntervalId(setTimeout(this._removeToastr, timeOut));
      }

      if (timeOut && item.options.progressBar) {
        this.setState({
          progressBar: {
            duration: this._getItemTimeOut()
          }
        });
      }

      this._setTransition();

      (0, _utils.onCSSTransitionEnd)(this.toastrBoxElement, this._onAnimationComplete);
      this.props.addToMemory(item.id);

      if (this.closeButton !== undefined && !item.options.disableCloseButtonFocus) {
        this.closeButton.focus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.intervalId) {
        clearTimeout(this.intervalId);
      } // when toast unloads the toast close button automatically focuses on the next toast control (if any)
      // need to add a micro delay to allow the DOM to recycle


      setTimeout(function () {
        var toastrControls = document.querySelectorAll('.toastr-control:not(.disable-auto-focus)');

        if (toastrControls.length) {
          toastrControls[0].focus();
        }
      }, 50);
    }
  }, {
    key: "isToastrClickable",
    get: function get() {
      var _this$props$item$opti3 = this.props.item.options,
          onToastrClick = _this$props$item$opti3.onToastrClick,
          closeOnToastrClick = _this$props$item$opti3.closeOnToastrClick;
      var hasOnToastrClick = !!onToastrClick;
      return hasOnToastrClick || closeOnToastrClick;
    }
  }, {
    key: "renderSubComponent",
    value: function renderSubComponent() {
      var _this2 = this;

      var _this$props$item = this.props.item,
          id = _this$props$item.id,
          options = _this$props$item.options;

      var removeCurrentToastrFunc = function removeCurrentToastrFunc() {
        return _this2.props.remove(id);
      };

      if ( /*#__PURE__*/(0, _react.isValidElement)(options.component)) {
        return /*#__PURE__*/_react["default"].cloneElement(options.component, {
          remove: removeCurrentToastrFunc
        });
      }

      return /*#__PURE__*/_react["default"].createElement(options.component, {
        remove: removeCurrentToastrFunc
      });
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props$item2 = this.props.item,
          type = _this$props$item2.type,
          options = _this$props$item2.options;

      if ( /*#__PURE__*/(0, _react.isValidElement)(options.icon)) {
        return /*#__PURE__*/_react["default"].cloneElement(options.icon);
      }

      var iconName = type === 'light' ? options.icon : type;
      return /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: iconName
      });
    }
  }, {
    key: "renderCloseButton",
    value: function renderCloseButton() {
      var _this3 = this;

      var closeButtonAttributes = {
        tabIndex: 0,
        role: 'button',
        onKeyPress: this.handlePressEnterOrSpaceKeyCloseButton
      };

      if (this.isToastrClickable) {
        closeButtonAttributes = {};
      }

      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: (0, _classnames["default"])('close-toastr', 'toastr-control', {
          'disable-auto-focus': this.props.item.options.disableCloseButtonFocus
        }),
        "aria-label": "toast",
        onClick: this.handleClickCloseButton,
        ref: function ref(_ref) {
          return _this3.closeButton = _ref;
        }
      }, closeButtonAttributes), /*#__PURE__*/_react["default"].createElement("span", null, "\u2715"));
    }
  }, {
    key: "renderToastr",
    value: function renderToastr() {
      var _this$props$item3 = this.props.item,
          type = _this$props$item3.type,
          options = _this$props$item3.options,
          message = _this$props$item3.message,
          title = _this$props$item3.title;
      var ariaAttributes = {};

      if (title) {
        ariaAttributes['aria-labelledby'] = "dialogTitle-".concat(this.id);
      }

      if (message) {
        ariaAttributes['aria-describedby'] = "dialogDesc-".concat(this.id);
      }

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "rrt-left-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "rrt-holder"
      }, this.renderIcon())), options.status && type === 'light' && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('toastr-status', options.status)
      }), /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: "rrt-middle-container",
        role: "alertdialog"
      }, ariaAttributes), title && /*#__PURE__*/_react["default"].createElement("div", {
        id: "dialogTitle-".concat(this.id),
        className: "rrt-title"
      }, title), message && /*#__PURE__*/_react["default"].createElement("div", {
        id: "dialogDesc-".concat(this.id),
        className: "rrt-text"
      }, message), options.component && this.renderSubComponent()), /*#__PURE__*/_react["default"].createElement("div", {
        className: "rrt-right-container"
      }, options.showCloseButton && this.renderCloseButton()), this.state.progressBar ? /*#__PURE__*/_react["default"].createElement(_ProgressBar["default"], this.state.progressBar) : null);
    }
  }, {
    key: "renderMessage",
    value: function renderMessage() {
      var _this$props$item4 = this.props.item,
          title = _this$props$item4.title,
          message = _this$props$item4.message,
          options = _this$props$item4.options;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "rrt-title"
      }, title, this.renderCloseButton()), /*#__PURE__*/_react["default"].createElement("div", {
        className: "rrt-text"
      }, message, options.component && this.renderSubComponent()));
    }
  }, {
    key: "toastr",
    value: function toastr() {
      if (this.props.item.type === 'message') {
        return this.renderMessage();
      }

      return this.renderToastr();
    }
  }, {
    key: "_getItemTimeOut",
    value: function _getItemTimeOut() {
      var item = this.props.item;
      var timeOut = item.options.timeOut;

      if (typeof timeOut === 'undefined') {
        timeOut = this.props.timeOut;
      }

      return timeOut;
    }
  }, {
    key: "_onAnimationComplete",
    value: function _onAnimationComplete() {
      var _this$props = this.props,
          remove = _this$props.remove,
          item = _this$props.item;
      var options = item.options,
          id = item.id;

      if (this.isHiding || this.ignoreIsHiding) {
        this._setIsHiding(false);

        this.ignoreIsHiding = false;
        remove(id);

        if (options.onHideComplete) {
          options.onHideComplete();
        }
      } else if (!this.isHiding && options.onShowComplete) {
        options.onShowComplete();
      }
    }
  }, {
    key: "_removeToastr",
    value: function _removeToastr() {
      if (!this.isHiding) {
        this._setIsHiding(true);

        this._setTransition(true, false);

        (0, _utils.onCSSTransitionEnd)(this.toastrBoxElement, this._onAnimationComplete);
      }
    }
  }, {
    key: "_setTransition",
    value: function _setTransition(hide) {
      var _this4 = this;

      var autoRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var animationType = hide ? this.transitionOut : this.transitionIn;

      var onEndListener = function onEndListener(e) {
        if (e && e.target == _this4.toastrBoxElement) {
          _this4.toastrBoxElement.classList.remove(animationType);
        }
      };

      if (this.toastrBoxElement) {
        if (autoRemove) {
          (0, _utils.onCSSTransitionEnd)(this.toastrBoxElement, onEndListener);
        }

        this.toastrBoxElement.classList.add(animationType);
      }
    }
  }, {
    key: "_clearTransition",
    value: function _clearTransition() {
      if (this.toastrBoxElement) {
        this.toastrBoxElement.classList.remove(this.transitionIn, this.transitionOut);
      }
    }
  }, {
    key: "_setIntervalId",
    value: function _setIntervalId(intervalId) {
      this.intervalId = intervalId;
    }
  }, {
    key: "_setIsHiding",
    value: function _setIsHiding(val) {
      this.isHiding = val;
    }
  }, {
    key: "_setShouldClose",
    value: function _setShouldClose(val) {
      this.shouldClose = val;
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props$item5 = this.props.item,
          options = _this$props$item5.options,
          type = _this$props$item5.type;
      var toastrClickAttributes = {};

      if (this.isToastrClickable) {
        toastrClickAttributes.role = 'button';
        toastrClickAttributes.tabIndex = 0;
        toastrClickAttributes.onClick = this.handleClickToastr;
        toastrClickAttributes.onKeyPress = this.handlePressEnterOrSpaceKeyToastr;
      }

      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        ref: function ref(_ref2) {
          return _this5.toastrBoxElement = _ref2;
        },
        className: (0, _classnames["default"])('toastr', 'animated', 'rrt-' + type, options.className),
        onMouseEnter: this.mouseEnter,
        onMouseLeave: this.mouseLeave
      }, toastrClickAttributes), this.toastr());
    }
  }]);

  return ToastrBox;
}(_react["default"].Component);

exports["default"] = ToastrBox;

_defineProperty(ToastrBox, "displayName", 'ToastrBox');

_defineProperty(ToastrBox, "propTypes", {
  item: _propTypes["default"].shape({
    options: _propTypes["default"].shape({
      transitionIn: _propTypes["default"].string,
      transitionOut: _propTypes["default"].string
    })
  })
});