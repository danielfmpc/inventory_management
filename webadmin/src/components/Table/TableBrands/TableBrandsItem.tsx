import React, { Component } from 'react'

interface Props {
  id: string;
  brand_name: string;
  created_at: Date;
  updated_at: Date;
}

export default class TableBrandsItem extends Component<Props> {
  render() {
    const {id,brand_name,updated_at,created_at } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{brand_name}</td>
        <td>{updated_at}</td>
        <td>{created_at}</td>
      </tr>
    )
  }
}
