import NavBar from '../Components/NavBar';
import Lottie from 'react-lottie';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import * as introAnimation from '../Assets/about.json';
import pages from '../Contents/Pages';

export default function About() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: introAnimation.default
    };

    const mainDivStyle = {
        marginTop: '-4%'
    }

    function getFontSize(style) {
        const SIZE = {
            mediumHeader: '2.5rem',
            smallHeader: '2rem',
            mediumSubHeader: '1.25rem',
            smallSubHeader: '1rem'
        }
        return {
            fontSize: SIZE[style]
        }
    }

    return (
        <>
            <NavBar heading={pages[0].text} />
            <div className="d-flex align-items-center" style={mainDivStyle}>
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
                        <Col className="text-center">
                            <p className="d-none d-md-block" style={getFontSize('mediumHeader')}>Hi, I am Anto</p>
                            <p className="d-block d-md-none" style={getFontSize('smallHeader')}>Hi, I am Anto</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center mt-1">
                            <p className="d-none d-md-block" style={getFontSize('mediumSubHeader')}>
                                I am a software developer specializing in building Web Applications, Games and Mobile Applications.
                            </p>
                            <p className="d-block d-md-none" style={getFontSize('smallSubHeader')}>
                                I am a software developer specializing in building Web Applications, Games and Mobile Applications.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}