import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, Input, message, Select } from "antd";
import DashLayout from "../../layout/DashLayout";
import FormItem from "antd/es/form/FormItem";

const CreateUsers = () => {
  const [form] = Form.useForm();
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/employeecreateusers"
      );
      setEmployee(response.data);
    } catch (err) {
      console.error(err);
      message.error("Failed to load employees");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/adduser", values);
      message.success("User added succesfully!");
      form.resetFields();
      fetchEmployees();
    } catch (err) {
      console.error(err);
      message.error("Failed to add user. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <DashLayout>
      <Form
        form={form}
        name="formUsers"
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 400, margin: "0 auto" }}
      >
        <Form.Item
          label="Employee"
          name="employee_id"
          rules={[{ required: true, message: "Please select an employee" }]}
        >
          <Select placeholder="Select an employee">
            {employee.map((employee) => (
              <Select.Option key={employee.id} value={employee.id}>
                {employee.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please select a username" }]}
        >
          <Input placeholder="Enter username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please select a password" }]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </DashLayout>
  );
};

export default CreateUsers;
