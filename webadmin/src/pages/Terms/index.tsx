import React, { useEffect, useState } from 'react'
import TableTerms from '../../components/Table/TableTerms';
import TableTermsItem from '../../components/Table/TableTerms/TableTermsItem';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

interface Terms {
  id: string;
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

const Terms = () => {
  const [terms, setTerms] = useState<Terms[]>([]);
  
  useEffect(() => {
    api.get('terms').then(response => {
      setTerms(response.data)
    });
  }, []);
  return (
    <div className="content-wrapper">
      <TopHeader menu="Termos" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Termos cadastrados:</h3>
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
                        <th>Termo</th>
                        <th>Usuario</th>
                        <th>Equipamento</th>
                        <th>Património</th>
                        <th>Situação</th>
                        <th>Atualizado</th>
                        <th>Criado</th>
                      </tr>
                    </thead>
                    <TableTerms >
                      {terms.map(item => (
                        <TableTermsItem
                          term_name={item.term_name}
                          equipment={item.equipment}
                          user={item.user}
                          created_at={item.created_at}
                          updated_at={item.updated_at}
                          key={item.id}
                        />
                      ))}
                    </TableTerms>
                    
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

export default Terms;