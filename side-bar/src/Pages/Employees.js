import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import EmployeesGet from "./EmployeesGet";
import {Link} from "react-router-dom";
const Employees = ()=>
{
    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState([false]);
    const getProducts = async ()=> {
        try {
            setIsLoading(true);
            const response = await axios.get("http://localhost:3000/api/products");
            console.log(response.data);
            setProducts(response.data);
            setIsLoading(false);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getProducts();
    },[])
    return(

        <div>
            <Link to={ `/account/register/`} className={"edit-delete"} >Register</Link>
            <div className={"main-users"}>
                {isLoading ? (
                        "Loading"
                    ):
                    (
                        <>
                            {products.length> 0 ? (
                                <>
                                    {products.map((product,index)=>
                                    {

                                        return(
                                            <EmployeesGet key={index} product = {product}/>
                                        )
                                        //     <div  key={index} className={"bg-red-50"}>
                                        // {product.name}
                                        //     </div>
                                        //     )
                                    })}
                                </>
                            ):(
                                <div>
                                    there is no User
                                </div>
                            )}
                        </>
                    )
                }
            </div>
        </div>
    );
}
export default Employees;







