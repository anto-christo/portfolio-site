import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import pages from '../Contents/Navigation';

export default function NavBar() {
    const CURRENT_PATH = useLocation().pathname;  
    
    function isCurrent(path) {
        return path === CURRENT_PATH ? true : false;
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="d-md-flex d-block flex-row mx-md-auto mx-0 shadow-lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    {
                        pages.map(page => {
                            return (
                                <Nav.Link className={isCurrent(page.path) ? 'mx-2 active' : 'mx-2'} as={Link} to={page.path}>{page.text}</Nav.Link>
                            );
                        })
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}