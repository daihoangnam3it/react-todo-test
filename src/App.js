import React from 'react';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
//showing vs-code 
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      item:[{id:1,title:"Wake up"}],
      id:uuidv4(),
    }
  }
  render(){
    console.log(this.state)
    return (
      <div className='container'>
        <div className='row'>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
