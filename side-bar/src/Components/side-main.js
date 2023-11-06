// import SidebarItem from './SidebarData'
// import items from "../Data/sidebar.json"
import React from "react";
import Sidebar from "./Sidebar";
// import Main from "./Main";
import '../index.css'
import Content from "./Content";
import Main from "./Main";

export default function SideMain(){

    return (
        <div className={"main-container"}>
      <div className={"sidebar-menu"}>

         <Sidebar ></Sidebar>
          <Content></Content>
          {/*<Main></Main>*/}
      </div>
        </div>
    )
}