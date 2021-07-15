import React from 'react';
import "antd/dist/antd.css";
import { Layout } from "antd";
// import { Input } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;


function HeaderTop() {
  return (
    <Header>
      <div className="container-fluid">
        <div className="header">
          Company Name
          <div className="user-avatar">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />{" "}
            Log in
          </div>
        </div>
      </div>
    </Header>
  );
}

export default HeaderTop;
