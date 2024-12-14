//Import Library
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import handleMenuClick from "../helpers/handleMenu";
import menuRender from "../helpers/menuRender";
import { Menu, Layout, Flex } from "antd";
import Banner from "../components/banner";

//initialization Library
const { Header, Content, Footer, Sider } = Layout;

//Main Program
const HomeLayout = ({ children }) => {
  const [navItems, setNavItems] = useState([]);
  const navigate = useNavigate();
  const items = menuRender(navItems);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/navbar");
        setNavItems(response.data);
      } catch (err) {
        console.error("Error fetching menus:", err);
      }
    };
    fetchMenu();
  }, []);

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center", padding: 0 }}>
        <Menu
          mode="horizontal"
          onClick={handleMenuClick(navigate)}
          style={{ flex: 1, minWidth: 0 }}
          items={items}
        />
      </Header>
      <Content style={{ padding: "16px 16px" }}>{children}</Content>
      <Footer style={{ textAlign: "right", padding: "0 24px 16px 24px" }}>
        Nonaetal ©{new Date().getFullYear()} Created by Antareza
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
