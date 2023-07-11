// import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import IniciarSesion from "./componentes/login";
import LoginForm from "./componentes/form";
<link rel="stylesheet" href="./App.css" />

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container id="contenedor">
          <Navbar.Brand href="#home">React-FWD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <IniciarSesion></IniciarSesion> */}
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
