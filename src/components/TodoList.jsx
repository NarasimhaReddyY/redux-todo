import React, { PropTypes } from 'react'
import Todo from './Todo.jsx'

const TodoList = ({ todos, onTodoDelete, onTodoEdit }) => (
  <ul>
    {
    	todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onTodoDelete={() => onTodoDelete(todo.id)}
       	onTodoEdit={() => onTodoEdit(todo.id, todo.text)}
      />
    )}
  </ul>
)

export default TodoList