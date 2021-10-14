import { useCallback, useEffect, useState } from 'react';

import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  getFirestore,
  onSnapshot,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);
const db = getFirestore();

export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(
    () =>
      onSnapshot(collection(db, 'Todos'), (querySnapshot) => {
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
      await addDoc(collection(db, 'Todos'), { text, done: false }),
    []
  );

  const toggleTodo = useCallback(
    async (id: string, done: boolean) =>
      await updateDoc(doc(collection(db, 'Todos'), id), { done: !done }),
    []
  );

  return { todos, addTodo, toggleTodo };
};
