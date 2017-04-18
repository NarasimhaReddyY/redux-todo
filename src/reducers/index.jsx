const initialState  = {
	todos: [],
	defaultTodoId: '',
	defaultValue: ''
}

let addNewTodo = (state, action) => {
	if (_.isNumber(state.defaultTodoId)) {

		_.forEach(state.todos, function(todo) {
    	if (todo.id == state.defaultTodoId) {
        todo.text = action.text;
    	}
		})

		//if defaultTodoId present replacing existing todo with new value.	
		return Object.assign({}, state, 
														 { todos: [...state.todos] },
														 { defaultTodoId: ''},
														 { defaultValue: ''}
												)

	} else {
		//if defaultTodoId not present adding a new todo.
		return Object.assign({}, state,
														 { todos: [...state.todos, { id: action.id, text: action.text }]},
														 { defaultTodoId: ''},
														 { defaultValue: ''}
											  )
	}
}

export default function manageTodo (state = initialState, action) {	
	switch (action.type) {
		case 'ADD_TODO':	
			return addNewTodo(state, action);
		case 'DELETE_TODO':
			return  Object.assign({}, state, { todos: state.todos.filter(element => element.id !== action.id) })
		case 'EDIT_TODO':
			return Object.assign({}, state, {defaultValue: action.text},{ defaultTodoId: action.id }	)
		case 'SET_DEFAULT_VALUE':
			return Object.assign({}, state, { defaultValue: action.text })
		default:
			return state
	}
}