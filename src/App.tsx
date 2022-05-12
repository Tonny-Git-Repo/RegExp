import { PasswordPage } from './pages/passwordPAge/PasswordPage';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import { UrlPage } from './pages/urlPage/UrlPage';
import { Navbar } from './Component/navBar/NavBar';

export class Routing{
  public static BaseRouting= "/regExp";
  public static Redirect= "/";
  public static PasswordPage = `${Routing.BaseRouting}/password-regexp`;
  public static UrlPage = `${Routing.BaseRouting}/url-regExp`;
}

function App() {
  return (<React.Suspense >
    <Router>
      <Navbar />
      <Routes>
      <Route path={Routing.PasswordPage} element={<PasswordPage/>} />
      <Route path={Routing.UrlPage} element={<UrlPage/>} />
      <Route path={Routing.Redirect} element={<Navigate to={Routing.PasswordPage} />} />
      </Routes>
    </Router>
  </React.Suspense>);
}

export default App;
