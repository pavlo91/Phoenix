import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';

interface CollapseContextInterface {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  showPreviewBtn: boolean;
  setShowPreviewBtn: Dispatch<SetStateAction<boolean>>;
}

export const CollapseContext = createContext({} as CollapseContextInterface);

const PhoenixDocProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const [showPreviewBtn, setShowPreviewBtn] = useState(true);

  return (
    <CollapseContext.Provider
      value={{
        open,
        setOpen,
        showPreviewBtn,
        setShowPreviewBtn
      }}
    >
      {children}
    </CollapseContext.Provider>
  );
};

export const usePhoenixDocContext = () => useContext(CollapseContext);

export default PhoenixDocProvider;
