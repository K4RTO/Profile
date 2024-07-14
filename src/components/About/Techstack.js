import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCplusplus,SiLinux} from "react-icons/si";
import {
  DiJavascript1,
  DiPython,
  DiJava,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <SiCplusplus />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiPython />
        </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiLinux />
        </Col>


    </Row>
  );
}

export default Techstack;
