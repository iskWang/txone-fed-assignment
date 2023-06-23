import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { TonicProvider, PortalManager, ToastManager } from "@tonic-ui/react";

import { Menu, DndContainer } from "./Components";

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
          <DndProvider backend={HTML5Backend}>
            <DndContainer>
              <Menu />
            </DndContainer>
          </DndProvider>
        </ToastManager>
      </PortalManager>
    </TonicProvider>
  );
};

export default App;
