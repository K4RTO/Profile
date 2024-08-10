import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import App from "../../Assets/Projects/App.jpg";
import Fall_Detection from "../../Assets/Projects/Fall.jpg";
import Grass from "../../Assets/Projects/Grass.jpg";
import fall_video from "../../Assets/Projects/Fall.mp4";
import grass_video from "../../Assets/Projects/Grass.mov";
import app_video from "../../Assets/Projects/App.mp4";

function Projects() {
  const [modalData, setModalData] = useState({
    show: false,
    title: "",
    videoSrc: ""
  });

  const handleOpenModal = (title, videoSrc) => {
    setModalData({
      show: true,
      title,
      videoSrc
    });
  };

  const handleCloseModal = () => {
    setModalData({
      show: false,
      title: "",
      videoSrc: ""
    });
  };

  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            最近<strong className="blue">项目</strong>
          </h1>
          <p style={{ color: "white" }}>参与过的项目</p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={Fall_Detection}
                  isBlog={false}
                  title="人体跌落姿态检测"
                  description="项目基于Python和Yolo模型，旨在利用计算机视觉和音频处理技术开发先进的跌倒检测系统。通过对摄像头和麦克风捕获的视频和音频数据进行实时分析，系统可以快速识别跌倒情况，从而为有需要的人员提供及时帮助。"
                  ghLink="https://github.com/K4RTO/Fall_Detection"
                  demoLink="#"
                  onClick={() => handleOpenModal("人体跌落姿态检测 Demo", fall_video)}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={Grass}
                  isBlog={false}
                  title="草地在不同风力下的渲染"
                  description="草的复杂细节及其无数的叶片，每个叶片都会对风、重力和碰撞等环境因素做出反应，显着增加了户外场景的视觉真实感。该项目基于C++旨在通过引入一种将草地渲染为镶嵌几何形状的方法来克服这些限制，从而允许与风和物体等环境因素相互作用的详细且动态的草地。"
                  ghLink="https://github.com/K4RTO/CG_Grass_Rendering"
                  demoLink="#"
                  onClick={() => handleOpenModal("Grass Rendering Demo", grass_video)}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={App}
                  isBlog={false}
                  title="安卓应用程序-游戏社区"
                  description="该项目旨在满足视频游戏市场不断增长的需求。该应用是一款专门针对Steam游戏玩家的社交媒体应用，它为游戏玩家提供了一个在线互动和搜索游戏信息的平台。"
                  ghLink="https://github.com/K4RTO/Android_Project"
                  demoLink="#"
                  onClick={() => handleOpenModal("Android App Demo", app_video)}
              />
            </Col>
          </Row>

          {/* Reusable Video Modal */}
          <Modal
              key={modalData.videoSrc}
              show={modalData.show}
              onHide={handleCloseModal}
              size="lg"
              centered
          >
            <Modal.Header closeButton>
              <Modal.Title>{modalData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <video width="100%" controls>
                <source src={modalData.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </Container>
  );
}

export default Projects;