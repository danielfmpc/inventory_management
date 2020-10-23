import React, { Component } from 'react'

interface Props {
  branch_name: string;
  created_at: string;
  updated_at: string;
  state: {
    state_name: string;
  }
  status: {
    status_name: string;
    status: boolean
  }
  company: {
    company_name: string;
  }
}

export default class TableBranchsItem extends Component<Props> {
  render() {
    const {
      branch_name,
      state,
      status,
      company,
      updated_at,
      created_at
    } = this.props;
    return (
      <tr>
        <td>{branch_name}</td>
        <td>{state.state_name}</td>        
        <td>{company.company_name}</td>
        {status.status === false
          ? <td><span className="tag tag-danger">{status.status_name}</span></td>
          : <td><span className="tag tag-success">{status.status_name}</span></td>
        }
        <td>{updated_at}</td>
        <td>{created_at}</td>
      </tr>
    )
  }
}
