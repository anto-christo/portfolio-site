import {
    Card
} from 'react-bootstrap';
import TechBadge from './TechBadge'; 
import isMediumScreen from '../utils/screen';
import { HEADER_STYLE, CONTENT_STYLE } from '../utils/style';

export default function ProjectCard({ project }) {
    if (isMediumScreen())
        project.techs.reverse();

    return (
        <Card border="light" className="shadow-lg mt-2 mb-2">
            <Card.Body className="mx-1 my-1">
                <Card.Title style={HEADER_STYLE}>{project.title}</Card.Title>
                <Card.Text style={CONTENT_STYLE} className="text-justify">{project.description}</Card.Text>
                <a style={CONTENT_STYLE} className="btn btn-outline-primary btn-sm" href={project.url} target="_blank" rel="noreferrer">{project.buttonText}</a>
            </Card.Body>
            <Card.Footer style={{ backgroundColor:"white" }}>
                {
                    project.techs.map((tech, index) => {
                        return (
                            <TechBadge key={index} tech={tech} />
                        )
                    })
                }
            </Card.Footer>
        </Card>
    );
}