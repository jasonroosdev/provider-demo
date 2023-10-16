import { useContext } from "react";
import { Context as ComponentStateContext } from "./ComponentStateProvider";

const useComponentState = () => {
  const context = useContext(ComponentStateContext);

  if (!context) {
    throw new Error(
      "useComponentState must be used inside a ComponentStateProvider."
    );
  }

  return context;
};

export default useComponentState;
