import React, { useEffect } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";

import { LogoutOutlined } from "@ant-design/icons";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider/AuthProvider";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { menuConfig } from "./settings";
import { MenuProps } from "antd/lib";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

function Template() {
  const location = useLocation();
  const { states, actions } = useAuth();
  const [collapsed, setCollapsed] = React.useState<boolean>(false);

  const { Header, Content, Footer, Sider } = Layout;

  const menu = (
    <Menu selectedKeys={[location.pathname]}>
      <Menu.Item key="S1" disabled={true}>
        {states.user.name} ({states.user.email})
      </Menu.Item>
      <Menu.Item key="S2" onClick={actions.logoutUser}>
        <LogoutOutlined /> Sair
      </Menu.Item>
    </Menu>
  );

  console.log("AWDAWDAWDAWDAW", location.pathname.split("/")[1]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          selectedKeys={[
            location.pathname.lastIndexOf("/") > 0
              ? `/${location.pathname.split("/")[1]}`
              : location.pathname,
          ]}
          mode="inline"
          // items={items}
        >
          {menuConfig.map((menuItem) => (
            <Menu.Item key={menuItem.key} icon={menuItem.icon}>
              <NavLink to={menuItem.path}>{menuItem.label}</NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 72 : 193 }}>
        <Content style={{ margin: "0 16px" }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ortohapori ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Template;
