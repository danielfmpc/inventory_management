import React, { useEffect, useState } from 'react';
import TableSituations from '../../components/Table/TableSituations';
import TableSituationsItem from '../../components/Table/TableSituations/TableSituationsItem';
import TopHeader from '../../components/TopHeader';

import api from '../../services/api';

interface Situations {
  id: string;
  situation_name: string;
  created_at: Date;
  updated_at: Date;
}

const Situations = () => {
  const [situations, setSituations] = useState<Situations[]>([]);
  useEffect(
    () => {
      api.get('situations').then(
        response => {
          setSituations(response.data);
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
                        <th>Situações</th>
                        <th>Atualizado</th>
                        <th>Criado</th>
                      </tr>
                    </thead>
                    <TableSituations >
                      {situations.map(item => (
                        <TableSituationsItem
                          situation_name={item.situation_name}
                          created_at={item.created_at}
                          updated_at={item.updated_at}
                          id={item.id}
                          key={item.id}
                        />
                      ))}
                    </TableSituations>                    
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

export default Situations;