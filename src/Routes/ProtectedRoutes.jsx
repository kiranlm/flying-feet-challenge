import React from 'react';
import ReportsView from '../Components/ReportsView';

const protectedRoutes = [
  {
    name: 'reports',
    exact: true,
    path: '/reports',
    main: (props) => <ReportsView {...props} />,
    public: false,
  },
];

export default protectedRoutes;
