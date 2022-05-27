import React from 'react'
import './Payments.css'
import khalti from '../images/khalti.png'

const Payments = () => {
  return (
    <div className='khalti'>
      <div className="link">
        <img src={khalti} alt="../khalti" />
        <a className="khalti-link" href="https://khalti.com/?csrt=15457646558932103577">Khalti payments</a>
      </div>
    </div>  
  )
}

export default Payments