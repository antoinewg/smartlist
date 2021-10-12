import React from 'react';
import { SafeAreaView } from 'react-native';
import { AddTodo } from '../features/todos/components/AddTodo';
import { TodoList } from '../features/todos/pages/TodoList';

const App = () => (
  <SafeAreaView>
    <AddTodo />
    <TodoList />
  </SafeAreaView>
);

export default App;
