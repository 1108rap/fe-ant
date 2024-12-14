// Import Library
import { Button, Layout, Menu, theme, Space, Avatar } from "antd";
import { useEffect, useState } from "react";
import menuRender from "../helpers/menuRender";
import handleMenuClick from "../helpers/handleMenu";
import { useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import axios from "axios";

// initialization Library
const { Header, Content, Footer, Sider } = Layout;

// Main Program
const DashLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [dashItems, setDashItems] = useState([]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/dashMenu");
        setDashItems(response.data);
      } catch (err) {
        console.error("Error fetching menus:", err);
      }
    };
    fetchMenu();
  }, []);
  const items = menuRender(dashItems);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          mode="inline"
          onClick={handleMenuClick(navigate)}
          style={{ height: "100%", padding: "0 16px" }}
          items={items}
        />
        {/* {menuRender(dashItems)}
        </Menu> */}
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

export default DashLayout;
