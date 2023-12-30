import React from 'react';
import { type ViewStyle } from 'react-native';
import type { TextStyle } from 'react-native';
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
export declare const CollapsibleView: ({ children, title, arrowIcon, arrowSize, titleStyle, containerStyle, headerContainerStyle, animated, defaultState, }: CollapsibleViewProps) => React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map