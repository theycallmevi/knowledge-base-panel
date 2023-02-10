import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/404";
import Dashboard from "../pages/dashboard/Dashboard";
import SignIn from "../pages/user/SignIn";
import SignUp from "../pages/user/SignUp";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/error404" element={<PageNotFound />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      ;
    </>
  );
}
