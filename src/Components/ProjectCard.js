import {
    Card
} from 'react-bootstrap';
import TechBadge from './TechBadge'; 
import isMediumScreen from '../Utils/index';

export default function ProjectCard({ project }) {
    if (isMediumScreen())
        project.techs.reverse();

    return (
        <Card border="light" className="shadow-lg my-3">
            <Card.Body className="mx-1 my-1">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="text-justify">{project.description}</Card.Text>
                <a className="btn btn-outline-primary btn-sm" href={project.url} target="_blank" rel="noreferrer">{project.buttonText}</a>
            </Card.Body>
            <Card.Footer style={{ backgroundColor:"white" }}>
                {
                    project.techs.map(tech => {
                        return (
                            <TechBadge tech={tech} />
                        )
                    })
                }
            </Card.Footer>
        </Card>
    );
}