import { message } from "antd";

const handleMenu = (navigate) => (e) => {
  const path = e.item.props["path"];
  if (path) {
    navigate(path);
  } else {
    console.error("Path not found");
    message.error("Load Page Failed. Path not found");
  }
};

const handleRenderMenu = (menus) => {
  return menus.map((menu) => {
    //   const iconComponent = Icons[menu.icon] || null;

    if (menu.children && menu.children.length > 0) {
      return {
        key: menu.id,
        label: menu.name,
        // icon: iconComponent ? <iconComponent /> : "",
        children: handleRenderMenu(menu.children),
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

const handleChecked = (setState) => (e) => {
  setState(e.target.checked);
};

module.exports = { handleMenu, handleRenderMenu, handleChecked };
