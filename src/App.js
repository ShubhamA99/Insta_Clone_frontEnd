import React from "react";
import GenericComponent from "./Components/GenericComponet.js/GenericComponent";
import Profile from "./Components/Profile/Profile";
import { Route, Routes } from "react-router";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <GenericComponent>
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </GenericComponent>
    </>
  );
}

export default App;
