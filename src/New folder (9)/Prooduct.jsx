import React from "react"
import {useState} from "react"
import Payment from "./Paaymeent.jsx"
const Product=()=>{
    let[count,setCount]=useState(0)
    return(
        <div className="Product">
            <div>
            
            <div className="imgblock">
                <img id="img" src="data:image/jpeg;base64,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" alt=""/>
            </div>
            <div className="btnblock">
            <button onClick={()=>{
                // if(count>0)
                // {
                //     setCount(count-1)
                // }
                // else{
                //     alert("should be more than one")
                // }
                {(count)>1?setCount(count-1):alert("should be more than 1")} // instead of if else i can use turnery operator//
            }}>--</button>
            <h1 id="number" >{count}</h1>
            <button onClick={()=>{
                setCount(count+1)
            }}>++</button>

            </div>

            </div >
            
            <Payment data={count}/> 
            {/*pass the data from here*/}
        </div>
    )
}
export default Product