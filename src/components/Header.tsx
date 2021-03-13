import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

function reducer(isActiveMenu: boolean) {
  return !isActiveMenu;
}

function HeaderMenu() {
  const [isActiveMenu, toggleMenu] = useReducer(reducer, false);
  
  return (
    <>
          <Layout>
        <Sider trigger={null} collapsible collapsed={isActiveMenu}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
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
            Content
          </Content>
        </Layout>
      </Layout>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img
              alt=""
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            ></img>
          </Link>
          <span
            onClick={toggleMenu}
            role="button"
            className={`navbar-burger ${isActiveMenu}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div id="navbarBasicExample" className={`navbar-menu ${isActiveMenu}`}>
          <div className="navbar-start">
            <Link
              onClick={toggleMenu}
              to="/add_appointment"
              className="navbar-item"
            >
              Add Appointments
            </Link>
            <Link
              onClick={toggleMenu}
              to="/search_appointment"
              className="navbar-item"
            >
              Search Appointments
            </Link>
            <Link
              onClick={toggleMenu}
              to="/list_appointment"
              className="navbar-item"
            >
              List Appointments
            </Link>
          </div>
        </div>
      </nav>
      <div className="m-5 p-5"></div>
    </>
  );
}

export default HeaderMenu;
