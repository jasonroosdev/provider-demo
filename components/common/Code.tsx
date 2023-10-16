import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styled from "styled-components";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const StyledCode = styled.div`
  font-size: 0.8rem;
`;

const Code = ({ children }) => (
  <StyledCode>
    <SyntaxHighlighter language="javascript" style={tomorrow}>
      {children}
    </SyntaxHighlighter>
  </StyledCode>
);

export default Code;
