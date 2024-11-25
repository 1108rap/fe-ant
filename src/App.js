import React from "react";
// import UserList from "./components/userList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Homepage from "./pages/homepage";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <UserList />
    //   </header>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
