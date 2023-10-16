import React, { useEffect } from "react";
import useData from "./useData";
import useRenderCount from "../common/hooks/useRenderCount";
import Container from "../common/Container";
import PerformanceStats from "../common/PerformanceStats";
import useComponentState from "./useComponentState";

const Component = ({ name }) => {
  const { data = [], loading, loadCount } = useData();
  const renderCount = useRenderCount();
  const { registerComponent, setComponentState } = useComponentState();

  useEffect(() => registerComponent("SomeComponent"), [registerComponent]);

  useEffect(
    () =>
      setComponentState(name, {
        isRendered: true,
        isLoading: loading,
      }),
    [name, setComponentState, loading]
  );

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
