import { Link } from "react-router-dom";

function AdminLogin() {
    return <>
    <div>
        <div>
            <form id="login-form">
                <input id="username" name="username" />
                <input id="password" name="password" />
                <button><Link to={`/dashboard`}>Login</Link></button>
            </form>
        </div>
        <p>Login to admin portal</p>
    </div>
    </>
}

export default AdminLogin;