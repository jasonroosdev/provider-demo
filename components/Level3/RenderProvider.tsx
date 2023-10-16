import { createContext, useState } from "react";

const RenderContext = createContext();

const RenderProvider = ({ children }) => {
  const [isRendered, setIsRendered] = useState(false);

  return (
    <RenderContext.Provider value={{ isRendered, setIsRendered }}>
      {children}
    </RenderContext.Provider>
  );
};

export { RenderProvider as Provider, RenderContext as Context };
