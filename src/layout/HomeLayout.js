//Import Library
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import handleMenuClick from "../utils/handleMenu";
import menuRender from "../utils/menuRender";
import { Menu, Layout, Flex, Space, Avatar, theme } from "antd";
import { UserOutlined } from "@ant-design/icons";

//initialization Library
const { Header, Content, Footer, Sider } = Layout;

//Main Program
const HomeLayout = ({ children }) => {
  const [navItems, setNavItems] = useState([]);
  const navigate = useNavigate();
  const items = menuRender(navItems);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          padding: 0,
          background: colorBgContainer,
          justifyContent: "space-between",
        }}
      >
        <Menu
          mode="horizontal"
          onClick={handleMenuClick(navigate)}
          style={{ flex: 1, minWidth: 0 }}
          items={items}
        />

        <Space size="large">
          <Avatar
            alt=""
            icon={<UserOutlined />}
            style={{ cursor: "pointer", margin: 16 }}
            onClick={() => navigate("/login")}
          />
        </Space>
      </Header>
      <Content style={{ padding: "16px 16px" }}>{children}</Content>
      <Footer style={{ textAlign: "right", padding: "0 24px 16px 24px" }}>
        Nonaetal ©{new Date().getFullYear()} Created by Antareza
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
