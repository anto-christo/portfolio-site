import { Card } from 'react-bootstrap';
import { HEADER_STYLE, CONTENT_STYLE } from '../utils/style';

export default function BlogCard({ blog }) {
    return (
        <Card border="light" className="shadow-lg my-3">
            <Card.Body className="mx-1 my-1">
                <Card.Title style={HEADER_STYLE}>{blog.title}</Card.Title>
                <Card.Text style={CONTENT_STYLE} className="text-justify">{blog.description}</Card.Text>
                <a style={CONTENT_STYLE} className="btn btn-outline-primary btn-sm" href={blog.url} target="_blank" rel="noreferrer">{blog.buttonText}</a>
            </Card.Body>
        </Card>
    );
}