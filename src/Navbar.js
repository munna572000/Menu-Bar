import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BasicExample() {
  const nav = useNavigate();

  //when login the data get
  const isLogin = localStorage.getItem("user_id");
  //Show user name after signin
  const userName_gdg = localStorage.getItem("user_username");
  

  //logout function create:
  const logOut = () => {
    nav("/");
    localStorage.clear();
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="text-decoration-none text-primary">
                LiveNews
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="text-decoration-none text-primary">
                Image Search
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="text-decoration-none text-primary">
                {" "}
                contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/formdata"
                className="text-decoration-none text-primary"
              >
                SignUp
              </Link>
            </Nav.Link>
            <Nav.Link>
              {!isLogin ? (
                <Link to="/loginform">Signin</Link>
              ) : (
                <NavDropdown
                  title={!isLogin ? "Signin" : userName_gdg}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
