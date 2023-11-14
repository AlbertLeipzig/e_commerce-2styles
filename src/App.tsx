import { Outlet } from 'react-router-dom';
import { MainNavigation } from './components/MainNavigation';
export const App = () => {
  return (
    <>
      <MainNavigation />
      <h1>Hello There</h1>
      <Outlet />
    </>
  );
};
