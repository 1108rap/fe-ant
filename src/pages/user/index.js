import { Button, Table } from "antd";
import DashLayout from "../../layout/DashLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import TableUsers from "../../constraints/tableUsers";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [dataUser, setDataUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/users");
        setDataUser(response.data);
      } catch (err) {
        console.error("Error fetching data users:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <DashLayout>
      <Button type="primary" danger onClick={() => navigate(-1)}>
        Back
      </Button>
      <Button type="primary" onClick={() => navigate("/user/formuser")}>
        Add User
      </Button>
      <Table
        columns={TableUsers}
        dataSource={dataUser.map((data) => ({ ...data, key: data.id }))}
      />
    </DashLayout>
  );
};

export default User;
