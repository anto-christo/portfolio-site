import NavBar from '../Components/NavBar';
import Lottie from 'react-lottie';
import * as introAnimation from '../Assets/about.json';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

export default function About() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: introAnimation.default
    };

    return (
        <>
            <NavBar />
            <div className="d-flex align-items-center -mt-20">
                <Container fluid>
                    <Row>
                        <Col>
                            <Lottie
                                options={defaultOptions}
                                height={300}
                                width={300}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center text-3xl md:text-6xl">
                            <p>Hi, I am Anto</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center text-base md:text-2xl mt-3">
                            <p>
                                I am a software developer specializing in building Web Applications, Games and Mobile Applications.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}