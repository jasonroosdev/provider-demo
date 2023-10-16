import React, { useEffect } from "react";
import useData from "./useData";
import useRenderCount from "../common/hooks/useRenderCount";
import Container from "../common/Container";
import PerformanceStats from "../common/PerformanceStats";
import useRenderState from "./useRenderState";
import styled from "styled-components";

const Component = () => {
  const { data = [], loading, loadCount } = useData();
  const renderCount = useRenderCount();
  const { setIsRendered } = useRenderState();

  useEffect(() => setIsRendered(true), [setIsRendered]);

  if (loading) {
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container>
      <PerformanceStats loadCount={loadCount} renderCount={renderCount} />
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Component;
