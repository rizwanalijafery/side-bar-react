import SidebarItem from './SidebarData'
import items from "../Data/sidebar.json"
export default function Sidebar(){

    return (
        <div className="sidebar">
            { items.map((Item, index) => <SidebarItem key={index} item={Item} />) }
        </div>
    )
}