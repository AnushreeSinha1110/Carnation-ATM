import { Outlet } from "react-router-dom";
// import { Container, Nav, Navbar, NavLink, Row, Col, NavItem,  DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle, Form, Input, Button} from 'reactstrap';
import { Container, Nav, Navbar } from "react-bootstrap";

// function Dashboard() {
//     return <div>
//         <nav>
//             <span id="view"><Link to={`/dashboard/view/1`}>View</Link></span>
//             <span id="create"><Link to={`/dashboard/create`}>Create</Link></span>
//             <span id="Add Account"><Link to={`/dashboard/addaccount`}>Add Account</Link></span>
//             <span id="card"><Link to={`/dashboard/card`}>Card Details</Link> </span>
//             <span id="cardView"><Link to={`/dashboard/viewCard/1`}>ViewCard Details</Link> </span>
//             <span id="logout"><Link to={`/`}>Logout</Link></span>

//         </nav>
//         <div id="details">
//             <Outlet />
//         </div>

//     </div>
// }

function Dashboard() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Carnation-ATM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard/create">Create Customer</Nav.Link>
            <Nav.Link href="/dashboard/view/1">View Customer </Nav.Link>
            <Nav.Link href="/dashboard/addaccount">Add Account </Nav.Link>
            <Nav.Link href="/dashboard/viewaccount">View Account </Nav.Link>
            <Nav.Link href="/dashboard/viewaccountbycid">View Account By Cid</Nav.Link>
            
            <Nav.Link href="/dashboard/viewaccountbyaid">View Balance </Nav.Link>
            <Nav.Link href="/dashboard/card"> Add Card </Nav.Link>
            <Nav.Link href="/dashboard/viewCard/1">View Card </Nav.Link>
            <Nav.Link href="/dashboard/viewTransaction">View Transaction </Nav.Link>
            <Nav.Link href="/dashboard/addTransaction">Add Transaction </Nav.Link>
            <Nav.Link href="/">Log Out </Nav.Link>
            
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