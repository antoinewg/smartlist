import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const mapRouteToComponent = (
  routeName: string
): { icon: string; size: number; label: string | null } => {
  switch (routeName) {
    case 'Todos':
      return { icon: '☑︎', size: 28, label: 'Home' };
    case 'NewTodo':
      return { icon: '✚', size: 28, label: 'Todo' };
    case 'Settings':
      return { icon: '⚙︎', size: 28, label: 'Settings' };
  }
};

export const TabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => (
  <Row>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const { icon, size: fontSize, label } = mapRouteToComponent(route.name);

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

      const color = isFocused ? '#673ab7' : undefined;

      return (
        <TouchableOpacity
          key={route.name}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
        >
          <Text style={{ color, fontSize }}>{icon}</Text>
          <Text style={{ color }}>{label}</Text>
        </TouchableOpacity>
      );
    })}
  </Row>
);

const TAB_BAR_HEIGHT = 64;
const Row = styled.View({ flexDirection: 'row' });
const TouchableOpacity = styled.TouchableOpacity({
  flex: 1,
  flexDirection: 'column',
  height: TAB_BAR_HEIGHT,
  alignItems: 'center',
  justifyContent: 'flex-start',
});
