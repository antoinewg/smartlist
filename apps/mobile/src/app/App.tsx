import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RNSScreen from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { TodosScreen } from '../features/todos/pages/Todos';
import { SettingsScreen } from '../features/settings/pages/Settings';
import { NewTodoScreen } from '../features/newtodo/pages/NewTodo';
import { TabBar } from './components/TabBar';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <SafeAreaProvider>
      <Tab.Navigator initialRouteName="Todos" tabBar={TabBar}>
        <Tab.Screen name="Todos" component={TodosScreen} />
        <Tab.Screen name="NewTodo" component={NewTodoScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </SafeAreaProvider>
  </NavigationContainer>
);

export default App;
