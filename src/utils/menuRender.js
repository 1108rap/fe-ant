import React from "react";
import * as Icons from "@ant-design/icons";

const menuRender = (menus) => {
  return menus.map((menu) => {
    const iconComponent = Icons[menu.icon] || null;

    if (menu.children && menu.children.length > 0) {
      return {
        key: menu.id,
        label: menu.name,
        // icon: iconComponent ? <iconComponent /> : "",
        children: menuRender(menu.children),
      };
    }
    return {
      key: menu.id,
      label: menu.name,
      // icon: iconComponent ? <iconComponent /> : "",
      path: menu.path,
    };
  });
};

export default menuRender;
