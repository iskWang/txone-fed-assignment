import React from "react";

import {
  TonicProvider,
  PortalManager,
  ToastManager,
  Flex,
  Text,
} from "@tonic-ui/react";

import { Menu } from "./Components";

const App = () => {
  return (
    <TonicProvider
      colorMode={{
        defaultValue: "dark",
      }}
      useCSSBaseline
    >
      <PortalManager>
        <ToastManager>
          <Flex
            direction="column"
            align="center"
            justify="center"
            minHeight="100vh"
          >
            <Text my={5}>Hello world!</Text>
            <Menu />
          </Flex>
        </ToastManager>
      </PortalManager>
    </TonicProvider>
  );
};

export default App;
