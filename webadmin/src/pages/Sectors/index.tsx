import React, { useEffect, useState } from 'react';
import TableSectors from '../../components/Table/TableSectors';
import TableSectorsItem from '../../components/Table/TableSectors/TableSectorsItem';
import TopHeader from '../../components/TopHeader';

import api from '../../services/api';

interface Sectors {
  id: string;
  sector_name: string;
  created_at: Date;
  updated_at: Date;
}

const Sectors = () => {
  const [sectors, setSectors] = useState<Sectors[]>([]);
  useEffect(
    () => {
      api.get('sectors').then(
        response => {
          setSectors(response.data);
        }
      );
    }, []
  );

  return (
    <div className="content-wrapper">
      <TopHeader menu="Situação" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Permissões cadastrados:</h3>
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
                        <th>ID</th>
                        <th>Setores</th>
                        <th>Atualizado</th>
                        <th>Criado</th>
                      </tr>
                    </thead>
                    <TableSectors >
                      {sectors.map(item => (
                        <TableSectorsItem
                          sector_name={item.sector_name}
                          created_at={item.created_at}
                          updated_at={item.updated_at}
                          id={item.id}
                          key={item.id}
                        />
                      ))}
                    </TableSectors>                    
                  </table>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sectors;