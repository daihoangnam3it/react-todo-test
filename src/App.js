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
      items: [],
      id: uuidv4(),
      item: '',
      editItem: false,
    };
  }
  handleChange = e => {
    // console.log(e.target.value)
    this.setState({
      item:e.target.value
    })

  };
  handleSubmit = (e) => {
    e.preventDefault();
    var newItem={
      id:this.state.id,
      title:this.state.item
    }
    this.setState({
      items:[...this.state.items,newItem],
      item:'',
      id:uuidv4(),
      editItem:false
    })

  };
  clearList = () => {
    this.setState({
      items: [],
      id: uuidv4(),
      item: '',
      editItem: false,
    })
  };
  handleDelete = id => {
    const newItems=this.state.items.filter(item=>item.id!==id);
    console.log(newItems);
    this.setState({
      items: newItems,
      id: uuidv4(),
      item: '',
      editItem: false,
    })
    
  };
  handleEdit = (id) => {
    const newItems=this.state.items.filter(item=>item.id!==id);
    const selected=this.state.items.find(item=>item.id==id);
    this.setState({
      items: newItems,
      id: id,
      item: selected.title,
      editItem: true,
    })

  };

  render() {
    

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-5'>
            <h3 className='text-capitalize text-center'>Todo input</h3>
            <TodoInput 
              handleSubmit={this.handleSubmit} 
              item={this.state.item}
              handleChange={this.handleChange}
              editItem={this.state.editItem}
              />
            <TodoList 
              items={this.state.items}
              handleDelete={this.handleDelete}
              clearList={this.clearList}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
