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
    path: '/',
    element: <Layout components={<HomePage />} />,
    errorElement: (
      <div>
        <h1>PAGE 404 - Not found</h1>
      </div>
    ),
  },
  {
    path: '/dashboard',
    element: <DashboardLayout components={<Dashboard />} />,
  },
  {
    path: '/dashboard/login',
    element: <Layout components={<AdminLogin />} />,
  },
  {
    path: '/dashboard/contact',
    element: <DashboardLayout components={<Contact />} />,
  },
  {
    path: '/dashboard/contact/:id',
    element: <DashboardLayout components={<ContactPage />} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthContext>
    <RouterProvider router={router} />
  </AuthContext>
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
);
