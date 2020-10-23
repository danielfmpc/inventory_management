import React, { Component } from 'react'

interface Props {
  id: string;
  state_name: string;
  created_at: Date;
  updated_at: Date;
}

export default class TableStatesItem extends Component<Props> {
  render() {
    const {id,state_name, updated_at,created_at } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{state_name}</td>
        <td>{updated_at}</td>
        <td>{created_at}</td>
      </tr>
    )
  }
}
