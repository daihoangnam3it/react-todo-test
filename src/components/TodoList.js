import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import TodoItem from "./TodoItem"
export default class TodoList extends Component {
  render() {
    const {items,handleDelete,clearList,handleEdit}=this.props
    return (
      <div>
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">TodoList</h3>
        {items.map(item=><TodoItem 
        key={item.id}
        item={item}
        handleDelete={()=>handleDelete(item.id)}
        handleEdit={()=>handleEdit(item.id)}
        />)}
      </ul>
      <button className="btn btn-danger btn-block text-uppercase mt-5" onClick={clearList}>Clear List</button>
      </div>
    )
  }
}
