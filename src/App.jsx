import React, {Component} from 'react';
import AddTodo from './containers/AddTodo.jsx'
import GetTodoList from './containers/GetTodoList.jsx'

class App extends Component {
  render() {  	
    return (
    	<div>
    		<AddTodo />
     		<GetTodoList />
    	</div>
    );
  }
}
export default App;
