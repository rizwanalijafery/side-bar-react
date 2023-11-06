import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import toastifyEs from "toastify-js/src/toastify-es";
const EditUser = ()=> {
    let {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({
        Name: "",
        FatherName: "",
        EmailAddress: "",
        MobileNumber: "",
        Password: "",
        Address: "",
    });
    const navigate = useNavigate();

    const getProducts = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`http://localhost:3000/api/products/${id}`); // Fixed the URL
            const data = response.data;

            setProduct({
                Name: data.Name,
                FatherName: data.FatherName,
                EmailAddress: data.EmailAddress,
                MobileNumber: data.MobileNumber,
                Password: data.Password,
                Address: data.Address,

            });
            setIsLoading(false);
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    const updateUser = async (e) => {

        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.put(`http://localhost:3000/api/products/${id}`, product);
            alert("update a user");
            navigate("/account/Employees");
        } catch (error) {
            console.log(error.message)
        }

    }
    useEffect(() => {
        getProducts();
    }, [id]) // Include 'id' as a dependency
    return (
        <>
        {isLoading ? ("Loading") : (

                        <div className={"form"}>

                            <form onSubmit={updateUser}>
                                <h1>Edit Profile</h1><br/><br/>
                                <div>
                                    <label>Enter your Name</label><br/><br/>
                                    <input type={"text"} value={product.Name} placeholder={"enter name"}
                                           onChange={(e) => setProduct({product, Name: e.target.value})}/>
                                </div>
                                <br/><br/>
                                <div>
                                    <label>Enter your Father Name</label><br/><br/>
                                    <input type={"text"} value={product.FatherName} placeholder={"enter father name"}
                                           onChange={(e) => setProduct({product, FatherName: e.target.value})}/>
                                </div>
                                <br/><br/>
                                <div>
                                    <label>Enter your Mobile Number</label><br/><br/>
                                    <input type={"number"} value={product.MobileNumber} placeholder={"enter Mobile"}
                                           onChange={(e) => setProduct({product, MobileNumber: e.target.value})}/>
                                </div>
                                <br/><br/>
                                <div>

                                    <label>Enter your Email Address</label><br/><br/>
                                    <input type={"text"} value={product.EmailAddress} placeholder={"enter email"}
                                           onChange={(e) => setProduct({product, EmailAddress: e.target.value})}/>
                                </div>
                                <br/><br/>
                                <div>

                                    <label>Enter your Password</label><br/><br/>
                                    <input type={"password"} value={product.Password} placeholder={"enter password"}
                                           onChange={(e) => setProduct({product, Password: e.target.value})}/>
                                </div>
                                <br/><br/>
                                <div>
                                    <label>Enter your Address</label><br/><br/>
                                    <input type={"text"} value={product.Address} placeholder={"enter address "}
                                           onChange={(e) => setProduct({product, Address: e.target.value})}/>

                                </div>
                                <br/>
                                {!isLoading && (<button className={"registration-button"}>Update</button>)}

                            </form>
                        </div>

                )
        }
        </>
        )

}
export default EditUser;