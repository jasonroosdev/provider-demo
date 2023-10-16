import react, { useState } from "react";
import styled from "styled-components";

const TabList = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabContainer = styled.div`
  display: flex;
`;

const Tab = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: #eee;
  cursor: pointer;
  flex: 1;
  white-space: nowrap;

  &:hover {
    background: #ddd;
  }

  ${({ isActive }) =>
    isActive &&
    `
      background: #ccc;
    `}
`;

const TabContent = styled.div``;

const StyledTabList = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const childrenArray = react.Children.toArray(children);
  const activeChild = childrenArray[activeTab];

  return (
    <TabList>
      <TabContainer>
        {childrenArray.map((child, index) => (
          <Tab
            key={index}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {child.props.title}
          </Tab>
        ))}
      </TabContainer>
      <TabContent>{activeChild}</TabContent>
    </TabList>
  );
};

const StyledTab = ({ children }) => children;

export { StyledTab as Tab };
export { StyledTabList as default };
