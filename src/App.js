import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import utils
import withLayout from "./utils/withLayout";
// Import Layout
import DashLayout from "./layout/DashLayout";
import HomeLayout from "./layout/HomeLayout";
// Import Pages
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import User from "./pages/user";
import CreateUser from "./pages/user/createUser";
import Employee from "./pages/employee";
import Menus from "./pages/menu";
import createMenu from "./pages/menu/createMenu";
import Product from "./pages/product";
import Role from "./pages/role";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={withLayout(HomeLayout, Homepage)} />
        <Route path="/login" element={withLayout(HomeLayout, Login)} />

        {/* Dashboard */}
        <Route path="/dashboard" element={withLayout(DashLayout, Dashboard)} />
        <Route path="/user" element={withLayout(DashLayout, User)} />
        <Route
          path="/user/formuser"
          element={withLayout(DashLayout, CreateUser)}
        />
        <Route path="/employee" element={withLayout(DashLayout, Employee)} />
        <Route
          path="/menu/formMenu"
          element={withLayout(DashLayout, createMenu)}
        />
        <Route path="/menu" element={withLayout(DashLayout, Menus)} />
        <Route path="/product" element={withLayout(DashLayout, Product)} />
        <Route path="/role" element={withLayout(DashLayout, Role)} />
      </Routes>
    </Router>
  );
}

export default App;
