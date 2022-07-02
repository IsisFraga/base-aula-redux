import React, {
  useState,
  useContext,
  createContext,
  FunctionComponent,
} from "react";

interface IUiContext {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

type Props = {
  children: JSX.Element;
};

export const UiContext = createContext<IUiContext | null>(null);

export const UiProvider: FunctionComponent<Props> = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <UiContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </UiContext.Provider>
  );
};

export const useUi = () => {
  const contextHook = useContext(UiContext);

  if (!contextHook) {
    throw new Error("useUi deve ser usado de DENTRO do provider do contexto!");
  } else {
    return contextHook;
  }
};
