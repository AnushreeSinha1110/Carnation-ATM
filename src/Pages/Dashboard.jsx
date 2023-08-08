import { Outlet } from "react-router-dom";

function Dashboard() {
    return <div>
        <nav>
            <span id="view"><a href="/dashboard/view/1">View</a></span>
            <span id="create"><a href="/dashboard/create">Create</a></span>
            <span id="logout"><a href="/">Logout</a></span>
        </nav>
        <div id="details">
            <Outlet />
        </div>

    </div>
}

export default Dashboard;