import React, { Component } from 'react'
import uuid from "uuid"
import "bootstrap/dist/css/bootstrap.min.css"
import TodoItem from "./TodoItem"
export default class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoItem/>
      </div>
    )
  }
}