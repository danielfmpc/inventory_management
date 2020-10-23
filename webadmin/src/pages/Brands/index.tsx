import React, { useEffect, useState } from 'react';
import TableBrandsItem from '../../components/Table/TableBrands/TableBrandsItem';
import TableBrands from '../../components/Table/TableBrands';
import TopHeader from '../../components/TopHeader';

import api from '../../services/api';

interface Brands {
  id: string;
  brand_name: string;
  created_at: Date;
  updated_at: Date;
}

const Brands = () => {
  const [brands, setBrands] = useState<Brands[]>([]);
  useEffect(
    () => {
      api.get('brands').then(
        response => {
          setBrands(response.data);
        }
      );
    }, []
  );

  return (
    <div className="content-wrapper">
      <TopHeader menu="Marcas" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Marcas cadastradas:</h3>
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
                        <th>Atualizado</th>
                        <th>Criado</th>
                      </tr>
                    </thead>
                    <TableBrands >
                      {brands.map(item => (
                        <TableBrandsItem
                          brand_name={item.brand_name}
                          created_at={item.created_at}
                          updated_at={item.updated_at}
                          id={item.id}
                          key={item.id}
                        />
                      ))}
                    </TableBrands>
                    
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

export default Brands;