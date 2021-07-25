import {
    Card
} from 'react-bootstrap';
import TechBadge from './TechBadge'; 

export default function ExperienceCard({ experience }) {
    return (
        <Card border="light" className="shadow-lg my-3">
            <Card.Body className="mx-1 my-1">
                <Card.Title>
                    <a style={{ textDecoration: 'none' }} href={experience.url} target="_blank" rel="noreferrer">{experience.name}</a>
                </Card.Title>
                <Card.Text className="text-justify font-italic my-n1 mb-2">{experience.position}</Card.Text>
                <Card.Text className="text-justify">{experience.content}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ backgroundColor:"white" }}>
                <span className="ml-1 float-left">{experience.tenure}</span>
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