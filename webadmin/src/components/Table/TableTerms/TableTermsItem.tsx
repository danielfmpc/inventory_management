import React, { Component } from 'react'

interface Props {
  term_name: string;
  created_at: Date;
  updated_at: Date;
  equipment: {
    equipment_name: string,
    patrimony: string,
    situation: {
      situation_name: string;
    }
  }
  user: {
    full_name: string,
  }
  
}

export default class TableTermsItem extends Component<Props> {
  render() {
    const {
      term_name,
      updated_at,
      created_at,
      equipment,
      user,
    } = this.props;
    return (
      <tr>
        <td>{term_name}</td>
        <td>{user.full_name}</td>
        <td>{equipment.equipment_name}</td>
        <td>{equipment.patrimony}</td>
        <td>{equipment.situation.situation_name}</td>
        <td>{updated_at}</td>
        <td>{created_at}</td>
      </tr>
    )
  }
}
