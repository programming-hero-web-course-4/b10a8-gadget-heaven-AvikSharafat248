import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import DevicesDetail from './Components/DevicesDetail/DevicesDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index:true,
        element: <Home></Home>
      },
      {
        path: 'devices/:product_id',
        element: <DevicesDetail></DevicesDetail>,
        loader: () => fetch('/devicesData.json')
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
