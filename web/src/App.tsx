import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainComponents from './components/Navbar';
import Routes from './routes';
import './styles/global.css';

const App: React.FC = () => (
  <BrowserRouter>
    <MainComponents />
    <Routes />
  </BrowserRouter>
    
)

export default App;
