import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotte from './Routes/Rotte';
import { RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={Rotte}/>
  </React.StrictMode>
);




