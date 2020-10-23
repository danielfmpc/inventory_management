import React, { Component } from 'react'

interface Props {
  id: string;
  company_name: string;
  cnpj: string;
  created_at: Date;
  updated_at: Date;
}

export default class TableCompanysItem extends Component<Props> {
  render() {
    const {id,company_name,cnpj,updated_at,created_at } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{company_name}</td>
        <td>{cnpj}</td>
        <td>{updated_at}</td>
        <td>{created_at}</td>
      </tr>
    )
  }
}
