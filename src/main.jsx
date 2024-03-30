import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Granim from 'granim'

import App from './App.jsx'
import Home from './pages/Home.jsx';

import Installations from './pages/Installations.jsx';
import Exhibitions from './pages/Exhibitions.jsx';
import Commissions from './pages/Commissions.jsx';
import Wallwork from './pages/Wallwork.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

import CommissionPanel from './components/CommissionPanel.jsx';

import './index.css'

new Granim({
  element: '#dynamic-background',
  direction: 'radial',
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        [
          { color: '#FFF', pos: 0 },
          { color: '#FDF5E6', pos: 0.2 },
          { color: '#F5F5DC', pos: 0.4 }
        ],
        [
          { color: '#FDF5E6', pos: 0.6 },
          { color: '#F5F5DC', pos: 0.8 },
          { color: '#F0E69A', pos: 1 }
        ],
        [
          { color: '#F5F5DC', pos: 0 },
          { color: '#FDF5E6', pos: 0.2 },
          { color: '#F5DEB3', pos: 0.4 }
        ],
        [
          { color: '#F5F5DC', pos: 0.6 },
          { color: '#F0E69A', pos: 0.8 },
          { color: '#FFDAB9', pos: 1 }
        ],
        [
          { color: '#FFF', pos: 0 },
          { color: '#F0E6a3', pos: 0.2 },
          { color: '#FFFAFA', pos: 0.4 }
        ]
      ],
      transitionSpeed: 30000
    }
  }
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Home />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/commissions',
        element: <Commissions />
      },
      {
        path: '/commissions/:id',
        element: <CommissionPanel />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/exhibitions',
        element: <Exhibitions />
      },
      {
        path: '/installations',
        element: <Installations />
      },
      {
        path: '/wallwork',
        element: <Wallwork />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
