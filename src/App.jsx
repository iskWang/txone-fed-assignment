import React from "react";

import {
  TonicProvider,
  PortalManager,
  ToastManager,
  Flex,
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
          <Flex align="center" justify="center" minHeight="100vh">
            <Menu />
          </Flex>
        </ToastManager>
      </PortalManager>
    </TonicProvider>
  );
};

export default App;
