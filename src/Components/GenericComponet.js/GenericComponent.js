import React from "react";
import NavBar from "../NavigationBar/SideBar/SideBar";
import "./GenericComponent.css";

function GenericComponent(props) {
  return (
    <>
      <NavBar />
      <div>{props.children}</div>
    </>
  );
}

export default GenericComponent;
