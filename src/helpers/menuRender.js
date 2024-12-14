import React from "react";
import { Menu } from "antd";

const { SubMenu } = Menu;

const menuRender = (menus) => {
  return menus.map((menu) => {
    if (menu.children && menu.children.length > 0) {
      // return (
      //   <SubMenu key={menu.id} title={menu.name} path={menu.path}>
      //     {menuRender(menu.children)}
      //   </SubMenu>
      // );
      return {
        key: menu.id,
        label: menu.name,
        children: menuRender(menu.children),
      };
    }
    // return (
    //   <Menu.Item key={menu.id} path={menu.path}>
    //     {menu.name}
    //   </Menu.Item>
    // );
    return {
      key: menu.id,
      label: menu.name,
      path: menu.path,
    };
  });
};

export default menuRender;
