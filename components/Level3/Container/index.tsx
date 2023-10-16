import React from "react";
import {
  OuterContainer,
  InnerContainer,
  RenderStatus,
} from "./styled-components";
import useRenderState from "../useRenderState";
import { Provider as DataProvider } from "../DataProvider";
import Component from "../Component";

const Container = () => {
  const { isRendered } = useRenderState();

  return (
    <OuterContainer>
      <InnerContainer>
        <DataProvider>
          <Component />
        </DataProvider>
      </InnerContainer>
      {isRendered && <RenderStatus>Component has rendered!</RenderStatus>}
    </OuterContainer>
  );
};

export default Container;
