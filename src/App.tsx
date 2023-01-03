import React from 'react'
import { Routes, Route } from 'react-router-dom'

import SideNav from "./components/SideNav"
import Header from "./components/Header"

import Dashboard from "./views/Deashboard"
import Cars from "./views/Cars"
import Gasoline from "./views/Gasoline"
import Fines from "./views/Fines"
import Finance from "./views/Finance"
import Driver from "./views/Driver"

import "./App.css"

const App: React.FC = () => {
  return (
    <div className="App">      
        <SideNav/>
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/carros" element={<Cars />}/>
          <Route path="/gasolina" element={<Gasoline />}/>
          <Route path="/multas" element={<Fines />}/>
          <Route path="/financeiro" element={<Finance />}/>
          <Route path="/motorista" element={<Driver />} />
        </Routes>
    </div>
  )
}

export default App
