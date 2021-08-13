import {
    Card
} from 'react-bootstrap';
import TechBadge from './TechBadge';
import isMediumScreen from '../utils/screen';
import { HEADER_STYLE, CONTENT_STYLE } from '../utils/style';

export default function ExperienceCard({ experience }) {
    let experienceTechnologies = [...experience.techs];
    if (isMediumScreen())
        experienceTechnologies.reverse();

    const titleStyle = Object.assign({ textDecoration: 'none' }, HEADER_STYLE);

    return (
        <Card border="light" className="shadow-lg mt-2 mb-3">
            <Card.Body className="mx-1 my-1">
                <Card.Title>
                    <a style={titleStyle} href={experience.url} target="_blank" rel="noreferrer">{experience.name}</a>
                </Card.Title>
                <Card.Text style={CONTENT_STYLE} className="text-justify font-italic my-n1 mb-2">{experience.position}</Card.Text>
                <Card.Text style={CONTENT_STYLE} className="text-justify font-italic my-n1 mb-2 d-block d-md-none">{experience.tenure}</Card.Text>
                <Card.Text style={CONTENT_STYLE} className="text-justify">{experience.content}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ backgroundColor:"white" }}>
                <span className="ml-1 float-left d-none d-md-block">{experience.tenure}</span>
                {
                    experienceTechnologies.map((tech, index) => {
                        return (
                            <TechBadge key ={index} tech={tech} />
                        )
                    })
                }
            </Card.Footer>
        </Card>
    );
}