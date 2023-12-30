import React from 'react';
import Svg, { type Linecap, type Linejoin, Polyline } from 'react-native-svg';

export interface ArrowIconStyling {
  size: number;
}

export default function ArrowIcon({ size }: ArrowIconStyling) {
  const roundedCorners = true
    ? { strokeLinecap: 'round' as Linecap, strokeLinejoin: 'round' as Linejoin }
    : {};
  return (
    <Svg width={size} height={size}>
      <Polyline
        points={`${size / 6} ${size / 3} ${size / 2} ${size / 1.5} ${
          size / 1.2
        } ${size / 3}`}
        stroke={'black'}
        strokeWidth={`${3}`}
        fill="none"
        {...roundedCorners}
      />
    </Svg>
  );
}
