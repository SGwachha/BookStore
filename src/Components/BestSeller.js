import React from 'react'
import bs1 from '../images/BestSeller/bs1.jpg'
import bs2 from '../images/BestSeller/bs2.jpg'
import bs3 from '../images/BestSeller/bs3.jpg'
import bs4 from '../images/BestSeller/bs4.jpg'

function BestSeller() {
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
                    <img src={bs1} alt="" height="300px" width="250px" />
                    <img src={bs2} alt="" height="300px" width="250px" />
                    <img src={bs3} alt="" height="300px" width="250px" />
                    <img src={bs4} alt="" height="300px" width="250px" />
                </div>
            </div>
        </div>
    )
}

export default BestSeller