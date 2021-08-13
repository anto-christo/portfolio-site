import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import Lottie from 'react-lottie';
import NavBar from '../components/NavBar';
import * as introAnimation from '../assets/hello.json';
import about from '../contents/About';
import pages from '../contents/Pages';
import { FONT_STYLE } from '../utils/style';

export default function About() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: JSON.parse(JSON.stringify(introAnimation.default))
    };

    const mainDivStyle = {
        marginTop: '-2rem'
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
            <NavBar heading={pages.about.text} />
            <div className="d-flex align-items-center" style={mainDivStyle}>
                <Container fluid>
                    <Row>
                        <Col>
                            <Lottie
                                options={defaultOptions}
                                height={'16rem'}
                                width={'16rem'}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center mt-3">
                            <p className="d-none d-md-block" style={getFont('mediumHeader')}>{about.Header}</p>
                            <p className="d-block d-md-none" style={getFont('smallHeader')}>{about.Header}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center mt-n1">
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