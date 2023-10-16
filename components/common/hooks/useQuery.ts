import { useEffect, useState } from "react";
import data from "../data.json";

const queryToData = (query) => {
  const operationName = query.match(/query (\w+)/)[1];

  return {
    DataRetrieve: data,
  }[operationName];
};

const useQuery = (queryString) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data: queryToData(queryString), loading };
};

export default useQuery;
