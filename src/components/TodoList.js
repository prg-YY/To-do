import React from "react"

const TodoList = ({ todos, setTodos }) => {
  const deleteHandler = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const complateHandler = ({ todo }) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }
      })
    )
  }

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => complateHandler(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button">
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => deleteHandler(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  )
}

export default TodoList
