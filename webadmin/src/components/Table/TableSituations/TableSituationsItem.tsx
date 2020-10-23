import React, { Component } from 'react'

interface Props {
  id: string;
  situation_name: string;
  created_at: Date;
  updated_at: Date;
}

export default class TableSituationsItem extends Component<Props> {
  render() {
    const {id,situation_name,updated_at,created_at } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{situation_name}</td>
        <td>{updated_at}</td>
        <td>{created_at}</td>
      </tr>
    )
  }
}
