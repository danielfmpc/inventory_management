import React, { Component } from 'react'

export default class TableSituations extends Component {
  render() {
    const { children } = this.props;
    return (
      <tbody>
        {children}       
      </tbody>
    )
  }
}