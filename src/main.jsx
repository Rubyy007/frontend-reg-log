import React from 'react';
import Home from "./home";
import ReactDOM from 'react-dom/client';
import Reg from "./reg";
import Spp from "./App";
import Log from "./log";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Spp/>,
  },
  {
    path : "/reg1",
    element : <Reg/>
  },
  {
path : "/log",
element : <Log/>
  },
  {
    path : "/home",
    element : <Home/>
      }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)