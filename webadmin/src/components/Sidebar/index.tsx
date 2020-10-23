import React, { Component } from 'react';
import { Link } from "react-router-dom";
import userImage from '../../assets/img/user2-160x160.jpg';
import logo from '../../assets/img/AdminLTELogo.png';


export default class Sidebar extends Component {
  render() {
    return (

      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="/" className="brand-link active" >
          <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src={userImage} alt="Imagem User" className="img-circle elevation-2" />
            </div>
            <div className="info">
              <Link to="/#" className="d-block">Alexander Pierce</Link>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/status" className="nav-link">
                  <i className="nav-icon far fa-check-square" />
                  <p>
                    Status
                <span className="badge badge-info right">2</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/states" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>
                    Estados
                  </p>
                </Link>
              </li>   
              <li className="nav-item">
                <Link to="/brands" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>
                    Marcas
                  </p>
                </Link>
              </li>  
              <li className="nav-item">
                <Link to="/companys" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>
                    Empresas
                  </p>
                </Link>
              </li>   
              <li className="nav-item">
                <Link to="/permissions" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>
                    Permissões
                  </p>
                </Link>
              </li>   
              <li className="nav-item">
                <Link to="/situations" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>
                    Situação
                  </p>
                </Link>
              </li> 
              <li className="nav-item">
                <Link to="/sectors" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>
                    Setores
                  </p>
                </Link>
              </li>     
              <li className="nav-header">MISCELLANEOUS</li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>

    )
  }
}
