
// import Sidebar from './Components/Sidebar'
// import Main from "./Components/Main";
// import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import {BrowserRouter} from "react-router-dom";
import Routing from "./Components/Content";
// import Test from "./Components/test";
// import {useState} from "react";
function App() {


    return(
        <div>
            <BrowserRouter>
                <Routing></Routing>
            <Dashboard></Dashboard>

            </BrowserRouter>
            {/*<Header></Header>*/}
            {/*<Sidebar />*/}
            {/*<Main/>*/}
        </div>

    )
}

export default App