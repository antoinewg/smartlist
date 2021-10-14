import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RNSScreen from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TodosScreen } from '../features/todos/pages/Todos';
import { SettingsScreen } from '../features/settings/pages/Settings';
import { NewTodoScreen } from '../features/newtodo/pages/NewTodo';
import { TabBar } from './components/TabBar';
import { Colors } from '../libs/ui/theme';

const Tab = createBottomTabNavigator();
const screenOptions = { headerShown: false };
const style = { flex: 1, backgroundColor: Colors.background };

const App = () => (
  <NavigationContainer>
    <SafeAreaView style={style}>
      <Tab.Navigator
        initialRouteName="Todos"
        tabBar={TabBar}
        screenOptions={screenOptions}
      >
        <Tab.Screen name="Todos" component={TodosScreen} />
        <Tab.Screen name="NewTodo" component={NewTodoScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  </NavigationContainer>
);

export default App;
