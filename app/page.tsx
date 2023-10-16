"use client"
import React from "react";
import styled from "styled-components";
import "./global.css";
import TabList, { Tab } from "../components/common/TabList";
import Level1 from "../components/Level1";
import Level2 from "../components/Level2";
import Level3 from "../components/Level3";
import Level4 from "../components/Level4";
import Level5 from "../components/Level5";

const Container = styled.div`
  padding: 0 5rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 2rem;
  text-align: center;
`;

const Description = styled.h2`
  text-align: center;
  line-height: 1.5;
  font-size: 1rem;
`;

const Attribution = styled.h3`
  text-align: center;
  line-height: 0.8;
  font-size: 1rem;
`;

const Header = styled.header`
  padding: 1rem 0;
  white-space: nowrap;
  text-align: center;
`;

const Home = () => (
  <Container>
    <Header>
      <Title>React Context API</Title>
      <Description>A Progressive Demonstration of Advanced Usage</Description>
      <Attribution>By Jason Roos</Attribution>
    </Header>
    <TabList>
      <Tab title="Level 1">
        <Level1 />
      </Tab>
      <Tab title="Level 2">
        <Level2 />
      </Tab>
      <Tab title="Level 3">
        <Level3 />
      </Tab>
      <Tab title="Level 4">
        <Level4 />
      </Tab>
      <Tab title="Level 5">
        <Level5 />
      </Tab>
    </TabList>
  </Container>
);

export default Home;
