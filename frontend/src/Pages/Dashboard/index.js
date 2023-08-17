import { Outlet } from "react-router-dom";
import Login from "../../Components/Login/Login";
import ResponsiveAppBar from "./ResponsiveAppBar";

export default function Dashboard(props) {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Carnation-ATM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/dashboard/create">Create Customer</Link>
                <Link to="/dashboard/view/1">View Customer </Link>
                <Link to="/dashboard/addaccount">Add Account </Nav.Link>
                <Link to="/dashboard/viewaccount">View Account </Nav.Link>
                <Link to="/dashboard/viewaccountbycid">View Account By Cid</Nav.Link>
                <Link to="/dashboard/card"> Add Card </Nav.Link>
                <Link to="/dashboard/viewCard/1">View Card </Nav.Link>
                <Link to="/dashboard/viewTransaction">View Transaction </Nav.Link>
                <Link to="/dashboard/addTransaction">Add Transaction </Nav.Link>
                <Link to="/">Log Out </Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
            <div id="details">
               <Outlet />
           </div>
    
        </>
    )
}