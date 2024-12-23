import { Button, Space, Table } from "antd";
import TableMenus from "../../constraints/tableMenus";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Menus = () => {
  const [dataMenu, setDataMenu] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/menus");
        setDataMenu(response.data);
      } catch (err) {
        console.error("Error fetching data users:", err);
      }
    };
    fetchData();
  }, []);
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Space size="small">
        <Button type="primary" danger onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button type="primary" onClick={() => navigate("/menu/formMenu")}>
          Add Menu
        </Button>
      </Space>
      <Table
        columns={TableMenus}
        dataSource={dataMenu.map((data) => ({ ...data, key: data.id }))}
      />
    </Space>
  );
};

export default Menus;
