import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack development of a scalable e-commerce platform with integrated payment gateway and user management.",
      imgUrl: projImg1,
    },
    {
      title: "Real-Time Chat Application",
      description: "Development of a real-time chat application with WebSocket integration for instant messaging and notifications.",
      imgUrl: projImg2,
    },
    
    {
      title: "Social Networking Site",
      description: "Building a social networking site with user profiles, friend connections, and activity feeds.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore some of the projects I’ve worked on, showcasing my skills in full-stack development. Each project demonstrates my ability to create dynamic, user-focused applications.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="web-applications">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="web-applications">Web Applications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tools-utilities">Tools & Utilities</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="web-applications">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={`project-${index}`}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tools-utilities">
                        <p>Explore various tools and utilities I've developed to enhance productivity and streamline processes. These include:</p>
                        <ul>
                          <li><strong>Task Management Systems:</strong> Tools designed to manage tasks, track progress, and facilitate team collaboration.</li>
                          <li><strong>Automation Scripts:</strong> Scripts and utilities for automating repetitive tasks, saving time, and reducing manual effort.</li>
                          <li><strong>Data Analysis Tools:</strong> Applications for analyzing and visualizing data to support decision-making and improve efficiency.</li>
                        </ul>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Decoration"/>
    </section>
  );
}
