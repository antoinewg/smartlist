import firestore from '@react-native-firebase/firestore';
import { useCallback, useEffect, useState } from 'react';

import { Todo } from '@smartlists/shared-types';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(
    () =>
      firestore()
        .collection('Todos')
        .onSnapshot((querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            const { text, done } = doc.data();
            list.push({ id: doc.id, text, done });
          });

          setTodos(list);
        }),
    []
  );

  const addTodo = useCallback(
    async (text: string) =>
      await firestore().collection('Todos').add({ text, done: false }),
    []
  );

  const toggleTodo = useCallback(
    async (id: string, done: boolean) =>
      await firestore().collection('Todos').doc(id).update({ done: !done }),
    []
  );

  return { todos, addTodo, toggleTodo };
};
