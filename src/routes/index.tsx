import { useRoutes } from 'react-router-dom';
import Layout from '../components/Layout';
import Borrowers from '../pages/Borrowers';
import Property from '../pages/Property';

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'borrowers', element: <Borrowers /> },
        { path: 'property', element: <Property /> },
      ],
    },
  ]);
}
