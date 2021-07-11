import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import ExperienceCard from '../Components/ExperienceCard';
import experiences from '../Contents/Experiences'

export default function Experiences() {
    return (
        <>
            <NavBar />
            <div className="mt-3">
                <Container fluid>
                    {
                        experiences.map(experience => {
                            return (
                                <Row>
                                    <Col sm={3}></Col>
                                    <Col sm={6}>
                                        <ExperienceCard experience={experience} />
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