/* eslint-disable import/order */
import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './App.scss';
import './i18n';
import Loading from 'components/atoms/Loading';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { Provider } from 'react-redux';
import { store } from 'store';
import Example from 'pages/Example';

const routes = [
  {
    path: '/',
    element: <Example />,
  }
];
const queryClient = new QueryClient({
  defaultOptions: {
    queries: DEFAULT_QUERY_OPTION
  }
});

const App: React.FC = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<Loading variant="fullScreen" />}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={`route-${index.toString()}`}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);

export default App;
