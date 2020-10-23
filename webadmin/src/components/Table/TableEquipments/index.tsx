import React, { Component } from 'react'

export default class TableEquipments extends Component {
  render() {
    const { children } = this.props;
    return (
      <tbody>
        {children}       
      </tbody>
    )
  }
}
