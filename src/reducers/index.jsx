const initialState  = {
	todos: []
}

export default function addTodo (state = initialState, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return Object.assign({}, state, { todos: [...state.todos, { id: action.id, text: action.text }]})
		case 'DELETE_TODO':
			return  Object.assign({}, state, { todos: state.todos.filter(element => element.id !== action.id) })
		default:
			return state
	}
}