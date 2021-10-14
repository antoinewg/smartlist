import { useCallback, useRef } from 'react';
import { useTodos } from '../hooks/useTodos';

const Home = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  const handleAddTodo = useCallback(
    (event) => {
      event.preventDefault();
      if (textInputRef.current && textInputRef.current.value.length) {
        console.log('handleAddTodo', textInputRef.current.value);
        addTodo(textInputRef.current.value);
        textInputRef.current.value = '';
      }
    },
    [addTodo]
  );

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input ref={textInputRef} type="text" placeholder="Add todo..." />
        <button type="submit">Add</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center space-x-4">
          <input
            type="checkbox"
            onChange={() => toggleTodo(todo.id, todo.done)}
            defaultChecked={todo.done}
          />
          <p>{todo.text}</p>
          <p onClick={() => deleteTodo(todo.id)}>{'❌'}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
