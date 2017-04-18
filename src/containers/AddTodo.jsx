import React from 'react'
import { connect } from 'react-redux'
import { createTodo, setDefaultValue } from '../actions/index.jsx'
import _ from 'lodash';

function getDefaultTodoValue(todos, todoId) {
  var defaultTodo;

  if (_.isNumber(todoId)) {
    _.forEach(todos, function(todo) {
      if (todo.id == todoId) {
        defaultTodo = todo;
      }
    })
  }
  
  return (typeof defaultTodo == 'undefined') ? '' : defaultTodo.text;
}

const mapStateToProps = (state) => { 
  return {
    defaultTodoValue: state.defaultValue
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoSubmit: (text) => {
      dispatch(createTodo(text))
    },

    handleOnChage: (text) => {
      dispatch(setDefaultValue(text))
    }
  }
}

let AddTodo = ({defaultTodoValue, onTodoSubmit, handleOnChage}) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }

        onTodoSubmit(input.value)
        input.value = ''
      }}>

        <input 
          ref={node => { input = node }} 
          value={defaultTodoValue}
          onChange={event => { handleOnChage(event.target.value) }}
        />

        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo)

export default AddTodo