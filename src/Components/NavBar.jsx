
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const ContainerS = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 5px;
  z-index: 1000;
  background-color: #edfafa;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 0;
  }
`;

function NavBar() {
  return (
    <ContainerS>
      <Container>
        <Navbar  expand="lg">
          <Navbar.Brand href="/">WELINSON M.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#skills">SKILLS</Nav.Link>
              <Nav.Link href="#projects">PROJECTS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </ContainerS>
  );
}

export default NavBar;
