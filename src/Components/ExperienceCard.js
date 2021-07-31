import {
    Card
} from 'react-bootstrap';
import TechBadge from './TechBadge';
import isMediumScreen from '../Utils/screen';
import { HEADER_STYLE, CONTENT_STYLE } from '../Utils/style';

export default function ExperienceCard({ experience }) {
    if (isMediumScreen())
        experience.techs.reverse();

    const titleStyle = Object.assign({ textDecoration: 'none' }, CONTENT_STYLE);

    return (
        <Card border="light" className="shadow-lg my-3">
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
                    experience.techs.map(tech => {
                        return (
                            <TechBadge tech={tech} />
                        )
                    })
                }
            </Card.Footer>
        </Card>
    );
}