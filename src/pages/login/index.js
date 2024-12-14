import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Flex,
  Form,
  Input,
  Layout,
  Space,
  theme,
} from "antd";
import { BellOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import HomeLayout from "../../layout/HomeLayout";
const { Header, Content, Footer } = Layout;

const Login = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    // <Layout>
    //   <Header
    //     style={{
    //       background: colorBgContainer,
    //       display: "flex",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //       padding: "0 16px",
    //       boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    //     }}
    //   >
    //     {/* Left Section */}
    //     <div style={{ fontSize: "18px", fontWeight: "bold" }}>
    //       <img src="" alt="" style={{ height: "32px", marginRight: "8px" }} />
    //       Ant Design 5.0
    //     </div>

    //     {/* Right Section */}
    //     <Space size="large">
    //       <Badge count="5">
    //         <BellOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
    //       </Badge>
    //       <Avatar src="" alt="" style={{ cursor: "pointer" }} />
    //     </Space>
    //   </Header>
    //   <Layout>
    //     <Content style={{ minHeight: "100vh" }}>
    <HomeLayout>
      <Card bordered={false} style={{ width: 300, margin: 16 }}>
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              placeholder="Password"
              type="password"
            />
          </Form.Item>
          {/* <Form.Item>
                <Flex justify="space-between" align="center">
                  <Form.Item name="remember" noStyle>
                    <Checkbox>Remember Me</Checkbox>
                  </Form.Item>
                  <a href="">Forget password</a>
                </Flex>
              </Form.Item> */}

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </HomeLayout>
    //     </Content>
    //   </Layout>
    // </Layout>
  );
};

export default Login;
