import { Layout, Menu, theme, Flex, Card } from "antd";
import {
  ShoppingCartOutlined,
  InfoCircleOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import menuRender from "../utils/menuRender";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import handleMenuClick from "../utils/handleMenu";
import axios from "axios";

const { Content, Sider } = Layout;
const { Meta } = Card;

const ShopList = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();
  const items = menuRender(menuItems);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        // const response = await axios.get("http://127.0.0.1:5000/api/menu");
        const response = await axios.all([
          axios.get("http://127.0.0.1:5000/api/menusl"),
          axios.get("https://fakestoreapi.com/products/"),
        ]);
        setMenuItems(response[0].data);
        setProductData(response[1].data);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };
    fetchMenu();
  }, []);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        padding: "24px 0",
        margin: "16px 0",
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <Sider style={{ background: colorBgContainer }} width={200}>
        {/* <Menu
          mode="inline"
          onClick={handleMenuClick(navigate)}
          style={{ height: "100%", padding: "0 16px" }}
        >
          {menuRender(menuItems)}
        </Menu> */}
        <Menu
          mode="inline"
          onClick={handleMenuClick(navigate)}
          style={{ height: "100%", padding: "0 16px" }}
          items={items}
        />
        {/* {menuRender(menuItems)}
        </Menu> */}
      </Sider>
      <Content style={{ background: colorBgContainer, padding: 16 }}>
        {children}
        <Flex mode="horizontal" gap="middle" wrap="wrap">
          {productData.map((product) => (
            <Card
              key={product.id}
              style={{ width: 300 }}
              cover={
                <img
                  style={{
                    width: 300,
                    aspectRatio: 4 / 3,
                    objectFit: "contain",
                  }}
                  src={product.image}
                />
              }
              actions={[
                <ShoppingCartOutlined key="Buy" />,
                <InfoCircleOutlined key="Info" />,
                <EllipsisOutlined key="More" />,
              ]}
              hoverable={true}
            >
              <Meta title={product.title} description={product.description} />
            </Card>
          ))}
        </Flex>
      </Content>
    </Layout>
  );
};
export default ShopList;
