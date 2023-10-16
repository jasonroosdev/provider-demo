import { createContext, useState, useMemo } from "react";

const ComponentStateContext = createContext();

const ComponentStateProvider = ({ children }) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contextValue = useMemo(
    () => ({
      isRendered,
      setIsRendered,
      isLoading,
      setIsLoading,
    }),
    [isRendered, isLoading]
  );

  return (
    <ComponentStateContext.Provider value={contextValue}>
      {children}
    </ComponentStateContext.Provider>
  );
};

export { ComponentStateProvider as Provider, ComponentStateContext as Context };
