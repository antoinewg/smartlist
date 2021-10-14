import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, TextStyle } from 'react-native';
import styled from 'styled-components/native';

import { CircledPlus } from '../../assets/icons/TabBar/CircledPlusIcon';
import { Home } from '../../assets/icons/TabBar/HomeIcon';
import { Settings } from '../../assets/icons/TabBar/SettingsIcon';
import { BicolorIconInterface } from '../../assets/types';
import { ACTIVE_OPACITY, Colors } from '../../libs/ui/theme';

interface ComponentProps {
  Icon: React.FC<BicolorIconInterface>;
  label: string | null;
}

const mapRouteToComponent = (routeName: string): ComponentProps => {
  switch (routeName) {
    case 'Todos':
      return { Icon: Home, label: 'Home' };
    case 'NewTodo':
      return { Icon: CircledPlus, label: 'Todo' };
    case 'Settings':
      return { Icon: Settings, label: 'Settings' };
  }
};

export const TabBar = ({ state, navigation }: BottomTabBarProps) => (
  <Row>
    {state.routes.map((route, index) => {
      const { Icon, label } = mapRouteToComponent(route.name);
      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          // The `merge: true` option makes sure that the params inside the tab screen are preserved
          navigation.navigate({
            name: route.name,
            merge: true,
            params: route.params,
          });
        }
      };

      const color = isFocused ? Colors.primary : Colors.foreground;
      const style = isFocused ? selectedText : unselectedText;

      return (
        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          key={route.name}
          onPress={onPress}
        >
          <Icon color={color} size={28} strokeWidth={isFocused ? 3 : 2} />
          <Text style={style as TextStyle}>{label}</Text>
        </TouchableOpacity>
      );
    })}
  </Row>
);

const TAB_BAR_HEIGHT = 56;
const Row = styled.View({ flexDirection: 'row' });
const selectedText = { color: Colors.primary, fontWeight: '500' };
const unselectedText = { color: Colors.foreground, fontWeight: '400' };

const TouchableOpacity = styled.TouchableOpacity({
  flex: 1,
  height: TAB_BAR_HEIGHT,
  alignItems: 'center',
  justifyContent: 'center',
});
