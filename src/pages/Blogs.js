import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import NavBar from '../components/NavBar';
import BlogCard from '../components/BlogCard';
import blogs from '../contents/Blogs';
import pages from '../contents/Pages';

export default function Blogs() {
    return (
        <>
            <NavBar heading={pages.blogs.text}/>
            <div className="mt-3">
                <Container fluid>
                    {
                        blogs.map((blog, index) => {
                            return (
                                <Row key={index}>
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