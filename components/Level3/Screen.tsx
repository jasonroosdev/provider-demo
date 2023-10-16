import React from "react";
import { Provider as RenderProvider } from "./RenderProvider";
import Container from "./Container";

const Screen = () => (
  <RenderProvider>
    <Container />
  </RenderProvider>
);

export default Screen;
