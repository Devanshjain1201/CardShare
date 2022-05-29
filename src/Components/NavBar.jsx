import { Nav, Navbar, Container, Button } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const navigate = useNavigate();
  return (
    <Navbar bg="primary" variant="dark" className="mb-3">
      <Container>
        <Navbar.Brand
        style={{cursor:'pointer'}}
          onClick={() => {
            navigate("/");
          }}
        >
          CardShare
        </Navbar.Brand>
        <Nav className="">
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
          {sessionStorage.getItem("user") ? (
            <React.Fragment>
              <Button
                onClick={() => {
                  navigate("/cards");
                }}
              >
                Cards
              </Button>

              <Button
                onClick={() => {
                  sessionStorage.removeItem("user");
                  navigate("/login");
                }}
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginRight: "1em",
                }}
              >
                Logout
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Register
              </Button>
              <Button
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            </React.Fragment>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
