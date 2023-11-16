import { createContext, FC, ReactNode } from 'react';
import appData from '../utils/fakeData.json';
import { IEmployee, IOrder, IProduct, IUser } from './interfaces';

interface IAppData {
  user: IUser;
  products: IProduct[];
  orders: IOrder[];
  employees: IEmployee[];
}

interface AppContextProps {
  appData: IAppData;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<AppContextProps | undefined>({
  appData: {
    user: appData.user as IUser,
    products: appData.products as IProduct[],
    orders: appData.orders as IOrder[],
    employees: appData.employees as IEmployee[],
  },
});

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return <AppContext.Provider value={appData}>{children}</AppContext.Provider>;
};
