import React, { useEffect, useState } from 'react'
import TableEquipments from '../../components/Table/TableEquipments';
import TableEquipmentsItem from '../../components/Table/TableEquipments/TableEquipmentsItem';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

interface Equipments {
  id: string;
  full_name: string;
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

const Equipments = () => {
  const [equipments, setEquipments] = useState<Equipments[]>([]);
  
  useEffect(() => {
    api.get('equipments').then(response => {
      setEquipments(response.data)
    });
  }, []);
  return (
    <div className="content-wrapper">
      <TopHeader menu="Equipamentos" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Equipamentos cadastrados:</h3>
                  <div className="card-tools">
                    <div className="input-group input-group-sm" style={{ width: 150 }}>
                      <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body table-responsive p-0">
                  <table className="table table-hover text-nowrap">
                    <thead>
                      <tr>
                        <th>Equipamento</th>
                        <th>Parimónio</th>
                        <th>Descrição</th>
                        <th>Situação</th>
                        <th>Marca</th>
                        <th>Setor</th>
                        <th>Filial</th>
                        <th>Atualizado</th>
                        <th>Criado</th>
                      </tr>
                    </thead>
                    <TableEquipments >
                      {equipments.map(item => (
                        <TableEquipmentsItem
                          equipment_name={item.equipment_name}
                          patrimony={item.patrimony}
                          description={item.description}
                          branch={item.branch}
                          brand={item.brand}
                          sector={item.sector}
                          situation={item.situation}
                          created_at={item.created_at}
                          updated_at={item.updated_at}
                          key={item.id}
                        />
                      ))}
                    </TableEquipments>
                    
                  </table>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Equipments;