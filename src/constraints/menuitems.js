import {
  HomeOutlined,
  LoginOutlined,
  ProductOutlined,
  UserOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, path, children) {
  return {
    key,
    icon,
    children,
    label,
    path,
  };
}

const items = [
  getItem("Home", "1", <HomeOutlined />, "/"),
  getItem("Login", "2", <LoginOutlined />, "/login"),
  getItem("Dashboard", "3", <ProductOutlined />, "/Dashboard"),
  getItem("User", "4", <UserOutlined />, "/User"),
  getItem("Role", "5", <SolutionOutlined />, "/Role"),
];

export default items;
