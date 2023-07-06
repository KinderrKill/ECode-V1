import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/home';
import Layout from './pages/layout/Layout';

import './_app.scss';

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
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
);
