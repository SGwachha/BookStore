import React from 'react'
import na1 from '../images/Arrival/na1.jpg'
import na2 from '../images/Arrival/na2.jpg'
import na3 from '../images/Arrival/na3.jpg'
import na4 from '../images/Arrival/na4.jpg'

function Arrival() {
    return (
        <div className="row-sec">
            <div className="row-top">
                <div className="title">New Arrivals</div>
                <div className="dropdown">View All</div>
            </div>
            <br />
            <div className='line-break' />
            <div className="images">
                <img src={na1} alt="" height="300px" width="250px" />
                <img src={na2} alt="" height="300px" width="250px" />
                <img src={na3} alt="" height="300px" width="250px" />
                <img src={na4} alt="" height="300px" width="250px" />
            </div>
        </div>
    )
}

export default Arrival