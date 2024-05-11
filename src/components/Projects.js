import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import p1 from "../assets/img/p1.jpeg";
import p2 from "../assets/img/p2.jpg"
import p3 from "../assets/img/p3.jpg"
import p4 from "../assets/img/p4.png"
import p5 from "../assets/img/p5.jpg"
import p6 from "../assets/img/p6.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Workout Training System",
      description: "Design & Development",
      imgUrl: p1,
    },
    {
      title: "Traffic Sign Recognition System",
      description: "Design & Development",
      imgUrl: p2,
    },
    {
      title: "Digital Image Processing Tutorial Website",
      description: "Design & Development",
      imgUrl: p3,
    },
    {
      title: "Personal Portfolio",
      description: "Design & Development",
      imgUrl: p4,
    },
    {
      title: "Rock And Mine Prediction System",
      description: "Design & Development",
      imgUrl: p5,
    },
    {
      title: "Food Nutrition Calculator",
      description: "Design & Development",
      imgUrl: p6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Drawing upon a fusion of technical expertise and artistic flair, my portfolio project reflects a commitment to excellence. With a keen eye for detail and a dedication to client satisfaction, I strive to craft bespoke solutions that not only meet objectives but also inspire and captivate audiences, setting new standards in the realm of creativity and functionality.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
