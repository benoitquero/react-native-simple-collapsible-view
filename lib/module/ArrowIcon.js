function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import Svg, { Polyline } from 'react-native-svg';
export default function ArrowIcon({
  size
}) {
  const roundedCorners = true ? {
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  } : {};
  return /*#__PURE__*/React.createElement(Svg, {
    width: size,
    height: size
  }, /*#__PURE__*/React.createElement(Polyline, _extends({
    points: `${size / 6} ${size / 3} ${size / 2} ${size / 1.5} ${size / 1.2} ${size / 3}`,
    stroke: 'black',
    strokeWidth: `${3}`,
    fill: "none"
  }, roundedCorners)));
}
//# sourceMappingURL=ArrowIcon.js.map