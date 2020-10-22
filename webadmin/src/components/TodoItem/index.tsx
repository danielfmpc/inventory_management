import React, { Component } from 'react'

interface Props {
  id: string;
  todoName: string;
  todoBolean?: boolean;
}

export default class TodoItem extends Component<Props> {
  render() {
    const {id, todoBolean,todoName}= this.props
    return (
      <li>
        {/* drag handle */}
        <span className="handle">
          <i className="fas fa-ellipsis-v" />
          <i className="fas fa-ellipsis-v" />
        </span>
        {/* checkbox */}
        <div className="icheck-primary d-inline ml-2">
          <input
            type="checkbox"
            defaultChecked={todoBolean}
            name="todo1"
            id={id}
          // onChange={()=> setStatus(!statusUse)}
          />
          <label htmlFor={id} >
            <span className="text">{todoName}</span>
          </label>
        </div>      
        <small className="badge badge-danger"><i className="far fa-clock" /> 2 mins</small>
        <div className="tools">
          <i className="fas fa-edit" />
          <i className="fas fa-trash-o" />
        </div>
      </li>
    )
  }
}
