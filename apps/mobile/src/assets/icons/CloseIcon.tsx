import React from 'react';
import Svg, { G, Line, Path } from 'react-native-svg';
import { Colors } from '../../libs/ui/theme';
import { IconInterface } from '../types';

export const Close: React.FC<IconInterface> = ({
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
        <Path d="M9.9,45.6c-1.5,2.4-1.2,5.6,0.9,7.6c2.4,2.4,6.3,2.4,8.7,0L32,40.7l12.5,12.5c2.4,2.4,6.3,2.4,8.7,0   c2.4-2.4,2.4-6.3,0-8.7L40.7,32l12.5-12.5c2.4-2.4,2.4-6.3,0-8.7c-2.4-2.4-6.3-2.4-8.7,0L32,23.3L19.5,10.8c-2.4-2.4-6.3-2.4-8.7,0   c-2.4,2.4-2.4,6.3,0,8.7l10.1,10.1" />
        <Line x1="18.1" x2="13.2" y1="37.2" y2="42.1" />
        <Line x1="45.2" x2="39.4" y1="18.8" y2="24.6" />
        <Line x1="20.4" x2="18.8" y1="43.6" y2="45.2" />
        <Line x1="22.6" x2="19.1" y1="22.6" y2="19.2" />
        <Line x1="27" x2="25.8" y1="27" y2="25.9" />
      </G>
    </Svg>
  );
};
