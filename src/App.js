import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import User from "./pages/user";
import CreateUser from "./pages/user/createUser";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/formuser" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
