import React from "react";
import { Provider as DataProvider } from "./DataProvider";
import Component from "./Component";

const Screen = () => (
  <DataProvider>
    <Component />
    <Component />
  </DataProvider>
);

export default Screen;
