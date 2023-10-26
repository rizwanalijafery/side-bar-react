// import SidebarItem from './SidebarData'
// import items from "../Data/sidebar.json"
import React, {useState} from "react";
import Header from "./Header";
import SideMain from "./side-main";
export default function Dashboard(){
    const [menuOpen , setmenuOpen] = useState(false)
    console.log("sidemain",menuOpen)
    const toggleMenubar = ()=> {
        setmenuOpen((prevState)=>!prevState)
    }
    return (
      <div >

        <Header toggleMenubar={toggleMenubar}></Header>
          <SideMain menuOpen={menuOpen}></SideMain>

      </div>
    )
}