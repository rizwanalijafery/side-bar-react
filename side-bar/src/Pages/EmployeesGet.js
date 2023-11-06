import React from "react";
import {Link,useNavigate} from "react-router-dom";
import EditUser from "./EditUser";
import axios from "axios";

 function EmployeesGet({product})
{
    const navigate = useNavigate();
    const deleteProduct =async (id)=>{
        try{
            await axios.delete(`http://localhost:3000/api/products/${id}`)
            alert("delete product successfully")
            navigate('/account/Employees')
        }catch (error){
       console.log(error.message)
        }

    }
    return(
<>

            <div className={"single-user"}>
                <h3>Name : {product.Name} </h3>
                <h3>Father Name : {product.FatherName} </h3>
                <h3>Email Address : {product.EmailAddress} </h3>
                <h3>Password : {product.Password} </h3>
                <h3>Mobile Number : {product.MobileNumber} </h3>
                <h3>Address: {product.Address}</h3><br/><br/>
                <Link to={ `/account/Employees/edit/${product._id}`} className={"edit-delete"} >Edit</Link>
                <Link to={`/account/Employees/${product._id}`} className={"edit-delete"} onClick={()=>deleteProduct(product._id)}>Delete</Link>


        </div>

</>
    )
}
export default EmployeesGet;



// <button type="button" onclick="addInputFields()">Add More</button>
// <button type="submit">Submit</button>
// </form>
//
// <script>
//     function addInputFields() {
//     const formFields = document.getElementById('formFields');
//     const div = document.createElement('div');
//
//     div.innerHTML = `
//                 <div>
//                     <label>Name:</label>
//                     <input type="text" name="name[]" required>
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input type="email" name="email[]" required>
//                 </div>
//             `;
//
//     formFields.appendChild(div);
// }