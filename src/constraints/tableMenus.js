import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Space, Tooltip } from "antd";
import { format } from "date-fns";

const formatDate = (timestamp) => {
  return format(new Date(timestamp), "dd-MM-yyyy HH:mm");
};

const TableMenus = (softDeleteMenu) => [
  {
    title: "No",
    key: "index",
    render: (_, __, index) => index + 1,
  },

  {
    title: "Menu",
    dataIndex: "name",
    key: "menu",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (type) => {
      const typeMapping = {
        T1: "Homepage",
        T2: "Shoplist",
        T3: "Dashboard",
      };
      return typeMapping[type] || type;
    },
  },
  {
    title: "Status",
    dataIndex: "is_active",
    key: "status",
    render: (stat) => (stat === true ? "Active" : "Inactive"),
  },
  {
    title: "Created at",
    dataIndex: "created_at",
    key: "created",
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
            title="Are you sure to delete this Menu ?"
            onConfirm={() => softDeleteMenu(record.id)}
            okText="Yes"
            cancelText="Cancel"
          >
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              size="small"
            />
          </Popconfirm>
        </Tooltip>
      </Space>
    ),
  },
];

export default TableMenus;
