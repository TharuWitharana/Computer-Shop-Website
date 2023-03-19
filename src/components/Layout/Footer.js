import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">

<div className="l1">
<h4>Techy Bubble</h4>
</div>

<div>
  <span className="l2">Contact </span> <span className="l3">0362287782 </span> 
</div>   

<div>
  <span className="l2">Address </span> <span className="l5">Ginigathhena Road,Kithulgala & Main street,Galle </span> 
</div>   

<div>
  <span className="l2">Email </span> <span className="l4">techybubbleforu@gmail.com </span> 
</div>  


      <p className="text-center mt-3">
        <Link to="/about">About</Link> <Link to="/contact">Contact</Link> <Link to="/policy">Privacy Policy</Link>
      </p>

    </div>
  )
}

export default Footer
