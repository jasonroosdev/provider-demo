import React from "react";
import {
  OuterContainer,
  InnerContainer,
  ComponentState,
} from "./styled-components";
import useComponentState from "../useComponentState";
import { Provider as DataProvider } from "../DataProvider";
import Component from "../Component";

const StyledComponentState = ({ name, componentStates }) => (
  <>
    {componentStates[name]?.isRendered && (
      <ComponentState>{name} has rendered!</ComponentState>
    )}
    {!componentStates[name]?.isLoading && (
      <ComponentState>{name} has loaded!</ComponentState>
    )}
  </>
);

const Container = () => {
  const { componentStates } = useComponentState();

  return (
    <OuterContainer>
      <InnerContainer>
        <DataProvider>
          <Component name="Component A" />
          <StyledComponentState
            name="Component A"
            componentStates={componentStates}
          />
          <Component name="Component B" />
          <StyledComponentState
            name="Component B"
            componentStates={componentStates}
          />
        </DataProvider>
      </InnerContainer>
    </OuterContainer>
  );
};

export default Container;
