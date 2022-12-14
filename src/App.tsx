import React from 'react'
import { RouterProvider } from 'react-router-dom'

import SideNav from "./components/SideNav"
import Header from "./components/Header"

import {route} from "./routes"

import "./App.css"

const App: React.FC = () => {
  return (
    <div className="App">
      <SideNav/>
      <Header/>
      <RouterProvider router={route}/>
    </div>
  )
}

export default App
