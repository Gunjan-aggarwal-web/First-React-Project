import { Container, Nav, Navbar } from "react-bootstrap";

const AppHeader = () => {
    return(
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">React Component</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>

    )
};
export default AppHeader;
