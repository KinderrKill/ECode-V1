import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/home';
import Layout from './pages/layout/Layout';

import './_app.scss';
import { Dashboard } from './pages/dashboard/adminDashboard';
import AuthContext from './contexts/authContext';
import { AdminLogin } from './pages/adminLogin';
import DashboardLayout from './pages/layout/DashboardLayout';
import ContactPage from './pages/dashboard/message/[slug]';
import Contact from './pages/dashboard/message/messages';

const router = createBrowserRouter([
  {
    path: '/dashboard/login',
    element: <Layout components={<AdminLogin />} />,
  },
  {
    path: '/dashboard/contact',
    element: <Layout components={<Contact />} />,
  },
  {
    path: '/dashboard/contact/:id',
    element: <Layout components={<ContactPage />} />,
  },
  {
    path: '/dashboard',
    element: <Layout components={<Dashboard />} />,
  },
  {
    path: '/',
    element: <Layout components={<HomePage />} />,
    errorElement: (
      <div>
        <h1>PAGE 404 - Not found</h1>
      </div>
    ),
  },
  {
    path: '/test',
    element: (
      <div>
        <h1>TEST PAGE</h1>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthContext>
    <RouterProvider router={router} />
  </AuthContext>
);
