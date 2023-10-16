import { useMemo } from "react";
import useQuery from "../common/hooks/useQuery";
import useLoadCount from "../common/hooks/useLoadCount";

const useData = () => {
  const { data, loading } = useQuery(`
    query DataRetrieve {
      data
    }
  `);

  const loadCount = useLoadCount(loading);

  return {
    data,
    loading,
    loadCount,
  };
};

export default useData;
