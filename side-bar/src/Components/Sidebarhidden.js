import SidebarItem from './SidebarData'
import items from "../Data/sidebar.json"
export default function Hidden(){
    return (
        <div className="hidden">
            { items.map((Item, index) => <SidebarItem key={index} item={Item} />) }
        </div>
    )
}