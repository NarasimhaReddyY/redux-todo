let nextTodoId = 0
export const createTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
  }
}

export const deleteTodo = (id) => {
	return {
		type: 'DELETE_TODO',
		id: id
	}
}

export const editTodo = (id, text) => {
	return {
		type: 'EDIT_TODO',
		id: id,
		text: text
	}
}

export const setDefaultValue = (text) => {
	return {
		type: 'SET_DEFAULT_VALUE',
		text: text
	}
}
