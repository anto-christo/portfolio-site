import {
    Row,
    Col,
    Container
} from 'react-bootstrap';
import Lottie from 'react-lottie';
import NavBar from '../Components/NavBar';
import * as contactAnimation from '../Assets/contact.json';
import contact from '../Contents/Contact';
import pages from '../Contents/Pages';

export default function Contact() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: contactAnimation.default
    };

    const mainDivStyle = {
        marginTop: '-5%'
    }

    return (
        <>
            <NavBar heading={pages[4].text} />
            <div className="d-flex align-items-center" style={mainDivStyle}>
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
                                Object.entries(contact.Personal).map(([contact, value]) => {
                                    return (
                                        <ContactDetail detail={{ label: contact, value }} />
                                    );
                                })
                            }
                            <Row>
                                <div className="d-flex flex-row flex-wrap justify-content-center">
                                    {
                                        Object.entries(contact.Social).map(([social, url]) => {
                                            return (
                                                <a className="btn btn-outline-primary btn-sm mx-4 mt-3 my-1" href={url} target="_blank" rel="noreferrer">{social}</a>
                                            );
                                        })
                                    }
                                </div>
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
                    <p className="font-weight-bold mb-1">{detail.label}</p>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <p>{detail.value}</p>
                </Col>
            </Row>
        </>
    );
}