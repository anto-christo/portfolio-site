import {
    Card,
    Row,
    Col,
    Container
} from 'react-bootstrap';
import Lottie from 'react-lottie';
import NavBar from '../Components/NavBar';
import * as contactAnimation from '../Assets/contact.json';

export default function Contact() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: contactAnimation.default
    };

    return (
        <>
            <NavBar />
            <div className="d-flex align-items-center -mt-14">
                <Container fluid>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6}>
                            <Card border="light" className="shadow my-3">
                                <Card.Body className="text-center">
                                    <Lottie
                                        options={defaultOptions}
                                        height={200}
                                        width={200}
                                    />
                                    <p className="text-lg font-semibold mb-0 mt-5">Email</p>
                                    <p>anto.christo.20@gmail.com</p>
                                    <p className=" text-lg font-semibold mb-0">Phone / Whatsapp / Telegram</p>
                                    <p className="mb-0">8652001978</p>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: "white" }} className="d-flex mx-auto">
                                    <a className="btn btn-outline-primary btn-sm mx-4" href="www.github.com" target="_blank">GitHub</a>
                                    <a className="btn btn-outline-primary btn-sm mx-4" href="www.github.com" target="_blank">GitHub</a>
                                    <a className="btn btn-outline-primary btn-sm mx-4" href="www.github.com" target="_blank">GitHub</a>
                                    <a className="btn btn-outline-primary btn-sm mx-4" href="www.github.com" target="_blank">GitHub</a>
                                </Card.Footer>
                            </Card>                        
                        </Col>
                        <Col sm={3}></Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}