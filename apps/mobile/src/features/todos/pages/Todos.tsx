import React from 'react';

import { AddTodo } from '../components/AddTodo';
import { TodoList } from '../components/TodoList';

export const TodosScreen = () => (
  <>
    <AddTodo />
    <TodoList />
  </>
);
