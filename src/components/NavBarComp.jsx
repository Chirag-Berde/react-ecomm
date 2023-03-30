import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const NavBarComp = () => {
    return (
        <div>
            <Navbar bg="light" variant="light" className='shadow-sm bg-white py-4 '>
                <Container>
                   <Link style={{textDecoration:'none'}} to='/'> <Navbar.Brand  className='fw-bold fs-2'>ShopSee</Navbar.Brand></Link>
                    <Nav className="me-auto">
                        <Nav.Link className='nav-link nav-link-ltr'><Link style={{textDecoration:'none'}} to="/">Home</Link></Nav.Link>
                        <Nav.Link className='nav-link nav-link-ltr'><Link style={{textDecoration:'none'}} to='/products'>Products</Link></Nav.Link>
                 
                    </Nav>
                    <div className="buttons">
                        <Button variant="outline-dark" className='me-2'><i className='fa fa-user-plus me-2'></i>Login</Button>
                        <Button variant="outline-dark" className='me-2'><i className='fa fa-sign-in me-2'></i>Register</Button>
                        <Button variant="outline-dark" className='me-2'><i className='fa fa-shopping-cart me-2'></i>Cart </Button>

                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarComp