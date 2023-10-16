import { useContext } from "react";
import { Context as RenderContext } from "./ComponentStateProvider";

const useComponentState = () => {
  const context = useContext(RenderContext);

  if (!context) {
    throw new Error(
      "useComponentState must be used inside a ComponentStateProvider."
    );
  }

  return context;
};

export default useComponentState;
