// import SidebarItem from './SidebarData'
// import items from "../Data/sidebar.json"
import React, {useState} from "react";
import Sidebar from "./Sidebar";
import {Link} from "react-router-dom";
// import Sidebar from "./Sidebar";
// const [navOpen , setNavOpen] = useState(false)
// const toggleNav = () =>{
//     setNavOpen(!navOpen)
// }
export default function Header(){
// const {toggleMenubar} = props
    return (
      <div className={'main-container'}>
          <div className="header">
          <div className="leftHeader">
              <h1>Dash Board</h1>
              <a href = "#"><i className="bi bi-list" ></i></a>

          </div>
              <div className="centerheader">
                  <h1>Cloudtek</h1>

              </div>
          <div className="rightHeader">
              <Link to={"/account/login"}><h1>Login</h1></Link>
              <Link to={"/account/login"}><i className="bi bi-person-fill"></i></Link>
          </div>

      </div>
      </div>
    )
}