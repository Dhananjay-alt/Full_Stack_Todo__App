export function Todos({ todos, setTodos }) {
  const toggleCompleted = (_id) => {
    setTodos(
      todos.map(todo =>
        todo._id === _id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-item" >
      {todos.map(todo => (
        <div key={todo._id ?? index} className={`todo-item ${todo.completed ? "completed" : ""}`}>

          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button onClick={() => toggleCompleted(todo._id)}>
            {todo.completed ? "Completed" : "Mark as Completed"}
          </button>
        </div>
      ))}
    </div>
  );
}
