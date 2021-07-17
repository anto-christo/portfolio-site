import {
    Row,
    Col,
    Container
} from 'react-bootstrap';
import Lottie from 'react-lottie';
import NavBar from '../Components/NavBar';
import * as contactAnimation from '../Assets/contact.json';
import contact from '../Contents/Contact';

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
                            <Row>
                                <Lottie
                                    options={defaultOptions}
                                    height={300}
                                    width={300}
                                />
                            </Row>
                            {
                                Object.entries(contact.Personal).map(([ contact, value ]) => {
                                    return (
                                        <ContactDetail detail={{ label: contact, value }} />
                                    );
                                })
                            }
                            <Row className="mt-4 d-flex flex-row justify-content-center">
                                {
                                    Object.entries(contact.Social).map(([ social, url ]) => {
                                        return (
                                            <a className="btn btn-outline-primary btn-sm mx-4 my-1" href={url} target="_blank">{social}</a>
                                        );
                                    })
                                }
                            </Row>
                        </Col>
                        <Col sm={3}></Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

function ContactDetail({ detail }) {
    return (
        <>
            <Row>
                <Col className="text-center">
                    <p className="text-lg font-semibold mb-0">{detail.label}</p>
                </Col>
            </Row>
            <Row>
                <Col className="text-center text-sm">
                    <p>{detail.value}</p>
                </Col>
            </Row>
        </>
    );
}