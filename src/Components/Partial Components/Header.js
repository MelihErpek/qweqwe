import React from 'react'
import { Nav, Navbar, Container, Button, ButtonToolbar } from 'react-bootstrap';
export default function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="border-bottom">
                <Container fluid>
                    <Navbar.Brand href="#">influenceyourself</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}

                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>

                        </Nav>

                        <ButtonToolbar>
                            <Button variant="outline-success" className="me-3">Login</Button>
                            <Button variant="success" >Sign Up</Button>
                        </ButtonToolbar>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
