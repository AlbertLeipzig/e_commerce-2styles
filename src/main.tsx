import ReactDOM from 'react-dom/client';
import { AppProvider } from './utils/AppContext.tsx';

import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);
