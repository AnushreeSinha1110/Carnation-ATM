import { Outlet } from "react-router-dom";
// import { Container, Nav, Navbar, NavLink, Row, Col, NavItem,  DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle, Form, Input, Button} from 'reactstrap';
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Dashboard.css";
function Dashboard() {
  const clearLocalStorage = () => {
    localStorage.removeItem("token");
  }


  return (
    <div >
    <Navbar expand="lg" className="NavBar">
      <Container>
        <Navbar.Brand href="#home" id="logo">Carnation-ATM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard/create" className="navlink">Create Customer</Nav.Link>
            <Nav.Link href="/dashboard/view/1" className="navlink">View Customer </Nav.Link>
            {/* <Nav.Link href="/dashboard/addaccount">Add Account </Nav.Link> */}
            <Nav.Link href="/dashboard/viewaccount" className="navlink">View Account </Nav.Link>
            {/* <Nav.Link href="/dashboard/viewaccountbycid">View Account By Cid</Nav.Link> */}
            
            {/* <Nav.Link href="/dashboard/viewaccountbyaid">View Balance </Nav.Link> */}
            {/* <Nav.Link href="/dashboard/card"> Add Card </Nav.Link> */}
            <Nav.Link href="/dashboard/viewCard/1" className="navlink">View Card </Nav.Link>
            <Nav.Link href="/dashboard/viewTransaction" className="navlink">View Transaction </Nav.Link>
            <Nav.Link href="/dashboard/approveCheques" className="navlink">Approve Cheques</Nav.Link>
            {/* <Nav.Link href="/dashboard/addTransaction">Add Transaction </Nav.Link> */}
            <Nav.Link href="/" id="logout" onClick={clearLocalStorage}>Log Out </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* className="border-bottom border-gray bg-white"  */}
    {/* <div>
      <Navbar fixed="top" color="dark" dark expand="lg" container="sm">
        <Container>
          <Row className="position-relative w-100 align-items-center">

            <Col className="d-none d-lg-flex justify-content-start">
              <Nav className="mrx-auto" navbar>

                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="/dashboard/create">Create Customer</NavLink>
                </NavItem>

                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="/dashboard/view/1">View Customers</NavLink>
                </NavItem>

                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="/dashboard/addaccount">Add Account</NavLink>
                </NavItem>

                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="/dashboard/viewaccount">View Accounts</NavLink>
                </NavItem>

                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="/dashboard/viewaccountbycid">View Account by Cid</NavLink>
                </NavItem>

                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="/dashboard/card">Add Card</NavLink>
                </NavItem>

                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="/dashboard/viewCard/1">View Cards</NavLink>
                </NavItem>

                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="/dashboard/viewTransaction">View Transactions</NavLink>
                </NavItem>

                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="/dashboard/addTransaction">Add Transaction</NavLink>
                </NavItem>

              </Nav>
            </Col>

            <Col className="d-none d-lg-flex justify-content-end">
              <Nav className="mrx-auto" navbar>
                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="/">Logout</NavLink>
                </NavItem>
              </Nav>
            </Col>

          </Row>
        </Container>
        </Navbar>
      </div> */}
      {/* <div id="details">
         <Outlet />
      </div> */}

    </div>
  );
}

export default Dashboard;