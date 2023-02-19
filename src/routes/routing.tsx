import { Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/404";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardChanges from "../pages/dashboard/dashboardchanges";
import Homepage from "../pages/homepage/Homepage";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import SignUp from "../pages/user/SignUp";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/error404" element={<PageNotFound />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/example" element={<DashboardChanges />} />
      </Routes>
    </>
  );
}
