import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import { Todo } from '@smartlist/shared-types';
import { Platform } from 'react-native';

const BASE_IP = Platform.OS === 'android' ? '10.0.2.2' : '127.0.0.1';
const BASE_URL = `http://${BASE_IP}:3333/api`;

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = useCallback(async () => {
    const resp = await axios.get<Todo[]>(BASE_URL);
    setTodos(resp.data);
  }, []);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const addTodo = useCallback(
    async (text: string) => {
      await axios.post(BASE_URL, { text });
      await getTodos();
    },
    [getTodos]
  );

  const toggleTodo = useCallback(
    async (id: number) => {
      const done = todos.find((todo) => todo.id === id)?.done;
      await axios.post(`${BASE_URL}/setDone`, { id, done: !done });
      await getTodos();
    },
    [getTodos, todos]
  );

  return { todos, addTodo, toggleTodo };
};
