import React, { Component } from 'react'

interface Props {
  id: string;
  permission_name: string;
  permission_code: number;
  created_at: Date;
  updated_at: Date;
}

export default class TablePermissionsItem extends Component<Props> {
  render() {
    const {id,permission_name,permission_code,updated_at,created_at } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{permission_name}</td>
        <td>{permission_code}</td>
        <td>{updated_at}</td>
        <td>{created_at}</td>
      </tr>
    )
  }
}
