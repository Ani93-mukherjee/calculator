import React from "react"


const Payment=(props)=>{
    return(
        <div className="Payment">
            <h4>Total Amount Is <p>${props.data* 1000}</p></h4>
        </div>
    )
}
export default Payment