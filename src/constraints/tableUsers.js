import { format } from "date-fns";
import { Space, Button, Tooltip } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";

const formatDate = (timestamp) => {
  return format(new Date(timestamp), "dd-MM-yyyy HH:mm");
};

const TableUsers = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Active",
    dataIndex: "active_at",
    key: "active",
    render: (text) => formatDate(text),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="small">
        <Tooltip title="Detail">
          <Button type="primary" icon={<EyeOutlined />} size="small" />
        </Tooltip>
        <Tooltip title="Delete">
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            size="small"
          />
        </Tooltip>
      </Space>
    ),
  },
];
export default TableUsers;
