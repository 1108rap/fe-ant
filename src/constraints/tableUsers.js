import { format } from "date-fns";
import { Space, Button, Tooltip, Popconfirm } from "antd";
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
    render: (text) => (text ? formatDate(text) : "-"),
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
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={""}
            okText="Yes"
            cancelText="Cancel"
          >
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              size="small"
              alt="Delete"
            />
          </Popconfirm>
        </Tooltip>
      </Space>
    ),
  },
];
export default TableUsers;
