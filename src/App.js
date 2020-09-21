import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
//showing vs-code
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ id: 1, title: 'Wake up' }],
      id: uuidv4(),
      item: '',
      editItem: false,
    };
  }
  handleChange = (e) => {
    console.log('handleChange');
  };
  handleSubmit = (e) => {
    console.log('handle-SUBMIT');
  };
  clearList = () => {
    console.log('clear list');
  };
  handleDelete = (id) => {
    console.log('delete' + id);
  };
  handleEdit = (id) => {
    console.log('Edit' + id);
  };

  render() {
    console.log(this.state);
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-5'>
            <h3 className='text-capitalize text-center'>Todo input</h3>
            <TodoInput 
              handleSubmit={this.handleSubmit} 
              item={this.state.item}
              handleChange={this.handleChange}
              handleEdit={this.state.editItem}
              />
            <TodoList 
              items={this.state.items}
              handleDelete={this.handleDelete}
              clearList={this.clearList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
