import './TodoList.css';

interface TodoListProps {
  items: { id: string; text: string }[];
  deleteTodo: (id: string) => void;
}

const TodoList: React.FunctionComponent<TodoListProps> = ({ items, deleteTodo }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
