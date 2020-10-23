import React, { useEffect, useState } from 'react';
import TablePermissions from '../../components/Table/TablePermissions';
import TablePermissionsItem from '../../components/Table/TablePermissions/TablePermissionsItem';
import TopHeader from '../../components/TopHeader';

import api from '../../services/api';

interface Permissions {
  id: string;
  permission_name: string;
  permission_code: number;
  created_at: Date;
  updated_at: Date;
}

const Permissions = () => {
  const [permissions, setPermissions] = useState<Permissions[]>([]);
  useEffect(
    () => {
      api.get('permissions').then(
        response => {
          setPermissions(response.data);
        }
      );
    }, []
  );

  return (
    <div className="content-wrapper">
      <TopHeader menu="Permissão" />
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
                        <th>Permissão</th>
                        <th>Código</th>
                        <th>Atualizado</th>
                        <th>Criado</th>
                      </tr>
                    </thead>
                    <TablePermissions >
                      {permissions.map(item => (
                        <TablePermissionsItem
                          permission_code={item.permission_code}
                          permission_name={item.permission_name}
                          created_at={item.created_at}
                          updated_at={item.updated_at}
                          id={item.id}
                          key={item.id}
                        />
                      ))}
                    </TablePermissions>
                    
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

export default Permissions;