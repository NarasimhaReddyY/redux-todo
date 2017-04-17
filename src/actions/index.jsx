let nextTodoId = 0
export const createTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
  }
}