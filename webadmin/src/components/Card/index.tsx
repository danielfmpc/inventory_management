import React, { Component } from 'react'

interface Props {
  title?: string;
  titleIcon?: string;
  footer?: any;

}

export default class Card extends Component<Props> {
  render() {
    const { title, titleIcon, footer, children } = this.props;
    return (
      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              {titleIcon && <i className={`ion ${titleIcon} mr-1`}></i>}
              {title}
            </h3>
            
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fas fa-minus" /></button>
              <button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                <i className="fas fa-times" /></button>
            </div>
          </div>
          <div className="card-body">
            {children}
          </div>
          
          {footer && <div className="card-footer">{footer}</div>}
          
        </div>
      </section>
    )
  }
}
