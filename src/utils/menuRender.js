import { Menu } from "antd";

const menuRender = (menus) => {
  return menus.map((menu) => {
    if (menu.children && menu.children.length > 0) {
      return {
        key: menu.id,
        label: menu.name,
        children: menuRender(menu.children),
      };
    }
    return {
      key: menu.id,
      label: menu.name,
      path: menu.path,
    };
  });
};

export default menuRender;
