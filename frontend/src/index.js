import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomePage />} />
      <Route path='/product/:id' element= {<ProductPage />}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
