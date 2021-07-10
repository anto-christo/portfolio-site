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
                                                <Button variant="outline-primary">View on GitHub</Button>{' '}
                                            </Card.Body>
                                            <Card.Footer>
                                                <Badge className="mx-1" variant="warning">JavaScript</Badge>
                                                <Badge className="mx-1" variant="primary">React Native</Badge>
                                                <Badge className="mx-1" variant="success">NodeJS</Badge>
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