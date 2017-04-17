import React, { PropTypes } from 'react'
import Todo from './Todo.jsx'

const TodoList = ({ todos, onTodoDelete }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onTodoDelete={() => onTodoDelete(todo.id)}
      />
    )}
  </ul>
)

export default TodoList