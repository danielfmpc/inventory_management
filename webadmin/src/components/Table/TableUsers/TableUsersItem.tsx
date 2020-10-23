import React, { Component } from 'react'

interface Props {
  full_name: string;
  cpf: string;
  birth: Date;
  email: string;
  created_at: Date;
  updated_at: Date;
  status?: {
    status_name: string,
    status: boolean,
  }
  branch?: {
    branch_name: string,
  }
  sector?: {
    sector_name: string,
  }
  permissions?: {
    permission_name: string,
    permission_code: number,
  }
  
}

export default class TableUsersItem extends Component<Props> {
  render() {
    const {
      full_name,
      cpf,
      birth,
      email,
      updated_at,
      created_at,
      status,
      branch,
      permissions,
      sector
    } = this.props;
    return (
      <tr>
        <td>{full_name}</td>
        <td>{cpf}</td>
        <td>{birth}</td>
        <td>{email}</td>
        <td>{branch?.branch_name}</td>
        <td>{permissions?.permission_name}</td>
        <td>{sector?.sector_name}</td>
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
