import React from "react";
import Code from "../common/Code";
import CodeList from "../common/CodeList";
import DataProviderRaw from "!!raw-loader!./DataProvider.tsx";
import useDataRaw from "!!raw-loader!./useData.ts";
import ComponentRaw from "!!raw-loader!./Component.tsx";
import ScreenRaw from "!!raw-loader!./Screen.tsx";
import TabList, { Tab } from "../common/TabList";
import Screen from "./Screen";

const Level1 = () => (
  <CodeList>
    <TabList>
      <Tab title="Output">
        <Screen />
      </Tab>
      <Tab title="<Screen />">
        <Code>{ScreenRaw}</Code>
      </Tab>
      <Tab title="<Component />">
        <Code>{ComponentRaw}</Code>
      </Tab>
      <Tab title="useData()">
        <Code>{useDataRaw}</Code>
      </Tab>
      <Tab title="<DataProvider />">
        <Code>{DataProviderRaw}</Code>
      </Tab>
    </TabList>
  </CodeList>
);

export default Level1;
