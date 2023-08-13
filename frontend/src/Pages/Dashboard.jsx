import { Outlet, Link } from "react-router-dom";

function Dashboard() {
    return <div>
        <nav>
            <span id="view"><Link to={`/dashboard/view/1`}>View</Link></span>
            <span id="create"><Link to={`/dashboard/create`}>Create</Link></span>
            <span id="Add Account"><Link to={`/dashboard/addaccount`}>Add Account</Link></span>
            <span id="logout"><Link to={`/`}>Logout</Link></span>
            <span id="card"><Link to={`/dashboard/card`}>Card Details</Link> </span>
            <span id="cardView"><Link to={`/dashboard/viewCard/1`}>ViewCard Details</Link> </span>

        </nav>
        <div id="details">
            <Outlet />
        </div>

    </div>
}

export default Dashboard;