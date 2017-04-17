import { connect } from 'react-redux'
import TodoList from '../components/TodoList.jsx'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoDelete: (id) => {
      dispatch({type: 'DELETE_TODO', id: id})
    }
  }
}

const GetTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default GetTodoList
