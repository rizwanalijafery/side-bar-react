import React, {useState} from "react";
// import * as buffer from "buffer";
//     const data= [
//     {
//     title:"ali",
//         id:"24",
//     email:"ali@gmail.com"
//     },
//     {
//         title:"ahmed",
//     id:"21",
//     email:"ahmed@gmail.com"
//     },
//         {
//             title: "jamal",
//             id: "30",
//             email: "jamal@gmail.com"
//         }
//     ];
//
// export  default function Test()
// {
//     const listItems =
//         data.map((product)=>
//             (
//             <li key={product.id}>
//                 {product.title}
//             </li>)
//          )
//     return(
//
//     <ul>
//         {listItems}
//     </ul>
// )
// }
// export default function Test()
// {
//     const [count,setcount] = useState(0)
//     function clicked()
//     {
//         setcount(count+1);
//
//     }
//     return(
//         <>
//         <button onClick={clicked}>
//             Click {count} times
//         </button>
//
//
//         </>
// );
// }
//........................
//...................add props
const Test=({counting,onClick})=>{
    console.log("rizwan")
    return(

        <button onClick={onClick}>
            you clicked {counting} times
        </button>
    )
}
export default Test