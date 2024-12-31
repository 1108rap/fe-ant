import { Button, message, Space, Table } from "antd";
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

  useEffect(() => {
    fetchData();
  }, []);

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

  return (
    // <DashLayout>
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Space size="small">
        <Button type="primary" danger onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button type="primary" onClick={() => navigate("/user/formuser")}>
          Add User
        </Button>
      </Space>
      <Table
        columns={TableUsers(softDeleteUser)}
        dataSource={dataUser.map((data) => ({ ...data, key: data.id }))}
      />
    </Space>
    // </DashLayout>
  );
};

export default User;
