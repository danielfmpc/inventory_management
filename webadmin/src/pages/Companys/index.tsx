import React, { useEffect, useState } from 'react';
import TableCompanys from '../../components/Table/TableCompanys';
import TableCompanysItem from '../../components/Table/TableCompanys/TableCompanysItem';
import TopHeader from '../../components/TopHeader';

import api from '../../services/api';

interface Companys {
  id: string;
  company_name: string;
  cnpj: string;
  created_at: Date;
  updated_at: Date;
}

const Companys = () => {
  const [companys, setCompanys] = useState<Companys[]>([]);
  useEffect(
    () => {
      api.get('companys').then(
        response => {
          setCompanys(response.data);
        }
      );
    }, []
  );

  return (
    <div className="content-wrapper">
      <TopHeader menu="Empresas" />
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
                        <th>Marcas</th>
                        <th>CNPJ</th>
                        <th>Atualizado</th>
                        <th>Criado</th>
                      </tr>
                    </thead>
                    <TableCompanys >
                      {companys.map(item => (
                        <TableCompanysItem
                          company_name={item.company_name}
                          cnpj={item.cnpj}
                          created_at={item.created_at}
                          updated_at={item.updated_at}
                          id={item.id}
                          key={item.id}
                        />
                      ))}
                    </TableCompanys>
                    
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

export default Companys;