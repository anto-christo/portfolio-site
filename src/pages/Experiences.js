import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import NavBar from '../components/NavBar';
import ExperienceCard from '../components/ExperienceCard';
import experiences from '../contents/Experiences'
import pages from '../contents/Pages';

export default function Experiences() {
    return (
        <>
            <NavBar heading={pages[3].text}/>
            <div className="mt-3">
                <Container fluid>
                    {
                        experiences.map((experience, index) => {
                            return (
                                <Row>
                                    <Col sm={3}></Col>
                                    <Col sm={6}>
                                        <ExperienceCard key={index} experience={experience} />
                                    </Col>
                                    <Col sm={3}></Col>
                                </Row>
                            )
                        })
                    }
                </Container>
            </div>
        </>
    );
}