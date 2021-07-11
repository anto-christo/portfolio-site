import {
    Card,
    Image
} from 'react-bootstrap';

export default function ExperienceCard({ experience }) {
    return (
        <Card border="light" className="shadow my-3">
            <Card.Header style={{ backgroundColor: "white" }}>
                <div className="d-flex flex-row ml-0.5 mt-2">
                    <Image className="h-10 w-20" src={experience.logo}></Image>
                    <div className="d-flex flex-col -mt-1 ml-2">
                        <Card.Title>
                            <a className="text-black" href={experience.url} target="_blank">{experience.name}</a>
                        </Card.Title>
                        <span className="-mt-3">{experience.position}</span>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {experience.content()}
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: "white" }}>
                <span>{experience.tenure}</span>
            </Card.Footer>
        </Card>
    );
}