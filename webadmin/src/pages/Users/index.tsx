import React, { useEffect, useState } from 'react'
import TableUsers from '../../components/Table/TableUsers';
import TableUsersItem from '../../components/Table/TableUsers/TableUsersItem';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

interface Users {
  id: string;
  full_name: string;
  cpf: string;
  birth: Date;
  email: string;
  created_at: Date;
  updated_at: Date;
  status?: {
    status_name: string,
    status: boolean,
  }
  branch?: {
    branch_name: string,
  }
  sector?: {
    sector_name: string,
  }
  permissions?: {
    permission_name: string,
    permission_code: number,
  }
}

const Users = () => {
  const [users, setUsers] = useState<Users[]>([]);
  
  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data)
    });
  }, []);
  return (
    <div className="content-wrapper">
      <TopHeader menu="Usuarios" />
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
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Nascimento</th>
                        <th>Email</th>
                        <th>Filial</th>
                        <th>Permissão</th>
                        <th>Setor</th>
                        <th>Status</th>
                        <th>Atualizado</th>
                        <th>Criado</th>
                      </tr>
                    </thead>
                    <TableUsers >
                      {users.map(item => (
                        <TableUsersItem
                          full_name={item.full_name}
                          birth={item.birth}
                          cpf={item.cpf}
                          email={item.email}
                          branch={item.branch}
                          permissions={item.permissions}
                          sector={item.sector}
                          status={item.status}
                          created_at={item.created_at}
                          updated_at={item.updated_at}
                          key={item.id}
                        />
                      ))}
                    </TableUsers>
                    
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

export default Users;