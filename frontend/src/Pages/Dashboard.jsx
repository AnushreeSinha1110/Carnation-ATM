import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


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
            <Nav.Link href="/dashboard/card"> Add Card </Nav.Link>
            <Nav.Link href="/dashboard/viewCard/1">View Card </Nav.Link>
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

export default Dashboard;