import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Layout, Menu, theme ,Breadcrumb,} from 'antd';
import { Image } from 'antd';

import "../css/custom.css"

const { Header, Content, Footer, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

function Home() {
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          collapsible: true,
          collapsed: false,
          background: "white",
        }}
        className="custom-sider"
      >

        <div style={{ height: 160, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",overflow:'hidden' }}>
          <Image
            width={150}
            src="https://t4.ftcdn.net/jpg/02/81/42/31/360_F_281423139_vLqxzVcPwKSIibwYuFjsCNf9TRqv54or.jpg"
          />
          Trans-pharma
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} inlineCollapsed={true}>
          <Menu.Item
            key={"1"}
            icon={<UserOutlined />}
          >
            My Account
          </Menu.Item>
          <Menu.Item
            key={"2"}
            icon={<LoginOutlined />}
          >
            My Orders
          </Menu.Item>
          <Menu.Item
            key={"3"}
            icon={<LogoutOutlined />}
          >
            My Deleveries
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ position: 'fixed', zIndex: 0, width: '100%' }} className="ant-header-custom" />
        <Content style={{ margin: '0 16px', background:"black", height:"100vh" }}>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>

  );
}

export default Home;
