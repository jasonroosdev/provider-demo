import { useContext } from "react";
import { Context as DataContext } from "./DataProvider";

function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useData must be used inside a DataProvider.");
  }

  return context;
}

export default useData;
