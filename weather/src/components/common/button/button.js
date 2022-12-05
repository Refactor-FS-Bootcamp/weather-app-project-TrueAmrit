import React from "react";
import { ButtonStyle } from "./style";


const Button =(props)=>{
    const {data,handleClick} =props

    return(
        <ButtonStyle>
        <button className="btn-main" onClick={handleClick} >{data}</button>
        </ButtonStyle>
    ) 
}
export default Button