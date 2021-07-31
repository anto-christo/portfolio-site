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
import { HEADER_STYLE, CONTENT_STYLE } from '../Utils/style';

export default function Contact() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: contactAnimation.default
    };

    const mainDivStyle = {
        marginTop: '-4rem'
    }

    return (
        <>
            <NavBar heading={pages[4].text} />
            <div className="d-flex align-items-center" style={mainDivStyle}>
                <Container fluid>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={8}>
                            <Row>
                                <Lottie
                                    options={defaultOptions}
                                    height={'15rem'}
                                    width={'15rem'}
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
                                                <a style={Object.assign({ minWidth: '15%' }, CONTENT_STYLE)} className="btn btn-outline-primary btn-sm mx-4 mt-3 my-1" href={url} target="_blank" rel="noreferrer">{social}</a>
                                            );
                                        })
                                    }
                                </div>
                            </Row>
                        </Col>
                        <Col sm={2}></Col>
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
                    <p style={HEADER_STYLE}>{detail.label}</p>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-n2 mb-1">
                    <p style={CONTENT_STYLE}>{detail.value}</p>
                </Col>
            </Row>
        </>
    );
}