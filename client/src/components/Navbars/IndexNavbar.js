
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import { Link } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand data-placement="bottom">
            <Link to="/"><h4 style={{fontWeight:"bold", color:"#f5593d", marginTop:"0px"}}>React</h4></Link>

          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <Link to="/">  
              <Button
                  className="btn-link mr-1"
                  color="danger">
                  Home
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/lists">  
                <Button
                  className="btn-link mr-1"
                  color="danger">
                  Lists
                </Button>
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/signin">  
                <Button
                    className="btn-round mr-1"
                    color="danger"
                    outline
                    type="button">
                      Sign In
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/signup">  
                <Button
                    className="btn-round mr-1"
                    color="danger"
                    outline
                    type="button">
                      Sign Up
                </Button>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
