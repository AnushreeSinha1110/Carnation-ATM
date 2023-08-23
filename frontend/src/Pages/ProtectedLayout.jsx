import { Link, Navigate, Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";

export const ProtectedLayout = () => {
    const token = localStorage.getItem("token");
    console.log(`Current user token: ${token}`)

  if (!token || token===undefined) {
    return <Navigate to="/" />;
  }

  return (
    <div className="DashBack">
      <Dashboard />
      <Outlet />
    </div>
  );
};
