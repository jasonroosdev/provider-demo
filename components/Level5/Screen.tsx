import React from "react";
import { Provider as ComponentStateProvider } from "./ComponentStateProvider";
import Container from "./Container";

const Screen = () => (
  <ComponentStateProvider>
    <Container />
  </ComponentStateProvider>
);

export default Screen;
