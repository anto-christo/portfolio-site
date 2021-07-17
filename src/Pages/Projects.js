import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import ProjectCard from '../Components/ProjectCard';
import projects from '../Contents/Projects';
import pages from '../Contents/Pages';

export default function Projects() {
    return (
        <>
            <NavBar heading={pages[1].text}/>
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