import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/About";
import General from "../Pages/General"
import FAQ from "../Pages/FAQ";
// import Main from "./Main";
import Account from "../Pages/Account";
// import '../index.css';
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Forgot from "../Pages/ForgotPassword";
import Reset from "../Pages/ResetPassword";
import Main from "./Main";
import Employees from "../Pages/Employees";
import EditUser from "../Pages/EditUser";
import DeleteUser from "../Pages/DeleteUser";

function Content() {
    return (
        <div className={'main-content'}>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/general'} element={<General/>}/>
                <Route path={'general/home'} element={<Home/>}/>
                <Route path={'general/about'} element={<About/>}/>
                <Route path={'general/contact'} element={<Contact/>}/>
                 <Route path={'general/faq'} element={<FAQ/>}/>
                <Route path={ '/account'} element = {<Account/>}/>
                <Route path={ '/account/login'} element = {<Login/>}/>\
                <Route path={ '/account/Employees'} element = {<Employees/>}/>
                <Route path={ '/account/Employees/edit/:id'} element = {<EditUser/>}/>
                <Route path={ '/account/Employees/delete/:id'} element = {<DeleteUser/>}/>
                <Route path={ '/account/register'} element = {<Register/>}/>
                <Route path={ 'account/forgot-password'} element = {<Forgot/>}/>
                <Route path={ 'account/reset-password'} element = {<Reset/>}/>
                {/*<Route path={ '/profile'} element = {<Profile/>}/>*/}
                {/*<Route path={ '/settings/account'} element = {<Account/>}/>*/}
                {/*<Route path={ '/settings/billing/payment'} element = {<Payment/>}/>*/}
                {/*<Route path={ '/settings/billing/subscription'} element = {<Subscribe/>}/>*/}
                {/*<Route path={ '/settings/notifications'} element = {<Notification/>}/>*/}
                {/*<Route path={ '/logout'} element = {<Logout/>}/>*/}
                {/*<Route path={ 'advance/search'} element = {<Search/>}/>*/}
                {/*<Route path={ 'advance/history'} element = {<History/>}/>*/}
                {/*<Route path={ '/support'} element = {<Support/>}/>*/}
                {/*<Route path={ '/report-bug'} element = {<Bug/>}/>*/}


            </Routes>
        </div>
    );
}

export default Content;