import { Card } from 'react-bootstrap';

export default function BlogCard({ blog }) {
    return (
        <Card border="light" className="shadow my-3">
            <Card.Body className="mx-1 my-1">
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text className="text-justify">{blog.description}</Card.Text>
                <a className="btn btn-outline-primary btn-sm" href={blog.url} target="_blank" rel="noreferrer">{blog.buttonText}</a>
            </Card.Body>
        </Card>
    );
}