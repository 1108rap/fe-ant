import { Form, Input } from "antd";

const createMenu = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="formMenu"
      layout="vertical"
      onFinish={""}
      style={{ maxWidth: 280, margin: "0 auto" }}
    >
      <Form.Item
        label="Menu"
        name="menu"
        rules={[{ required: true, message: "Please enter menu name" }]}
      >
        <Input placeholder="Enter Menu Name" />
      </Form.Item>
    </Form>
  );
};
export default createMenu;
