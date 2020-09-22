import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class TodoInput extends Component {
  render() {
    const {item,handleSubmit,handleChange,editItem} =this.props
    return (
      <div className='card card-body my-3'>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div className='input-group-text bg-primary text-white'>
                <i className='fas fa-book'></i>
              </div>
            </div>
            <input type="text" value={item} onChange={handleChange} className="from-control text-capitalize" placeholder="add to do"/>
          </div>
          <button className={editItem?"btn btn-success btn-block btn-primary mt-3":"btn btn-block btn-primary mt-3"}>{editItem?"Edit":"Add item"}</button>
        </form>
      </div>
    );
  }
}
