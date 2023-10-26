// import SidebarItem from './SidebarData'
// import items from "../Data/sidebar.json"
import React, {useState} from "react";
import Sidebar from "./Sidebar";
// import Sidebar from "./Sidebar";
// const [navOpen , setNavOpen] = useState(false)
// const toggleNav = () =>{
//     setNavOpen(!navOpen)
// }
export default function Header({toggleMenubar}){
// const {toggleMenubar} = props
    return (
      <div className={'main-container'}>
          <div className="header">
          <div className="leftHeader">
              <h1>Dash Board</h1>
              <a href = "#"><i className="bi bi-list" onClick={()=> toggleMenubar()}></i></a>

          </div>
              <div className="centerheader">
                  <h1>Cloudtek</h1>

              </div>
          <div className="rightHeader">
              <h1>Login</h1>
              <a href = "#"><i className="bi bi-person-fill"></i></a>
          </div>

      </div>
      </div>
    )
}