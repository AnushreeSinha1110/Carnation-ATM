import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function CustomerDashboard() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Carnation-ATM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/customerdashboard/view">View Customer Details</Nav.Link>
            <Nav.Link href="/customerdashboard/addTransaction">Add Transaction </Nav.Link>
            <Nav.Link href="/">Log Out </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <div id="details">
           <Outlet />
       </div>

    </div>
  );
}

export default CustomerDashboard;