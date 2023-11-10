import { Table } from '@tanstack/react-table';
import { PropsWithChildren, createContext, useContext } from 'react';

export const AdvanceTableContext = createContext({});

const AdvanceTableProvider = ({ children, ...rest }: PropsWithChildren) => {
  return (
    <AdvanceTableContext.Provider value={{ ...rest }}>
      {children}
    </AdvanceTableContext.Provider>
  );
};

export const useAdvanceTableContext = <T,>() =>
  useContext(AdvanceTableContext) as Table<T>;

export default AdvanceTableProvider;
