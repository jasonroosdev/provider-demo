import React from "react";
import {
  OuterContainer,
  InnerContainer,
  ComponentState,
} from "./styled-components";
import useComponentState from "../useComponentState";
import { Provider as DataProvider } from "../DataProvider";
import Component from "../Component";

const Container = () => {
  const { isRendered, isLoading } = useComponentState();

  return (
    <OuterContainer>
      <InnerContainer>
        <DataProvider>
          <Component />
        </DataProvider>
      </InnerContainer>
      {isRendered && <ComponentState>Component has rendered!</ComponentState>}
      {!isLoading && <ComponentState>Component has loaded!</ComponentState>}
    </OuterContainer>
  );
};

export default Container;
