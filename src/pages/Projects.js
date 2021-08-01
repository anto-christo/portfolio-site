import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import projects from '../contents/Projects';
import pages from '../contents/Pages';

export default function Projects() {
    return (
        <>
            <NavBar heading={pages[1].text}/>
            <div className="mt-3">
                <Container fluid>
                    {
                        projects.map((project, index) => {
                            return (
                                <Row>
                                    <Col sm={3}></Col>
                                    <Col sm={6}>
                                        <ProjectCard key={index} project={project} />
                                    </Col>
                                    <Col sm={3}></Col>
                                </Row>
                            )
                        })
                    }
                </Container>
            </div>
        </>
    );
}