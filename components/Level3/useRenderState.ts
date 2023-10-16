import { useContext } from "react";
import { Context as RenderContext } from "./RenderProvider";

const useRenderState = () => {
  const context = useContext(RenderContext);

  if (!context) {
    throw new Error("useRenderState must be used inside a RenderProvider.");
  }

  return context;
};

export default useRenderState;
