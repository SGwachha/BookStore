import React from 'react'
import './ResearchPage.css'
import m1 from '../images/Research/m1.png'
import m2 from '../images/Research/m2.png'

const research = () => {
  return (
    <div className="research-row">
      <div className="research">
        <h3 className='MimeHomePage'>Mine Home Page</h3>
        <img src={m1} alt='./m1' height='450' width='700' />
        <h3 className='WebHomePage'>Web Home Page</h3>
        <img src={m2} alt='./m2' height='450' width='700' />
      </div>
    </div>
  )
}

export default research