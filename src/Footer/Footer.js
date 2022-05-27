import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
      <div className="heyFooter">
        <div className="text-row">
          <div className="txt">
            <p>The Booktown is an online bookstore, with an aim to create the largest community of book readers in Nepal. News and events At Booktown, you can browse and buy books online at the lowest everyday prices..</p>
          </div>
        </div>
        <div className="text-row">
          <div className="flink">
            <a className="a" href="/">Home</a><br />
            <a className="a" href="/a">Product</a><br />
            <a className="a" href="/blog">Blog</a><br />
            <a className="a" href="/research">Research</a><br />
            <a className="a" href="/Contact">Contact Us</a><br />
            <a className="a" href="/payments">Payments</a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer

