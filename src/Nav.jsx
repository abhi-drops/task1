import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Nav() {
  return (
    <div>
      <Navbar  className="bg-dark text-light">
        <Container>
          <Navbar.Brand className='text-white' href="#home">
           Display-test
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Nav