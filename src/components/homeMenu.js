import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { subMenu } = Menu;

const homeMenu = ({ menus }) => {
  const renderMenuItems = (menuItems) =>
    menuItems.map((menu) => {
      if (menu.children && menu.children.length > 0) {
        return (
          <subMenu key={menu.id} title={menu.name}>
            {renderMenuItems(menu.children)}
          </subMenu>
        );
      }
      return (
        <Menu.Item key={menu.id}>
          <Link to={menu.path}>{menu.name}</Link>
        </Menu.Item>
      );
    });
  return (
    <Menu mode="vertical" style={{ width: 256 }}>
      {renderMenuItems(menus)}
    </Menu>
  );
};

export default homeMenu;
