import React, { useState } from "react"
import {Link} from "react-router-dom";
export default function SidebarItem({item,openbar})
{
    console.log('SidebarItem',openbar)
    const [open, setOpen] = useState(false)
        return(
    <div className={`sidebar ${openbar ? 'opened' : ''}`}>
        {item.childrens ? ( <div className={open ? "sidebar-item open" : "sidebar-item"}>
                    <div className="sidebar-title">

                    <span>
                        <Link to={item.path}>
                        {item.icon && <i className={item.icon}></i>}
                            {item.title}</Link>
                    </span>
                        <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                    </div>
                    <div className="sidebar-content">
                        {item.childrens.map((child, index) => <SidebarItem key={index} item={child}/>)}
                    </div>
                </div>

            ):(
                <a href={item.path || "#"} className="sidebar-item plain">
                    {item.icon && <i className={item.icon}></i>}
                    <Link to={item.path}>{item.title}</Link>
                </a>

            )}

      </div>
)
}




