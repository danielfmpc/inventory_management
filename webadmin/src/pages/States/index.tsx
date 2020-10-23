import React, { useEffect, useState } from 'react';
import TableStates from '../../components/Table/TableStates';
import TableStatesItem from '../../components/Table/TableStates/TableStatesItem';

import TopHeader from '../../components/TopHeader';

import api from '../../services/api';

interface States {
  id: string;
  state_name: string;
  created_at: Date;
  updated_at: Date;
}

const States = () => {
  const [states, setStates] = useState<States[]>([]);
  useEffect(
    () => {
      api.get('states').then(
        response => {
          setStates(response.data);
        }
      );
    }, []
  );

  return (
    <div className="content-wrapper">
      <TopHeader menu="Estados" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Estados cadastrados:</h3>
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
                        <th>Estados</th>
                        <th>Atualizado</th>
                        <th>Criado</th>
                      </tr>
                    </thead>
                    <TableStates >
                      {states.map(item => (
                        <TableStatesItem
                          state_name={item.state_name}
                          created_at={item.created_at}
                          updated_at={item.updated_at}
                          id={item.id}
                          key={item.id}
                        />
                      ))}
                    </TableStates>
                    
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

export default States;