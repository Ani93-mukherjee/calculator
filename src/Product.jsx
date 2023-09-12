import React, { useState } from 'react'
import Payment from './Payment'
import './global.css'

const Product = () => {
    const[count,setCount]=useState(1)
  return (
    <>
    <div id='block'>
    <div id='img'>
    <img src='https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-optimized.jpeg' height={400} width={297} alt=''/>

    </div>
    <div id='img-block'><h4>APPLE iPHONE 14 PRO</h4> <br/>
    <h6>₹ 42,500/-</h6><br/>
    <h5><i>Samsung.com</i></h5>
    <h5>and 10 + stores</h5>
    <p>6.6 inches screen</p>
    <h5>64-128 GB </h5></div>
    </div>

    <div id='count'>
    <button onClick={()=>{
      {(count)>1?setCount(count-1):alert("should be more than 0")}
  }}>--</button>

  <h1>{count}</h1>

  <button onClick={()=>{
      setCount(count+1)
  }}>++</button>
    </div>
    

    <Payment data={count}/>
    </>
  )
}

export default Product