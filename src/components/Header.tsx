import React, { useReducer } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { BackTop, Layout, Menu } from 'antd';
import {
  HomeOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import Routes from "../routes/routes";

const { Header, Sider, Content } = Layout;

function reducer(isActiveMenu: boolean) {
  return !isActiveMenu;
}

function HeaderMenu() {
  const [isActiveMenu, toggleMenu] = useReducer(reducer, false);
  
  return (
    <>
     <Router>
        <Layout>
        <Sider trigger={null} collapsible collapsed={isActiveMenu}>
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['0']}>
          <Menu.Item key="0" icon={<HomeOutlined />}>
            <Link
              to="/"
            >
              Home
            </Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<PlusCircleOutlined />}>
            <Link
              to="/add_appointment"
            >
              Add Appointments
            </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<SearchOutlined />}>
            <Link
              to="/search_appointment"
            >
              Search Appointments
            </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UnorderedListOutlined />}>
            <Link
              to="/list_appointment"
            >
              List Appointments
            </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(isActiveMenu ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggleMenu,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes/>
          </Content>
        </Layout>
      </Layout>
      </Router>
      <BackTop />
    </>
  );
}

export default HeaderMenu;
