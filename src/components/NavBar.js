import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import pages from '../contents/Pages';
import { CONTENT_STYLE } from '../utils/style';

export default function NavBar({ heading }) {
    const CURRENT_PATH = useLocation().pathname;  
    
    function isCurrent(path) {
        return path === CURRENT_PATH ? true : false;
    }

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className="shadow-lg bg-white">
            <Navbar.Brand className="d-block d-sm-none">{heading}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    {
                        Object.values(pages).map((page, index) => {
                            return (
                                <Nav.Link key={index} style={CONTENT_STYLE} className={isCurrent(page.path) ? 'mx-2 active' : 'mx-2'} as={Link} to={page.path}>{page.text}</Nav.Link>
                            );
                        })
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}