import {
    Container,
    Row,
    Col,
    Card,
    Image
} from 'react-bootstrap';
import NavBar from '../Components/NavBar';

export default function Experiences() {
    return (
        <>
            <NavBar />
            <div className="mt-3">
                <Container fluid>
                    {/* {
                        projects.map(project => { */}
                            {/* return ( */}
                                <Row>
                                    <Col sm={3}></Col>
                                    <Col sm={6}>
                                        <Card border="light" className="shadow my-3">
                                            <Card.Header>
                                                <div className="d-flex flex-row ml-0.5 mt-2">
                                                    <Image className="h-10 w-20" src={require('../Assets/sap.png').default}></Image>
                                                    <div className="d-flex flex-col -mt-1 ml-2">
                                                        <Card.Title>SAP Labs India</Card.Title>
                                                        <span className="-mt-3">Scholar, Associate Software Developer</span>
                                                    </div>
                                                </div>
                                            </Card.Header>
                                            <Card.Body>
                                                
                                                <Card.Text>Description</Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <span>August 2019 - Present</span>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col sm={3}></Col>
                                </Row>
                            {/* ) */}
                        {/* })
                    } */}
                </Container>
            </div>
        </>
    );
}