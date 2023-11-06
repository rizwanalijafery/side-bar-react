// import SidebarItem from './SidebarData'
// import items from "../Data/sidebar.json"
import React, {useState} from "react";
import Header from "./Header";
import SideMain from "./side-main";
export default function Dashboard(){

    return (
      <div >
        <Header ></Header>
          <SideMain ></SideMain>

      </div>
    )
}