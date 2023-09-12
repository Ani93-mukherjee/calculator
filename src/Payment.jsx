import React from 'react'

const Payment = (props) => {
  return (
    <div id='payment' ><p>The Amount of {props.data}</p> <b>Mobile is ₹{props.data*42500}</b></div>
  )
}

export default Payment