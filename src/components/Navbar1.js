import React, { Component } from 'react'
import {Navbar,NavDropdown,Nav,Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export class Navbar1 extends Component {
    render() {
        return (
            <>
            <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">
              <img src="https://t4.ftcdn.net/jpg/04/46/53/39/360_F_446533998_Kqmx4T3AMMy2SBb6gA0LajemulYcnO2r.jpg" style={{fontWeight:'bold', fontSize:'20px'}} height="45" alt="CoolBrand"/>SHOP</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav  style={{marginLeft:'120px',  fontWeight: '550', color:'grey'}}>
                <NavLink to="/home" exact activeClassName="active">Home</NavLink>
                  <Nav.Link href="">SHOP</Nav.Link>
                  <Nav.Link href="" >PICNIC</Nav.Link>
                  <Nav.Link href="">PAGE</Nav.Link>
                
                  <Nav.Link href="" >PROMOTIONS</Nav.Link>
                  <Nav.Link href="">BLOG</Nav.Link>
                  <Nav.Link href="">REGISTER</Nav.Link>
                  <Nav.Link href="">LOGIN</Nav.Link>
                  <NavLink to="/contact" exact activeClassName="active">CONTACT US</NavLink>
                  <Nav.Link style={{marginLeft:'80px'}}>
                  <i className="fa fa-search m-2"></i>
                <i className="fa fa-shopping-cart m-2"></i>
                <i className="fas fa-bars m-2"></i>
                  </Nav.Link>
                
                
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          </>
        )
    }
}

export default Navbar1
