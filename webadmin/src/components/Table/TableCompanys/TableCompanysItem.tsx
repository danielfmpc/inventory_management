import React, { Component } from 'react'

interface Props {
  id: string;
  company_name: string;
  cnpj: string;
  created_at: Date;
  updated_at: Date;
  status?: {
    status_name: string,
    status: boolean,
  }
}

export default class TableCompanysItem extends Component<Props> {
  render() {
    const {
      id,
      company_name,
      cnpj,
      updated_at,
      created_at,
      status
    } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{company_name}</td>
        <td>{cnpj}</td>
        {status?.status === false
          ? <td><span className="tag tag-danger">{status?.status_name}</span></td>
          : <td><span className="tag tag-success">{status?.status_name}</span></td>
        }
        <td>{updated_at}</td>
        <td>{created_at}</td>
      </tr>
    )
  }
}
