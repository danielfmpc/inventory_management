import React, { Component } from 'react'

export default class TablePermissions extends Component {
  render() {
    const { children } = this.props;
    return (
      <tbody>
        {children}       
      </tbody>
    )
  }
}
