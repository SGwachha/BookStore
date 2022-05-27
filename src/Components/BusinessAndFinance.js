import React from 'react'
import baf1 from '../images/BusinessandFinance/baf1.jpg'
import baf2 from '../images/BusinessandFinance/baf2.webp'
import baf3 from '../images/BusinessandFinance/baf3.webp'
import baf4 from '../images/BusinessandFinance/baf4.webp'

function BusinessAndFinance () {
  return (
    <div className="row-sec">
            <div className="row-top">
                <div className="title">Best Seller</div>
                <div className="dropdown">View All</div>
            </div>
            <br />
            <div className="line-break" />
            <div>
                <div className="images">
                    <img src={baf1} alt="" height="300px" width="250px" />
                    <img src={baf2} alt="" height="300px" width="250px" />
                    <img src={baf3} alt="" height="300px" width="250px" />
                    <img src={baf4} alt="" height="300px" width="250px" />
                </div>
            </div>
        </div>
  )
}

export default BusinessAndFinance