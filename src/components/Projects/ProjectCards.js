import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>

                {/* GitHub Button */}
                <Button variant="primary" href={props.ghLink} target="_blank">
                    <BsGithub /> &nbsp;
                    {props.isBlog ? "Blog" : "GitHub"}
                </Button>

                {"\n"}
                {"\n"}

                {/* Demo Button */}
                {!props.isBlog && props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target={props.onClick ? "_self" : "_blank"} // Open in a new tab only if onClick is not provided
                        onClick={props.onClick} // Pass the onClick handler if provided
                        style={{ marginLeft: "10px" }}
                    >
                        <CgWebsite /> &nbsp;
                        {"Demo"}
                    </Button>
                )}

                {/* Play Button */}
                {props.playLink && (
                    <Button
                        variant="success"
                        href={props.playLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                    >
                        Play
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;