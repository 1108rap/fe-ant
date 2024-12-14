import { Button, Table } from "antd";
import DashLayout from "../../layout/DashLayout";
import { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [dataUser, setDataUser] = useState([]);
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
      <Button type="primary">Add User</Button>
    </DashLayout>
  );
};

export default User;
