import React, { useEffect, useState } from 'react';
import TableBranchs from '../../components/Table/TableBranchs';
import TableBranchsItem from '../../components/Table/TableBranchs/TableBranchsItem';
import TopHeader from '../../components/TopHeader';

import api from '../../services/api';

interface Branchs {
  id: string;
  branch_name: string;
  created_at: string;
  updated_at: string;
  state: {
    state_name: string;
  }
  status: {
    status_name: string;
    status: boolean
  }
  company: {
    company_name: string;
  }
}

const Branchs = () => {
  const [branchs, setBranchs] = useState<Branchs[]>([]);
  useEffect(
    () => {
      api.get('branchs').then(
        response => {
          setBranchs(response.data);
          
        }
      );
    }, []
  );

  return (
    <div className="content-wrapper">
      <TopHeader menu="Filiais" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Filiais cadastradas:</h3>
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
                        <th>Filial</th>
                        <th>Empresas</th>
                        <th>Estado</th>
                        <th>Status</th>
                        <th>Atualizado</th>
                        <th>Criado</th>
                      </tr>
                    </thead>
                    <TableBranchs >
                      {branchs.map(item => (
                        <TableBranchsItem
                          branch_name={item.branch_name}
                          company={item.company}
                          state={item.state}
                          status={item.status}
                          created_at={item.created_at}
                          updated_at={item.updated_at}
                          key={item.id}
                        />
                      ))}
                    </TableBranchs>
                    
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

export default Branchs;