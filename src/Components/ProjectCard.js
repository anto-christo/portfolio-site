import {
    Card,
    Badge
} from 'react-bootstrap';
export default function ProjectCard({ project }) {
    function getBadgeStyle(outline) { 
        return {
            color: outline, 
            border: '1px solid', 
            backgroundColor: 'transparent' 
        }
    };

    return (
        <Card border="light" className="shadow my-3">
            <Card.Body className="mx-1 my-1">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="text-justify">{project.description}</Card.Text>
                <a className="btn btn-outline-primary btn-sm" href={project.url} target="_blank" rel="noreferrer">{project.buttonText}</a>
            </Card.Body>
            <Card.Footer style={{ backgroundColor:"white" }}>
                {
                    project.techs.map(tech => {
                        return (
                            <Badge style={getBadgeStyle(tech.outline)} className="mx-1 float-right" variant={tech.type}>{tech.name}</Badge>
                        )
                    })
                }
            </Card.Footer>
        </Card>
    );
}