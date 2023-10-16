import { createContext, useMemo } from "react";
import useQuery from "../common/hooks/useQuery";
import useLoadCount from "../common/hooks/useLoadCount";

const DataContext = createContext();

function DataProvider({ children }) {
  const { data, loading } = useQuery(`
    query DataRetrieve {
      data
    }
  `);

  const loadCount = useLoadCount(loading);

  const memoizedData = useMemo(
    () => ({
      data,
      loading,
      loadCount,
    }),
    [data, loading, loadCount]
  );

  return (
    <DataContext.Provider value={memoizedData}>{children}</DataContext.Provider>
  );
}

export { DataProvider as Provider, DataContext as Context };
