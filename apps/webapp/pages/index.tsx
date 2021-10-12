import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const textInputRef = useRef<HTMLInputElement>(null);

  const getTodos = useCallback(async () => {
    const resp = await axios.get<Todo[]>('http://localhost:3333/api');
    setTodos(resp.data);
  }, []);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const handleAddTodo = useCallback(async () => {
    if (textInputRef.current && textInputRef.current.value.length) {
      await axios.post('http://localhost:3333/api', {
        text: textInputRef.current.value,
      });
      getTodos();
      textInputRef.current.value = '';
    }
  }, [getTodos]);

  const onToggle = useCallback(
    async (id: number) => {
      const done = todos.find((todo) => todo.id === id)?.done;
      await axios.post('http://localhost:3333/api/setDone', {
        id,
        done: !done,
      });
      getTodos();
    },
    [getTodos, todos]
  );

  return (
    <div>
      <input ref={textInputRef} />
      <button onClick={handleAddTodo}>Add</button>
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center">
          <input
            type="checkbox"
            onChange={() => onToggle(todo.id)}
            defaultChecked={todo.done}
          />
          <p>{todo.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
