import "./App.css";

import {Router, Routes, Route } from "react-router";
import PrivateRotues from "./Utils/PrivateRoute";
import LoginPage from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route element={<LoginPage />} path={"/login"} />
            <Route element={<PrivateRotues />}>
              <Route element={<Dashboard />} path={"/dashboard"}/>
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
