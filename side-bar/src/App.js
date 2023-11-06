
// import Sidebar from './Components/Sidebar'
// import Main from "./Components/Main";
// import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import {BrowserRouter} from "react-router-dom";
import Routing from "./Components/Content";
// import Test from "./Components/test";
// import {useState} from "react";
import Content from "./Components/Content";
function App() {

    return(
        <div>

            <BrowserRouter>
                <Dashboard></Dashboard>
            </BrowserRouter>

        </div>

    )
}

export default App