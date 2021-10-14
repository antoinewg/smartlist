import React from 'react';
import Svg, { G, Line, Path, Polyline } from 'react-native-svg';
import { Colors } from '../../libs/ui/theme';
import { IconInterface } from '../types';

export const UnChecked: React.FC<IconInterface> = ({
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
        <Path d="M8.7,43v-2.8c0-1.9,1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5v1.7" />
        <Path d="M15.7,45.8v2.5h8.1c1.9,0,3.5,1.6,3.5,3.5s-1.6,3.5-3.5,3.5H12.2c-1.9,0-3.5-1.6-3.5-3.5v-4.9" />
        <Path d="M15.7,17v6.9c0,1.9-1.6,3.5-3.5,3.5s-3.5-1.6-3.5-3.5V12.2c0-1.9,1.6-3.5,3.5-3.5h11.6     c1.9,0,3.5,1.6,3.5,3.5s-1.6,3.5-3.5,3.5h-2.4" />
        <Path d="M55.1,11.1c0.1,0.4,0.2,0.7,0.2,1.1v11.6c0,1.9-1.6,3.5-3.5,3.5s-3.5-1.6-3.5-3.5v-8.1h-8.1     c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5h4.4" />
        <Path d="M49.1,8.7h2.6c0.4,0,0.7,0.1,1.1,0.2" />
        <Polyline points="46.3,48.3 48.3,48.3 48.3,41.1    " />
        <Path d="M51.8,36.7c1.9,0,3.5,1.6,3.5,3.5v11.6c0,1.9-1.6,3.5-3.5,3.5H40.2c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5     h3.1" />
        <Line x1="48.3" x2="48.3" y1="41.1" y2="40.2" />
      </G>
    </Svg>
  );
};
