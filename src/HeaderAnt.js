import React from "react";

import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import { Input } from "antd";
import ContentMiddle from "./Content";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Search } = Input;
const HeaderAnt = () => (
  <Layout className="layout">
    <Header style={{ textAlign: "left", color: "white" }}>
      {" "}
      <div
        style={{
          display: "inline",
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Company
      </div>
      
      <div style={{display:"inline",float:"right" }}>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /> User</div>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
        
        <Menu.Item key="key1">
          <a href="/" rel="noopener noreferrer">
            Navigation One
          </a>
        </Menu.Item>
        <Menu.Item key="key2">
          <a href="/" rel="noopener noreferrer">
            Navigation two
          </a>
        </Menu.Item>
        <Menu.Item key="key3">
          <a href="/" rel="noopener noreferrer">
            Navigation three
          </a>
        </Menu.Item>
        <Menu.Item key="key4">
          <a href="/" rel="noopener noreferrer">
            Navigation four
          </a>
        </Menu.Item>
        <Menu.Item key="key5" style={{align: "right"}}>
        <Search placeholder="Search" style={{ width: 200,float: "right", marginTop: "15px"  }} />
        </Menu.Item>
        
      </Menu>
    </Header>
    {/* <Content style={{ padding: "200px 100px" }}>
      <div className="site-layout-content">Content</div>
    </Content> */}
    <ContentMiddle />
  </Layout>
);

export default HeaderAnt;
