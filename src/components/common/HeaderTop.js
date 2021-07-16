import React from 'react';

// import { Anchor } from 'antd';

// const { Link } = Anchor;
import { Layout } from "antd";
// import { Input } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;


function HeaderTop() {

  // const [visible, setVisible] = useState(false);

  // const showDrawer = () => {
  //   setVisible(true);
  // };

  // const onClose = () => {
  //   setVisible(false);
  // };
  return (
    <Header>
      <div className="container-fluid">
        <div className="header-top">
        <div className="logo">
            <a href="/">Company</a>
          </div>
          <div className="user-avatar">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />{" "}
            Log in
          </div>
        </div>

{/* <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">ABC
          </a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Features" />
            <Link href="#works" title="How it works" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>*/}
      </div> 
    </Header>
  );
}

export default HeaderTop;
