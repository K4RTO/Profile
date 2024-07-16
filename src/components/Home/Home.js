import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import backgroundVideo from "../../Assets/background.mp4"


function Home() {
    const videoRef = useRef(null);

    return (
        <section>
            <Container fluid className="home-section" id="home">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    id="video-background"
                >
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Particle />
            </Container>
        </section>
    );
}

export default Home;
