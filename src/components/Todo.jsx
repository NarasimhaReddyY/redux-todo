import React, { PropTypes } from 'react'

const Todo = ({ onTodoDelete, onTodoEdit, text }) => (
  <div>
    <li>
      {text}
      <button type="button" name="Edit" onClick={onTodoEdit}>Edit</button>
      <button type="button" name="Delete" onClick={onTodoDelete}>Delete</button>
    </li>
  </div>
)

export default Todo