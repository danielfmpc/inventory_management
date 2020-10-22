import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    const { children } = this.props;
    return (
      <ul className="todo-list" data-widget="todo-list">
        {children}
      </ul>
    )
  }
}
