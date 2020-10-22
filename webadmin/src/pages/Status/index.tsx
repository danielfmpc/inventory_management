import React, { useEffect, useState } from 'react';
import TableStatus from '../../components/Table/TableStatus';
import TableStatusItem from '../../components/Table/TableStatus/TableStatusItem';
// import Card from '../../components/Card';
// import TodoItem from '../../components/TodoItem';
// import TodoList from '../../components/TodoList';
import TopHeader from '../../components/TopHeader';

import api from '../../services/api';

// const TodoFooter = () => {
//   return <span>This is footer with <strong>Bold</strong> </span>;
// }

interface Status {
  id: string;
  status_name: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

const Status = () => {
  const [status, setStatus] = useState<Status[]>([]);
  useEffect(
    () => {
      api.get('status').then(
        response => {
          setStatus(response.data);
        }
      );
    }, []
  );

  return (
    <div className="content-wrapper">
      <TopHeader menu="Status" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Status cadastrados:</h3>
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
                        <th>Status Name</th>
                        <th>Status</th>
                        <th>Atualizado em:</th>
                        <th>Criado em:</th>
                      </tr>
                    </thead>
                    <TableStatus >
                      {status.map(item => (
                        <TableStatusItem
                          status_name={item.status_name}
                          status={item.status}
                          created_at={item.created_at}
                          updated_at={item.updated_at}
                          id={item.id}
                          key={item.id}
                        />
                      ))}
                    </TableStatus>
                    
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>

            {/* <div className="col-md-12">
              <Card
                title="Todo List"
                titleIcon="ion-clipboard"
                footer={<TodoFooter />}
              >
                <TodoList>
                  {status.map(item => (
                    <TodoItem
                      todoName={item.status_name}
                      todoBolean={item.status}
                      id={item.id}
                      key={item.id}
                    />
                  ))}
                </TodoList>
              </Card>
            </div> */}
          </div>
        </div>
      </section>
    </div>

  )
}

export default Status;