// Import Library
import React from "react";
import { Button, Layout, Menu, theme, Space, Avatar } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import axios from "axios";
import SidebarDash from "../components/sidebarDash";

// initialization Library
const { Header, Content, Footer, Sider } = Layout;

// Main Program
const DashLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <SidebarDash />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            display: "flex",
            background: colorBgContainer,
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />

          <Space size="large">
            <Avatar
              // src=""
              alt=""
              icon={<UserOutlined />}
              style={{ cursor: "pointer", margin: 16 }}
            />
          </Space>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
            backgroundColor: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default React.memo(DashLayout);
