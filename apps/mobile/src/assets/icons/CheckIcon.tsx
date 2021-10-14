import React from 'react';
import Svg, { G, Line, Path } from 'react-native-svg';
import { Colors } from '../../libs/ui/theme';
import { IconInterface } from '../types';

export const Check: React.FC<IconInterface> = ({
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
        <Path d="M39.3,46.6l-2.4,5.7c-1.5,3.4-4.5,5.8-8.1,6.6C28,58.9,27.3,59,26.6,59c-2.9,0-5.8-1.2-7.9-3.3l-7.4-7.4    c-2.2-2.2-2.2-5.7,0-7.9c2.2-2.2,5.7-2.2,7.9,0c0,0,0,0,0,0l7.4,7.4L38,21.4l5.6-13c1.2-2.8,4.5-4.1,7.3-2.9    c2.8,1.2,4.1,4.5,2.9,7.3l-9.4,22" />
        <Line x1="20.1" x2="16.5" y1="48.3" y2="44.8" />
        <Line x1="38.2" x2="35" y1="35.9" y2="43.3" />
        <Line x1="47.3" x2="41.5" y1="14.8" y2="28.2" />
      </G>
    </Svg>
  );
};
