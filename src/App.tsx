import ReactDOM from 'react-dom/client';

import HomePage from './pages/HomePage';
import Layout from './pages/layout/Layout';

import './_app.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  //   <Layout components={<HomePage />} />
  // </React.StrictMode>

  <Layout components={<HomePage />} />
);
