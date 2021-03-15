import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { BackTop, Layout, Menu } from "antd";
import {
  HomeOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  UnorderedListOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Routes from "../routes/routes";

const { Header, Sider, Content } = Layout;

function HeaderMenu() {
  const [menuTrigger, setMenuTrigger] = useState(<MenuOutlined />);
  return (
    <>
      <Router>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
              setMenuTrigger(collapsed ? <MenuOutlined /> : <CloseOutlined />);
            }}
            trigger={menuTrigger}
          >
            <div className="logo" />
            <Menu theme="light" mode="inline" defaultSelectedKeys={["0"]}>
              <Menu.Item key="0" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="1" icon={<PlusCircleOutlined />}>
                <Link to="/add_appointment">Add Appointments</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<SearchOutlined />}>
                <Link to="/search_appointment">Search Appointments</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UnorderedListOutlined />}>
                <Link to="/list_appointment">List Appointments</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              Pet Appointment
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Routes />
            </Content>
          </Layout>
        </Layout>
      </Router>
      <BackTop />
    </>
  );
}

export default HeaderMenu;
