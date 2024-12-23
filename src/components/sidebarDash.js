import axios from "axios";
import React, { useEffect, useState } from "react";
import menuRender from "../utils/menuRender";
import { Menu } from "antd";
import handleMenuClick from "../utils/handleMenu";
import { useNavigate } from "react-router-dom";

const sidebarDash = () => {
  // Init Variable
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Fetch Data Sidebar
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const result = await axios.get("http://127.0.0.1:5000/api/dashMenu");
        setData(result.data);
      } catch (err) {
        console.error("Error fetching menus:", err);
      }
    };
    fetchMenu();
  }, []);
  const items = menuRender(data);

  return (
    <Menu
      mode="inline"
      onClick={handleMenuClick(navigate)}
      style={{ height: "100%", padding: "0 16px" }}
      items={items}
    />
  );
};

export default React.memo(sidebarDash);
