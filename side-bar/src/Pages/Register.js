import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Register = ({product})=>
{
    const [name,setName ] = useState("");
    const [fatherName,setFatherName ] = useState("");
    const [mobileNumber,setMobileNumber ] = useState("");
    const [emailAddress,setEmailAddress ] = useState("");
    const [password,setPassword ] = useState("");
    const [address,setAddress ] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();
    const saveUser = async (e)=>
    {
        e.preventDefault();
        if(name === "" || fatherName === ""|| mobileNumber==="" || emailAddress === "" || password === "" || address === "")
        {
            alert("please fill out all input completely");
            return;
        }
        try{
            setIsLoading(true);
            const response = await axios.post('http://localhost:3000/api/products',{Name:name, FatherName:fatherName, MobileNumber:mobileNumber,EmailAddress:emailAddress,Password:password,Address:address})
            alert(`save ${response.data.Name} successfully`);
            setIsLoading(false);
            navigate("/account/Employees")
        }
        catch (error) {
            console.log(error)
            setIsLoading(false);
        }
    }
    // const [name,setName ] = useState("");
    return(

        <div className={"form"}>

            <form onSubmit={saveUser}>
                <h1>User Registration</h1><br/><br/>
                <div>
                    <label>Enter your Name</label><br/><br/>
                    <input type={"text"} value={name} placeholder={"enter name"} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <br/><br/>
                <div>
                    <label>Enter your Father Name</label><br/><br/>
                    <input type= {"text"} value={fatherName} placeholder={"enter father name"} onChange={(e)=>setFatherName(e.target.value)}/>
                </div>
                <br/><br/>
                <div>
                    <label>Enter your Mobile Number</label><br/><br/>
                    <input type={"number"} value={mobileNumber} placeholder={"enter Mobile"} onChange={(e)=>setMobileNumber(e.target.value)}/>
                </div>
                <br/><br/>
                <div>

                    <label>Enter your Email Address</label><br/><br/>
                    <input type={"text"} value={emailAddress} placeholder={"enter email"} onChange={(e)=>setEmailAddress(e.target.value)}/>
                </div>
                <br/><br/>
                <div>

                    <label>Enter your Password</label><br/><br/>
                    <input type={"password"} value={password} placeholder={"enter password"} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <br/><br/>
                <div>
                    <label>Enter your Address</label><br/><br/>
                    <input type={"text"} value={address} placeholder={"enter address "} onChange={(e)=>setAddress(e.target.value)}/>

                </div>
                <br/>
                {!isLoading && (<button className={"registration-button"}>Save</button>)}

            </form>
        </div>
    )
}
export default Register;