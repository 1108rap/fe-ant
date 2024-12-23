import { Button, Space, Table } from "antd";
import DashLayout from "../../layout/DashLayout";
import { useNavigate } from "react-router-dom";
import TableEmployees from "../../constraints/tableEmployees";
import { useEffect, useState } from "react";
import axios from "axios";

const Employee = () => {
  const [dataEmployee, setDataEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://127.0.0.1:5000/api/employees");
        setDataEmployee(result.data);
      } catch (err) {}
    };
    fetchData();
  }, []);
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Space size="small">
        <Button type="primary" danger onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button type="primary">Add Employee</Button>
      </Space>
      <Table
        columns={TableEmployees}
        dataSource={dataEmployee.map((data) => ({ ...data, key: data.id }))}
      />
    </Space>
  );
};

export default Employee;
