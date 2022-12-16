import React from "react";
import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const logOutMethod = ()=>{
    logOut()
    .then((result) => {
      const user = result.user;
      console.log(user)
    }).catch((error) => {
      console.error(error)
    });
  }
  return (
    <Navbar
      className="mb-5"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">Dragon News</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to='/profile'>
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  {user?.photoURL ? 
                    <Image
                      style={{ height: "35px" }}
                      roundedCircle
                      src={user?.photoURL}
                    ></Image>
                   : 
                    <FaUser></FaUser>
                  }
                  <Button onClick={logOutMethod} className="ms-2" variant="danger" size="sm">
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Link style={{textDecoration: 'none' }} to="/login">Login</Link>
                  <Link style={{textDecoration: 'none', marginLeft:'15px', marginRight:'15px' }}  to="/register">Register</Link>
                  <FaUser></FaUser>
                </>
              )}
            </Link>
            <Nav.Link></Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
