import React from 'react'
import { createBrowserRouter } from "react-router-dom"

import Dasboard from "./views/Deashboard"
import Fines from "./views/Fines"

export const route = createBrowserRouter([
     {
          path: "/",
          element: <Dasboard/>,
     },
     {
          path: "/fines",
          element: <Fines/>
     },
])