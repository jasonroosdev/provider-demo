import { createContext, useState, useCallback } from "react";

const ComponentStateContext = createContext();

const ComponentStateProvider = ({ children }) => {
  const [componentStates, setComponentStates] = useState({});

  const registerComponent = useCallback(
    (name) => {
      if (!componentStates[name]) {
        setComponentStates((prevState) => ({
          ...prevState,
          [name]: {},
        }));
      }
    },
    [componentStates, setComponentStates]
  );

  const setComponentState = useCallback((name, state) => {
    setComponentStates((prevState) => ({
      ...prevState,
      [name]: state,
    }));
  }, []);

  return (
    <ComponentStateContext.Provider
      value={{ componentStates, registerComponent, setComponentState }}
    >
      {children}
    </ComponentStateContext.Provider>
  );
};

export { ComponentStateProvider as Provider, ComponentStateContext as Context };
