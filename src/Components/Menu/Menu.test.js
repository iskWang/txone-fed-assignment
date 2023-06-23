import { render, screen, fireEvent } from "@testing-library/react";
import { TonicProvider } from "@tonic-ui/react";

import Menu from "./Menu";

import "@testing-library/jest-dom";

const defaultBtnList = Menu.defaultProps.btnList;
const mockBtnList = [
  {
    icon: "face-smile-o",
    text: "Josh",
  },
  {
    icon: "face-smile-o",
    text: "is",
  },
  {
    icon: "face-smile-o",
    text: "awesome!",
  },
];

const renderMenuComponent = (props) => {
  return render(
    <TonicProvider>
      <Menu {...props} />
    </TonicProvider>
  );
};

test("Menu renders correctly", async () => {
  const screen = renderMenuComponent();

  expect(screen.container).toBeInTheDocument();

  fireEvent.click(screen.getByTestId("toggle-button"));

  defaultBtnList.forEach((btn) => {
    expect(screen.container).toHaveTextContent(btn.text);
  });
});

test("Menu btnList props should override default props", async () => {
  const screen = renderMenuComponent({
    btnList: mockBtnList,
  });

  fireEvent.click(screen.getByTestId("toggle-button"));

  defaultBtnList.forEach((btn) => {
    expect(screen.container).not.toHaveTextContent(btn.text);
  });

  mockBtnList.forEach((btn) => {
    expect(screen.container).toHaveTextContent(btn.text);
  });
});
