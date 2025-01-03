import { EyeOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import { format } from "date-fns";

const formatDate = (timestamp) => {
  return format(new Date(timestamp), "dd-MM-yyyy HH:mm");
};

const TableEmployees = [
  {
    title: "No",
    key: "index",
    render: (_, __, index) => index + 1,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Profession",
    dataIndex: "profession",
    key: "profession",
    render: (text) => (
      <span style={{ textTransform: "capitalize" }}>{text}</span>
    ),
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="small">
        <Tooltip title="Detail">
          <Button type="primary" icon={<EyeOutlined />} size="small" />
        </Tooltip>
      </Space>
    ),
  },
];

export default TableEmployees;
