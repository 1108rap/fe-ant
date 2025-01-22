import { Button, Dropdown, Flex, message, Space, Table } from "antd";
import DashLayout from "../../layout/DashLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import TableUsers from "../../constraints/tableUsers";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [dataUser, setDataUser] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/users");
      setDataUser(response.data);
    } catch (err) {
      console.error("Error fetching data users:", err);
    }
  };

  const softDeleteUser = async (id) => {
    try {
      await axios.put(`http://127.0.0.1:5000/api/users/${id}/delete`);
      message.success("User deleted successfully");
      fetchData();
    } catch (err) {
      console.error(err);
      message.error("Failed to delete user");
    }
  };

  const handleDownloadTemplate = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/generatetemplate"
      );

      if (!response.ok) {
        throw new Error("failed download");
      }

      window.location.href = "/user";
      message.success("Template Successfully Downloaded!");
    } catch (err) {
      console.error("Failed download template users:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const items = [{ label: "Template" }, { label: "Data" }];

  return (
    // <DashLayout>
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Flex justify="space-between">
        <Space size="small">
          <Button type="primary" danger onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button type="primary" onClick={() => navigate("/user/formuser")}>
            Add User
          </Button>
        </Space>
        <Button type="primary" onClick={handleDownloadTemplate}>
          Download Template
        </Button>
      </Flex>
      <Table
        columns={TableUsers(softDeleteUser)}
        dataSource={dataUser.map((data) => ({ ...data, key: data.id }))}
      />
    </Space>
    // </DashLayout>
  );
};

export default User;
