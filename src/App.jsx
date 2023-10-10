import React from "react";
import Home from "./components/Home";
import UsersList from "./components/UsersList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<CreateUser/>}></Route>
          <Route path="/users" element={<UsersList/>}></Route>
          <Route path="/edit/:id" element={<EditUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
