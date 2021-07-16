import React from "react";
import { Layout, Menu } from "antd";
import { Row, Col } from "antd";
import SearchBox from "./SearchBox";

const { Header } = Layout;

function HeaderNav() {
  return (
    <Header style={{ background: "#edf2fa" }}>
      <div className="container-fluid header">
        <Row>
          <Col span={19}>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              selectedKeys={["1"]}
              style={{ background: "none", border: "none" }}
            >
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
            </Menu>
          </Col>
          <Col span={5} >
            <SearchBox/>
          </Col>
        </Row>
        
      </div>
    </Header>
  );
}

export default HeaderNav;
