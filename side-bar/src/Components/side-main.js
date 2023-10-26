// import SidebarItem from './SidebarData'
// import items from "../Data/sidebar.json"
import React from "react";
import Sidebar from "./Sidebar";
// import Main from "./Main";
import '../index.css'
import Content from "./Content";

export default function SideMain({menuOpen}){
    console.log("sidemain",menuOpen)
    return (
        <div className={"main-container"}>
      <div className={"sidebar-menu"}>

         <Sidebar ismenubaropen = {menuOpen}></Sidebar>
          <Content></Content>
      </div>
        </div>
    )
}