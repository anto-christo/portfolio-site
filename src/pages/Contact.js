import {
    Row,
    Col,
    Container
} from 'react-bootstrap';
import Lottie from 'react-lottie';
import NavBar from '../components/NavBar';
import * as contactAnimation from '../assets/contact.json';
import contact from '../contents/Contact';
import pages from '../contents/Pages';
import { HEADER_STYLE, CONTENT_STYLE } from '../utils/style';

export default function Contact() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: JSON.parse(JSON.stringify(contactAnimation.default))
    };

    const mainDivStyle = {
        marginTop: '-4rem'
    };

    return (
        <>
            <NavBar heading={pages.contact.text} />
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
                                Object.entries(contact.Personal).map(([contact, value], index) => {
                                    console.log(value);
                                    return (
                                        <ContactDetail key={index} detail={{ label: contact, value }} />
                                    );
                                })
                            }
                            <Row>
                                <div className="d-flex flex-row flex-wrap justify-content-center">
                                    {
                                        Object.entries(contact.Social).map(([social, url], index) => {
                                            return (
                                                <a key={index} style={Object.assign({ minWidth: '10%' }, CONTENT_STYLE)} className="btn btn-outline-primary btn-sm mx-4 mt-4 my-1" href={url} target="_blank" rel="noreferrer">{social}</a>
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
                <Col className="text-center mt-n2 mb-3">
                    <a style={Object.assign({ textDecoration: 'none' }, CONTENT_STYLE)} href={detail.value.url}>{detail.value.id}</a>
                </Col>
            </Row>
        </>
    );
}