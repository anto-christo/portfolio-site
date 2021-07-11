import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import ProjectCard from '../Components/ProjectCard';
import projects from '../Contents/Projects';

export default function Projects() {
    return (
        <>
            <NavBar />
            <div className="mt-3">
                <Container fluid>
                    {
                        projects.map(project => {
                            return (
                                <Row>
                                    <Col sm={3}></Col>
                                    <Col sm={6}>
                                        <ProjectCard project={project} />
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