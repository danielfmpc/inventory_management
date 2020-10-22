import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Routes from './routes'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes />
        <Footer />
      </BrowserRouter>
    )
  }
}
