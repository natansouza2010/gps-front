import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet

} from "react-router-dom";


import { Home } from './pages/Home/Home';
import { Form } from './pages/Form/Form';
import { Header } from './components/Header/Header';
import { Login } from './pages/Login/Login';




ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/editar">
      </Route>
      <Route path="/criar/" element={

        <Form />

      } />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


