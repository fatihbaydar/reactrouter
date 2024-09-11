import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink 
            style={({isActive})=> ({color: isActive && "red"})}
            className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink 
            style={({isActive})=> ({fontSize: isActive && "50px"})}
            className="nav-link" to="/teacher">
              Teacher
            </NavLink>
            <NavLink 
            style={({isActive})=> ({border: isActive && "1 px solid blue"})}
            className="nav-link" to="/courses">
              Courses
            </NavLink>
            <NavLink 
            style={({isActive})=> ({backgroundColor: isActive && "red"})}
            className="nav-link" to="/contact">
              Contact
            </NavLink>
            <NavLink className="nav-link" to="/paths">
              Paths
            </NavLink>
           <Nav.Link target="blank" href="">Github</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

//!!!React ta 3 türlü link kullanılabilir. NavLink Link ve a etiketi.hangisini ne zaman kullanmalısınız? React uygulamanız içinde, etkinken stil gerektirmeyen bir bağlantı oluşturmak istiyorsanız, Link bileşenini kullanın. React uygulamanız içinde, etkin durumdayken stil gerektiren bir bağlantı oluşturmak istiyorsanız, NavLink bileşenini kullanın. Son olarak, React uygulamanızda harici bir sayfaya veya rota olmayan bir sayfaya bağlantı oluşturmak istiyorsanız, <a></a>  etiketini kullanın.
