import React, { useRef, useState } from 'react';
import {
  Animated,
  LayoutAnimation,
  Platform,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  type ViewStyle,
} from 'react-native';
import { Text, View } from 'react-native';
import DefaultIcon from './ArrowIcon';
import type { TextStyle } from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface CollapsibleViewProps {
  animated?: boolean;
  arrowIcon?: React.ReactNode;
  arrowSize?: number;
  children: React.ReactNode;
  containerStyle?: ViewStyle;
  defaultState?: 'open' | 'closed';
  headerContainerStyle?: ViewStyle;
  title: string;
  titleStyle?: TextStyle;
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
  defaultState = 'closed',
}: CollapsibleViewProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(
    defaultState === 'closed' ? false : true
  );
  const rotateAnim = useRef(
    new Animated.Value(defaultState === 'closed' ? 1 : 0)
  ).current;
  const layoutAnimConfig = {
    duration: 200,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  };

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
    if (animated) {
      LayoutAnimation.configureNext(layoutAnimConfig);
      Animated.timing(rotateAnim, {
        toValue: isOpen ? 1 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      rotateAnim.setValue(isOpen ? 1 : 0);
    }
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const ArrowIcon = ({
    icon,
    size,
  }: {
    icon: React.ReactNode;
    size: number;
  }) => {
    if (icon) {
      return <>{icon}</>;
    } else {
      return <DefaultIcon size={size} />;
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={[styles.headerContainer, headerContainerStyle]}
        onPress={handleToggleOpen}
      >
        <View style={styles.titleContainer}>
          <Text style={titleStyle}>{title}</Text>
        </View>
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
          <ArrowIcon icon={arrowIcon} size={arrowSize} />
        </Animated.View>
      </TouchableOpacity>
      {isOpen && <>{children}</>}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  container: {
    overflow: 'hidden',
  },
  titleContainer: {
    flex: 1,
  },
});
