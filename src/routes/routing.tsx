import { Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/404";
import DashboardChanges from "../pages/dashboard/dashboardchanges";
import Employee from "../pages/employee/Employee";
import Homepage from "../pages/homepage/Homepage";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/error404" element={<PageNotFound />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/example" element={<DashboardChanges />} />
        <Route path="/table" element={<Employee />} />
      </Routes>
    </>
  );
}
