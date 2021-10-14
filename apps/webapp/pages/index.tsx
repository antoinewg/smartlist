import { useCallback, useRef } from 'react';
import { useTodos } from '../hooks/useTodos';

const Home = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const { todos, addTodo, toggleTodo } = useTodos();

  const handleAddTodo = useCallback(async () => {
    if (textInputRef.current && textInputRef.current.value.length) {
      addTodo(textInputRef.current.value);
      textInputRef.current.value = '';
    }
  }, [addTodo]);

  return (
    <div>
      <input ref={textInputRef} />
      <button onClick={handleAddTodo}>Add</button>
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center">
          <input
            type="checkbox"
            onChange={() => toggleTodo(todo.id, todo.done)}
            defaultChecked={todo.done}
          />
          <p>{todo.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
