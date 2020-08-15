import React from 'react';
import Login from '../Components/Login';
import Register from '../Components/Register';

const routes = [
  { name: 'Register', path: '/', exact: true, main: () => <Register /> },
  { name: 'Login', path: '/login', exact: true, main: () => <Login /> },
];

export default routes;
