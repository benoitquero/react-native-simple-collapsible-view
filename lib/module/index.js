import React, { useRef, useState } from 'react';
import { Animated, LayoutAnimation, Platform, StyleSheet, TouchableOpacity, UIManager } from 'react-native';
import { Text, View } from 'react-native';
import DefaultIcon from './ArrowIcon';
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
export const CollapsibleView = ({
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
  const [isOpen, setIsOpen] = useState(defaultState === 'closed' ? false : true);
  const rotateAnim = useRef(new Animated.Value(defaultState === 'closed' ? 1 : 0)).current;
  const layoutAnimConfig = {
    duration: 200,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut
    }
  };
  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
    if (animated) {
      LayoutAnimation.configureNext(layoutAnimConfig);
      Animated.timing(rotateAnim, {
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
      return /*#__PURE__*/React.createElement(React.Fragment, null, icon);
    } else {
      return /*#__PURE__*/React.createElement(DefaultIcon, {
        size: size
      });
    }
  };
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, containerStyle]
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: [styles.headerContainer, headerContainerStyle],
    onPress: handleToggleOpen
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.titleContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: titleStyle
  }, title)), /*#__PURE__*/React.createElement(Animated.View, {
    style: {
      transform: [{
        rotate: rotation
      }]
    }
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    icon: arrowIcon,
    size: arrowSize
  }))), isOpen && /*#__PURE__*/React.createElement(React.Fragment, null, children));
};
const styles = StyleSheet.create({
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