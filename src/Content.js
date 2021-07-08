import React from "react";

import "antd/dist/antd.css";
import "./index.css";
import { Row, Col, Card } from "antd";

const ContentMiddle = () => (
  <div className="site-card-wrapper">
    <Row gutter={16} justify="center">
      <Col span={7}>
        <Card title="Title" type="inner">
          Card content
        </Card>
        <Card style={{ marginTop: 16 }} type="inner" title="Title">
          Card content
        </Card>
      </Col>
      <Col span={7}>
      <Card title="Title" type="inner">
          Card content
        </Card>
        <Card style={{ marginTop: 16 }} type="inner" title="Title">
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="About" type="inner">
          Card content
        </Card>
      </Col>
    </Row>
  </div>
);

export default ContentMiddle;
