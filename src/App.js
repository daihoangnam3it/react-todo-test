import React from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
//showing vs-code 
class App extends React.Component {
  render(){
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
