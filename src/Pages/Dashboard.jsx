import { Outlet, Link } from "react-router-dom";

function Dashboard() {
    return <div>
        <nav>
            <span id="view"><Link to={`/dashboard/view/1`}>View</Link></span>
            <span id="create"><Link to={`/dashboard/create`}>Create</Link></span>
            <span id="logout"><Link to={`/`}>Logout</Link></span>
        </nav>
        <div id="details">
            <Outlet />
        </div>

    </div>
}

export default Dashboard;