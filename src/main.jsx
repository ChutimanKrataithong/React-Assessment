import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"
import Owner from "./Owner"
import User from "./User"
import Admin from "./Admin"

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/owner",
    element: <Owner />
  },
  {
    path: "/user",
    element: <User />
  },
  {
    path: "/admin",
    element: <Admin />
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
      <RouterProvider router={router} />
</React.StrictMode>,
 
)
