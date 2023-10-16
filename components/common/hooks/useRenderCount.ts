import { useRef, useEffect } from "react";

const useRenderCount = () => {
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });

  return renderCount.current;
};

export default useRenderCount;
