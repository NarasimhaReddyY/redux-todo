import { connect } from 'react-redux'
import TodoList from '../components/TodoList.jsx'
import { deleteTodo, editTodo } from '../actions/index.jsx'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoDelete: (id) => {
      dispatch(deleteTodo(id))
    },
    onTodoEdit: (id, text) => {
      dispatch(editTodo(id, text))
    }
  }
}

const GetTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default GetTodoList
