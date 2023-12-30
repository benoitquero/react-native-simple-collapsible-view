"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ArrowIcon;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ArrowIcon({
  size
}) {
  const roundedCorners = true ? {
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  } : {};
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    width: size,
    height: size
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Polyline, _extends({
    points: `${size / 6} ${size / 3} ${size / 2} ${size / 1.5} ${size / 1.2} ${size / 3}`,
    stroke: 'black',
    strokeWidth: `${3}`,
    fill: "none"
  }, roundedCorners)));
}
//# sourceMappingURL=ArrowIcon.js.map