import React from "react";
import styled from "styled-components";

const Table = styled.table`
  padding: 10px;
  font-size: 0.8rem;
  font-family: sans-serif;
`;

const Heading = styled.td`
  padding-right: 10px;
`;

const Body = styled.tbody`
  text-align: right;
`;

const PerformanceStats = ({ loadCount, renderCount }) => (
  <Table>
    <Body>
      <tr>
        <Heading>Load Count:</Heading>
        <td>{loadCount}</td>
      </tr>
      <tr>
        <Heading>Render Count:</Heading>
        <td>{renderCount}</td>
      </tr>
    </Body>
  </Table>
);

export default PerformanceStats;
