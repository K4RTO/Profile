import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiXcode,
    SiBlender,
    SiGodotengine,
    SiGithub,
    SiAndroidstudio,
    SiUnity,
    SiUnrealengine,
    SiAlibabacloud,
    SiAseprite,
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "0px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiXcode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAndroidstudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiBlender />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiUnity />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiUnrealengine />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGodotengine />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAseprite />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAlibabacloud />
        </Col>
    </Row>
  );
}

export default Toolstack;
