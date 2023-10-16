import { useState, useEffect } from "react";

function useLoadCount(loading) {
  const [loadCount, setLoadCount] = useState(0);

  useEffect(() => {
    if (loading) {
      setLoadCount(prevCount => prevCount + 1);
    }
  }, [loading]);

  return loadCount;
}

export default useLoadCount;
