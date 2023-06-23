// Base sample:
// https://trendmicro-frontend.github.io/tonic-ui/react/latest/components/menu#toggling-menus
import React from "react";

import ReactFocusLock from "react-focus-lock";

import {
  Menu as BaseMenu,
  MenuList,
  MenuItem,
  MenuToggle,
  Flex,
  Box,
  Icon,
  Text,
  useColorStyle,
  useColorMode,
} from "@tonic-ui/react";

const Avatar = (props) => (
  <Flex
    p="1x"
    borderRadius="50%"
    alignItems="center"
    justifyContent="center"
    fontSize="xs"
    lineHeight="1"
    {...props}
  />
);

const Menu = (props) => {
  const [colorMode] = useColorMode();
  const [colorStyle] = useColorStyle({ colorMode });

  const wrapStyle = {
    width: 200,
    padding: 4,
    background: colorStyle.background.primary,
  };

  return (
    <Box {...wrapStyle}>
      <BaseMenu>
        <MenuToggle data-testid="toggle-button">
          <Avatar
            backgroundColor={colorStyle.background.secondary}
            color={colorStyle.color.secondary}
            _hover={{
              color: colorStyle.color.primary,
            }}
          >
            <Icon icon="user-team" size="5x" />
          </Avatar>
        </MenuToggle>
        <ReactFocusLock persistentFocus>
          <MenuList width="max-content">
            {props.btnList.map((item) => {
              return (
                <MenuItem key={item.text}>
                  <Flex flex="none" mr="3x">
                    <Icon icon={item.icon} />
                  </Flex>

                  <Flex flex="auto">
                    <Text>{item.text}</Text>
                  </Flex>
                </MenuItem>
              );
            })}
          </MenuList>
        </ReactFocusLock>
      </BaseMenu>
    </Box>
  );
};

Menu.defaultProps = {
  btnList: [
    {
      icon: "settings",
      text: "Settings",
    },
    {
      icon: "user-team",
      text: "Accounts",
    },
    {
      icon: "lock",
      text: "Privacy control",
    },
  ],
};

export default Menu;
