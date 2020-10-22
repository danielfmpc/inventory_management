import React, { Component } from 'react'

interface Props {
  id: string;
  status_name: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

export default class TableStatusItem extends Component<Props> {
  render() {
    const {id,status_name,status,updated_at,created_at } = this.props;
    return (
      <tr>
        <td>{id}</td>
        {status === false
          ? <td><span className="tag tag-danger">{status_name}</span></td>
          : <td><span className="tag tag-success">{status_name}</span></td>
        }
        <td >
          <input
            type="checkbox"
            defaultChecked={status}
            name="status"
            id={id}
            // onChange={()=> setStatus(!statusUse)}
          />
        </td>
        
        <td>{updated_at}</td>
        <td>{created_at}</td>
      </tr>
    )
  }
}
