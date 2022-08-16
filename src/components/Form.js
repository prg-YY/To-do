import React from "react"
import { v4 as uuidv4 } from "uuid"

const Form = ({ input, setInput, todos, setTodos }) => {
  const inputChangeHanlder = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
    setInput("")
    console.log(input)
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter a Todo...."
        className="task-input"
        value={input}
        required
        onChange={inputChangeHanlder}
      />
      <button className="button-add" type="submit">
        ADD
      </button>
    </form>
  )
}

export default Form
