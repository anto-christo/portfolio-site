import { Card } from 'react-bootstrap';

export default function BlogCard({ blog }) {
    return (
        <Card border="light" className="shadow my-3">
            <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.description}</Card.Text>
                <a className="btn btn-outline-primary btn-sm" href={blog.url} target="_blank">{blog.buttonText}</a>
            </Card.Body>
        </Card>
    );
}