import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';

interface MainLayoutContextInterface {
  contentClass: string;
  setContentClass: Dispatch<SetStateAction<string>>;
  footerClass: string;
  setFooterClass: Dispatch<SetStateAction<string>>;
}

export const MainLayoutContext = createContext(
  {} as MainLayoutContextInterface
);

const MainLayoutProvider = ({ children }: PropsWithChildren) => {
  const [contentClass, setContentClass] = useState('');
  const [footerClass, setFooterClass] = useState('');
  return (
    <MainLayoutContext.Provider
      value={{ contentClass, setContentClass, footerClass, setFooterClass }}
    >
      {children}
    </MainLayoutContext.Provider>
  );
};

export const useMainLayoutContext = () => useContext(MainLayoutContext);

export default MainLayoutProvider;
