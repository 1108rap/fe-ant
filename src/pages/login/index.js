import React, { useState } from "react";
import { Button, Card, Form, Input, theme } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const Login = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
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
            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
