import {
    Container,
    Row,
    Col,
    Card,
    Badge,
    Button
} from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import projects from '../Content/Projects';

export default function Projects() {
    return (
        <>
            <NavBar />
            <div className="mt-4">
                <Container fluid>
                    {
                        projects.map(project => {
                            return (
                                <Row>
                                    <Col sm={3}></Col>
                                    <Col sm={6}>
                                        <Card border="light" className="shadow my-4">
                                            <Card.Body>
                                                <Card.Title>{project.title}</Card.Title>
                                                <Card.Text>{project.description}</Card.Text>
                                                <a className="btn btn-outline-primary" href={project.url} target="_blank">{project.buttonText}</a>
                                            </Card.Body>
                                            <Card.Footer>
                                                {
                                                    project.techs.map(tech => {
                                                        return (
                                                            <Badge className="mx-1" variant={tech.type}>{tech.name}</Badge>
                                                        )
                                                    })
                                                }
                                            </Card.Footer>
                                        </Card>
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