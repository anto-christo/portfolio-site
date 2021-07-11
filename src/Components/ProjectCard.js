import {
    Card,
    Badge
} from 'react-bootstrap';
export default function ProjectCard({ project }) {
    return (
        <Card border="light" className="shadow my-3">
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a className="btn btn-outline-primary btn-sm" href={project.url} target="_blank">{project.buttonText}</a>
            </Card.Body>
            <Card.Footer style={{ backgroundColor:"white" }}>
                {
                    project.techs.map(tech => {
                        return (
                            <Badge className="mx-1" variant={tech.type}>{tech.name}</Badge>
                        )
                    })
                }
            </Card.Footer>
        </Card>
    );
}