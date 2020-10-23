import React, { Component } from 'react'

interface Props {
  id: string;
  sector_name: string;
  created_at: Date;
  updated_at: Date;
}

export default class TableSectorsItem extends Component<Props> {
  render() {
    const {id,sector_name,updated_at,created_at } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{sector_name}</td>
        <td>{updated_at}</td>
        <td>{created_at}</td>
      </tr>
    )
  }
}
