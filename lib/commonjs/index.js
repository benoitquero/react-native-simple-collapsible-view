"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollapsibleView = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ArrowIcon = _interopRequireDefault(require("./ArrowIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
if (_reactNative.Platform.OS === 'android' && _reactNative.UIManager.setLayoutAnimationEnabledExperimental) {
  _reactNative.UIManager.setLayoutAnimationEnabledExperimental(true);
}
const CollapsibleView = ({
  children,
  title = '',
  arrowIcon,
  arrowSize = 24,
  titleStyle,
  containerStyle,
  headerContainerStyle,
  animated = true,
  defaultState = 'closed'
}) => {
  const [isOpen, setIsOpen] = (0, _react.useState)(defaultState === 'closed' ? false : true);
  const rotateAnim = (0, _react.useRef)(new _reactNative.Animated.Value(defaultState === 'closed' ? 1 : 0)).current;
  const layoutAnimConfig = {
    duration: 200,
    update: {
      type: _reactNative.LayoutAnimation.Types.easeInEaseOut
    }
  };
  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
    if (animated) {
      _reactNative.LayoutAnimation.configureNext(layoutAnimConfig);
      _reactNative.Animated.timing(rotateAnim, {
        toValue: isOpen ? 1 : 0,
        duration: 200,
        useNativeDriver: true
      }).start();
    } else {
      rotateAnim.setValue(isOpen ? 1 : 0);
    }
  };
  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });
  const ArrowIcon = ({
    icon,
    size
  }) => {
    if (icon) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, icon);
    } else {
      return /*#__PURE__*/_react.default.createElement(_ArrowIcon.default, {
        size: size
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, containerStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: [styles.headerContainer, headerContainerStyle],
    onPress: handleToggleOpen
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.titleContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: titleStyle
  }, title)), /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: {
      transform: [{
        rotate: rotation
      }]
    }
  }, /*#__PURE__*/_react.default.createElement(ArrowIcon, {
    icon: arrowIcon,
    size: arrowSize
  }))), isOpen && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children));
};
exports.CollapsibleView = CollapsibleView;
const styles = _reactNative.StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  container: {
    backgroundColor: 'red',
    overflow: 'hidden'
  },
  titleContainer: {
    flex: 1
  }
});
//# sourceMappingURL=index.js.map