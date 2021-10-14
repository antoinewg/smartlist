import React from 'react';
import Svg, { Line, G, Path } from 'react-native-svg';
import { Colors } from '../../../libs/ui/theme';
import { IconInterface } from '../../types';

export const CircledPlus: React.FC<IconInterface> = ({
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
        <Line x1="52.2" x2="44.4" y1="26.4" y2="26.4" />
        <Path d="M37.6,23.8V10.4c0-3.1-2.5-5.6-5.6-5.6s-5.6,2.5-5.6,5.6v16.1H10.4c-3.1,0-5.6,2.5-5.6,5.6   c0,3.1,2.5,5.6,5.6,5.6h16.1v16.1c0,3.1,2.5,5.6,5.6,5.6s5.6-2.5,5.6-5.6V37.6h16.1c3.1,0,5.6-2.5,5.6-5.6c0-2-1.1-3.8-2.6-4.7" />
        <Line x1="32" x2="32" y1="12.8" y2="21.3" />
        <Line x1="32" x2="32" y1="48.8" y2="51.1" />
        <Line x1="18.3" x2="13.3" y1="32" y2="32" />
        <Line x1="24.8" x2="23.1" y1="32" y2="32" />
      </G>
    </Svg>
  );
};
