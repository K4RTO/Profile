import React, { useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import backgroundVideo from "../../Assets/background.mp4";

function Home() {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            const videoElement = videoRef.current;
            if (videoElement) {
                videoElement.style.height = `${window.innerHeight}px`;
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call it initially

        return () => window.removeEventListener('resize', handleResize);
    }, []);

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