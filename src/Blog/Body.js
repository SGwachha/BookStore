import React from 'react'
import './Blog.css'
import europe from '../images/blog/ab.jpg'
import blogs from '../images/blog/blog1.jpeg'
import blogs1 from '../images/blog/blog2.jpeg'
import blogs2 from '../images/blog/aa.webp'
import blogs3 from '../images/blog//blog3.jpeg'
import blogs4 from '../images/blog/blog4.jpeg'
import blogs5 from '../images/blog/bac.jpg'

function Body() {
  return (
    <div className='body'>
      <div className="content">
        <div className="top-img">
          <img src={europe} alt='../europe' height='800px' />
        </div>
        <div className="europe">
          <h2>Buying books from Europe?</h2>
          <p>December 4</p>
        </div>
      </div>
      <div className="blog-row">
        <div className="blog-img">
          <img src={blogs} alt='../blogs' height='400px' width='100%' />
          <div className="desc">
            <p className='blog-desc'>How to Spend a nice evening in pokhara</p>
            <p className='blog-date'>June 17</p>
          </div>
        </div>
        <div className="blog-img">
          <img src={blogs1} alt='../blogs1' height='400px' width='100%' />
          <div className="desc">
            <p className='blog-desc'>A Flower for the birthday boy</p>
            <p className='blog-date'>September 12</p>
          </div>
        </div>
        <div className="blog-img">
          <img src={blogs2} alt='../blogs2' height='400px' width='100%' />
          <div className="desc">
            <p className='blog-desc'>Head above the clouds</p>
            <p className='blog-date'>September 12</p>
          </div>
        </div>
      </div>
      <div className="blog-row">
        <div className="blog-img">
          <img src={blogs3} alt='../blogs3' height='400px' width='100%' />
          <div className="desc">
            <p className='blog-desc'>Playing video games with your siblings at night</p>
            <p className='blog-date'>october 22</p>
          </div>
        </div>
        <div className="blog-img">
          <img src={blogs4} alt='../blogs4' height='400px' width='100%' />
          <div className="desc">
            <p className='blog-desc'>Peaceful house across the town seems Haunted</p>
            <p className='blog-date'>November 12</p>
          </div>
        </div>
        <div className="blog-img">
          <img src={blogs5} alt='../blogs5' height='400px' width='100%' />
          <div className="desc">
            <p className='blog-desc'>A book has mind of its own</p>
            <p className='blog-date'>November 12</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Body