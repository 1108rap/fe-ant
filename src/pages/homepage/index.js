// Import Section
import HomeLayout from "../../layout/HomeLayout";
import React, { useEffect, useState } from "react";
import { Layout, Menu, theme, Avatar, Card, Carousel, Flex } from "antd";
import {
  ShoppingCartOutlined,
  InfoCircleOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import axios, { Axios } from "axios";
import menuRender from "../../helpers/menuRender";
import handleMenuClick from "../../helpers/handleMenu";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/banner";
import ShopList from "../../components/shopList";

const Homepage = () => {
  return (
    // <Layout>
    //   <Header
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       padding: 0,
    //     }}
    //   >
    //     <div className="Logo" />
    //     {/* <Menu
    //       mode="horizontal"
    //       onClick={handleMenuClick(navigate)}
    //       style={{ flex: 1, minWidth: 0 }}
    //     >
    //       {menuRender(navItems)}
    //     </Menu> */}
    //     <Menu
    //       mode="horizontal"
    //       onClick={handleMenuClick(navigate)}
    //       style={{ flex: 1, minWidth: 0 }}
    //       items={items}
    //     />
    //     {/* {menuRender(navItems)}
    //     </Menu> */}
    //   </Header>
    //   <Content
    //     style={{
    //       padding: "16px 16px",
    //     }}
    //   >
    //     {/* <div style={{ height: "332px" }}>
    //       <Carousel autoplay dotPosition={dotPosition}>
    //         <div>
    //           <h3 style={contentStyle}>1</h3>
    //         </div>
    //         <div>
    //           <h3 style={contentStyle}>2</h3>
    //         </div>
    //         <div>
    //           <h3 style={contentStyle}>3</h3>
    //         </div>
    //       </Carousel>
    //     </div> */}
    //     <Banner />
    //     {/* <Layout
    //       style={{
    //         padding: "24px 0",
    //         margin: "16px 0",
    //         background: colorBgContainer,
    //         borderRadius: borderRadiusLG,
    //       }}
    //     >
    //       <Sider style={{ background: colorBgContainer }} width={200}>
    //         <Menu
    //           mode="inline"
    //           onClick={handleMenuClick(navigate)}
    //           style={{ height: "100%", padding: "0 16px" }}
    //         >
    //           {menuRender(menuItems)}
    //         </Menu>
    //       </Sider>
    //       <Content style={{ background: colorBgContainer, padding: 16 }}>
    //         <Flex horizontal gap="middle" wrap="wrap">
    //           <Card
    //             style={{ width: 300 }}
    //             cover={""}
    //             actions={[
    //               <ShoppingCartOutlined key="Buy" onClick={""} />,
    //               <InfoCircleOutlined key="Info" onClick={() => openMo} />,
    //               <EllipsisOutlined key="More" onClick={""} />,
    //             ]}
    //             hoverable={true}
    //           >
    //             <Meta
    //               avatar={""}
    //               title="Baju Lengan Panjang"
    //               description="baju dengan jaitan bunga dan lengan panjang"
    //             />
    //           </Card>
    //         </Flex>
    //       </Content>
    //     </Layout> */}
    //     <ShopList />
    //   </Content>
    //   <Footer style={{ textAlign: "right", padding: "0 24px 16px 24px" }}>
    //     Nonaetal ©{new Date().getFullYear()} Created by Antareza
    //   </Footer>
    // </Layout>
    <HomeLayout>
      <Banner />
      <ShopList />
    </HomeLayout>
  );
};

export default Homepage;
