import React from "react";
import styled from "styled-components";
import useData from "./useData";
import useRenderCount from "../common/hooks/useRenderCount";
import PerformanceStats from "../common/PerformanceStats";
import Container from "../common/Container";

function Component() {
  const { data = [], loading, loadCount } = useData();
  const renderCount = useRenderCount();

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
}

export default Component;
