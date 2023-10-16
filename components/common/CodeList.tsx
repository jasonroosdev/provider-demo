import react from "react";
import styled from "styled-components";

const CodeList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  list-style: none;
`;

const StyledCodeList = ({ children }) => (
  <CodeList>
    {react.Children.map(children, (child) => (
      <ListItem>{child}</ListItem>
    ))}
  </CodeList>
);

export default StyledCodeList;
