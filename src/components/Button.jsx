import styled from "styled-components"



// export const Button=({children,onClick})=>{
//     return(
//         <button onClick={onClick}>{children}</button>
//     )
// }


export const Button=styled.button `
border:0px;
padding: 5px;
background-color: #f8dede;
margin: 40px;

&:hover{ background-color:black;
color:white}
`;