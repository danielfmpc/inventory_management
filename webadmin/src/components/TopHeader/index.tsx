import React, { Component } from 'react'

interface Props {
  menu: string;
}

export default class TopHeader extends Component<Props> {
  render() {
    const { menu } = this.props;
    return (
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">{menu}</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">Dashboard</li>
                <li className="breadcrumb-item active">{menu}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
