import { createBrowserRouter } from 'react-router-dom';
import Place from '../pages/Place';
import Home from '../pages/Home';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'place-to-stay',
        element: <Place />,
      },
    ],
  },
]);

export default router;
