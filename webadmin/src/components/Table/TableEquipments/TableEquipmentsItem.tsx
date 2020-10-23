import React, { Component } from 'react'

interface Props {
  equipment_name: string,
  description: string,
  patrimony: string,
  created_at: Date;
  updated_at: Date;
  branch: {
    branch_name: string,
  }
  brand: {
    brand_name: string,
  }
  sector: {
    sector_name: string,
  }
  situation: {
    situation_name: string,
  }
  
}

export default class TableEquipmentsItem extends Component<Props> {
  render() {
    const {
      equipment_name,
      description,
      patrimony,
      updated_at,
      created_at,
      brand,
      branch,
      situation,
      sector
    } = this.props;
    return (
      <tr>
        <td>{equipment_name}</td>
        <td>{patrimony}</td>
        <td >
          <textarea disabled className="form-control" rows={4} cols={10}>
            {description}
            
          </textarea>

          </td>
        <td>{situation.situation_name}</td>
        <td>{brand.brand_name}</td>
        <td>{sector.sector_name}</td>
        <td>{branch.branch_name}</td>
        <td>{updated_at}</td>
        <td>{created_at}</td>
      </tr>
    )
  }
}
