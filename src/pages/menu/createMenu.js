import { Button, Form, Input, message, Select, Space, Checkbox } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import handleChecked from "../../utils/handlechecked";

const createMenu = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [parent, setParent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchParent = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/api/parentdata"
        );
        setParent(response.data);
      } catch (err) {
        console.error(err);
        message.error("Failed to load parent");
      }
    };
    fetchParent();
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    const payload = { ...values, isActive: isActive };
    try {
      await axios.post("http://localhost:5000/api/createmenu", payload);
      message.success("Menu added succesfully!");
      form.resetFields();
    } catch (err) {
      console.error(err);
      message.error("Failed to add menu. please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      form={form}
      name="formMenu"
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 280, margin: "0 auto" }}
    >
      <Form.Item
        label="Menu"
        name="name"
        rules={[{ required: true, message: "Please enter menu name" }]}
      >
        <Input placeholder="Enter Menu Name" />
      </Form.Item>
      <Form.Item
        label="Type Menu"
        name="type"
        rules={[{ required: true, message: "Please select an type menu" }]}
      >
        <Select
          placeholder="Ex. Dashboard Homepage"
          options={[
            { value: "T1", label: "Homepage Menu" },
            { value: "T2", label: "Shopping Menu" },
            { value: "T3", label: "Dashboard Menu" },
          ]}
        />
      </Form.Item>
      <Form.Item
        label="Path"
        name="path"
        rules={[{ required: true, message: "Please enter path" }]}
      >
        <Input placeholder="Ex. /Home" />
      </Form.Item>
      <Form.Item label="Icon" name="icon">
        <Input placeholder="Ex. UserOutline" />
      </Form.Item>
      <Form.Item>
        <Checkbox onChange={handleChecked(setIsChecked)}>Child Menu</Checkbox>
      </Form.Item>
      {isChecked && (
        <Form.Item name="parentId" label="Parent">
          <Select placeholder="Ex. Settings">
            {parent.map((parent) => (
              <Select.Option key={parent.id} value={parent.id}>
                {parent.name} - {parent.grouptype}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      )}
      <Form.Item>
        <Checkbox onChange={handleChecked(setIsActive)}>Active</Checkbox>
      </Form.Item>
      <Form.Item style={{ display: "flex", justifyContent: "center" }}>
        <Space size="small">
          <Button type="primary" danger onClick={() => navigate(-1)}>
            Discard
          </Button>
          <Button type="primary" htmlType="submit" loading={loading}>
            Save
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default createMenu;
