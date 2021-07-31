import NavBar from '../Components/NavBar';
import Lottie from 'react-lottie';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import * as introAnimation from '../Assets/about.json';
import about from '../Contents/About';
import pages from '../Contents/Pages';
import { FONT_STYLE } from '../Utils/style';

export default function About() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: introAnimation.default
    };

    const mainDivStyle = {
        marginTop: '-4rem'
    }

    function getFont(style) {
        const size = {
            mediumHeader: '3rem',
            smallHeader: '1.5rem',
            mediumSubHeader: '1.25rem',
            smallSubHeader: '0.9rem'
        };
        const family = {
            mediumHeader: FONT_STYLE.PRIMARY,
            smallHeader: FONT_STYLE.PRIMARY,
            mediumSubHeader: FONT_STYLE.SECONDARY,
            smallSubHeader: FONT_STYLE.SECONDARY
        }
        return {
            fontSize: size[style],
            fontFamily: family[style]
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
                                height={'15rem'}
                                width={'15rem'}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <p className="d-none d-md-block" style={getFont('mediumHeader')}>{about.Header}</p>
                            <p className="d-block d-md-none" style={getFont('smallHeader')}>{about.Header}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center mt-1">
                            <p className="d-none d-md-block" style={getFont('mediumSubHeader')}>
                                {about.SubHeader}
                            </p>
                            <p className="d-block d-md-none" style={getFont('smallSubHeader')}>
                                {about.SubHeader}                            
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}