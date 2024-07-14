import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import backgroundVideo from "../../Assets/background.mp4"


function Home() {
  return (
    <section>
        <Container fluid className="home-section" id="home">
            <video autoPlay loop muted id="video-background">
                <source src={backgroundVideo} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <Particle/>
        </Container>
    </section>
  );
}

export default Home;
