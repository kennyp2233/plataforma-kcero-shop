import { lazy, Fragment, Suspense } from 'react';
import { Route, Outlet } from 'react-router-dom';

// Define paths
const PATH_HOME = '/';
const PATH_ADMIN = '/admin';
const PATH_ORDER_STATUS = '/orders';
const PATH_LOGIN = '/login';
const PATH_SEARCH_HISTORY = '/search-history'; // Nueva ruta para buscar historial
const PATH_ORDER_HISTORY = '/order-history';   // Nueva ruta para el historial de pedidos

// Define your routes
export const routes = [
  {
    path: PATH_HOME,
    layout: () => import('../layouts/MainLayout'),
    children: [
      {
        path: '/',
        element: () => import('../pages/Inicio'),
        index: true // Ensures this is the default route for this layout
      },
      {
        path: PATH_ORDER_STATUS,
        element: () => import('../pages/EstadoOrden'),
      },
      {
        path: PATH_SEARCH_HISTORY,
        element: () => import('../pages/BuscarHistorial'), // Nueva pantalla de búsqueda
      },
      {
        path: PATH_ORDER_HISTORY,
        //element: () => import('../pages/HistorialPedidos'), // Nueva pantalla de historial
      },
      {
        path: PATH_LOGIN,
        element: () => import('../pages/Login'),
      }
    ]
  },
  
];

// Function to render routes
export const renderRoutes = (routes) => {
  return routes.map((route, index) => {
    const Component = route.element ? lazy(() => route.element()) : Fragment;
    const Layout = route.layout ? lazy(() => route.layout()) : Fragment;
    const Guard = route.guard ? lazy(() => route.guard()) : Fragment;

    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Guard>
              <Layout>
                {route.children ? <Outlet /> : <Component />}
              </Layout>
            </Guard>
          </Suspense>
        }
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });
};

export default renderRoutes;
