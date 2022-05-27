import React from 'react'
import nepali1 from '../images/NepaliBooks/nepali1.jpg'
import nepali2 from '../images/NepaliBooks/nepali2.jpg'
import nepali3 from '../images/NepaliBooks/nepali3.jpg'
import nepali4 from '../images/NepaliBooks/nepali4.jpg'

function NepaliBooks () {
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
                    <img src={nepali1} height="300px" width="250px" />
                    <img src={nepali2} height="300px" width="250px" />
                    <img src={nepali3} height="300px" width="250px" />
                    <img src={nepali4} height="300px" width="250px" />
                </div>
            </div>
        </div>
  )
}

export default NepaliBooks