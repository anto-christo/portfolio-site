import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import NavBar from '../components/NavBar';
import BlogCard from '../components/BlogCard';
import blogs from '../Contents/Blogs';
import pages from '../Contents/Pages';

export default function Blogs() {
    return (
        <>
            <NavBar heading={pages[3].text}/>
            <div className="mt-3">
                <Container fluid>
                    {
                        blogs.map(blog => {
                            return (
                                <Row>
                                    <Col sm={3}></Col>
                                    <Col sm={6}>
                                        <BlogCard blog={blog} />
                                    </Col>
                                    <Col sm={3}></Col>
                                </Row>
                            )
                        })
                    }
                </Container>
            </div>
        </>
    );
}