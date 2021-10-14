import React from 'react';
import Svg, { G, Line, Path, Polyline } from 'react-native-svg';
import { Colors } from '../../../libs/ui/theme';
import { IconInterface } from '../../types';

export const Home: React.FC<IconInterface> = ({
  size = 32,
  color = Colors.primary,
  strokeWidth = 2,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <G
        fill="none"
        fillRule="evenodd"
        stroke={color}
        strokeWidth={strokeWidth}
      >
        <Polyline points="12.6,45.3 12.6,30.4 51.4,30.4 51.4,58.8 19.2,58.8   " />
        <Line x1="12.6" x2="12.6" y1="54.8" y2="50.4" />
        <Line x1="49.9" x2="46.6" y1="21" y2="17.6" />
        <Path d="M40.6,11.5l-4.9-5c-1.8-1.8-5-1.8-6.8,0l-24,23.9h54.2L53.9,25" />
        <Path d="M38.2,58.8H25.8V45.3c0-2.9,2.4-5.3,5.3-5.3h1.8c2.9,0,5.3,2.4,5.3,5.3V58.8z" />
      </G>
    </Svg>
  );
};
