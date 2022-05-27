import React from 'react'
import './products.css'
import first from '../images/Product/1811.jpg'
import second from '../images/Product/3982.jpg'
import third from '../images/Product/6373.jpg'
import fourth from '../images/Product/7052.jpg'
import fifth from '../images/Product/7846.jpg'
import sixth from '../images/Product/8300.jpg'
import seventh from '../images/Product/8523.jpg'
import eighth from '../images/Product/10708.jpg'
import ninth from '../images/Product/11056.jpg'
import tenth from '../images/Product/14580.jpg'
import eleventh from '../images/Product/22604.jpg'
import twelveth from '../images/Product/22607.jpg'


const Product = () => {
    return (
        <div className="main1">
            <div className="main-grid-container">
                <div className="grid-container">
                    <div className="book-cat">
                        <h3>sub genres</h3>
                        <p>lifestyle</p>
                        <p>art and design</p>
                        <p>sports</p>
                        <p>travel</p>
                        <p>poetry</p>
                    </div>
                    <div className="book-cat">
                        <h3>Language</h3>
                        <p>English</p>
                        <p>Chinese</p>
                        <p>French</p>
                        <p>German</p>
                        <p>Nepali</p>
                        <p>others</p>
                    </div>
                    <div className="book-cat">
                        <h3>price</h3>
                        <p>$ 1 - $ 500</p>
                        <p>$ 500 - $ 1000</p>
                        <p>$ 1000 and more </p>
                    </div>
                </div>
                <div className="grid-sec">
                    <div className="product-row">
                        <div className="product">
                            <div className="product-image">
                                <img src={first} alt='../first' height="250px" width="220px" />
                            </div>
                            <div className="product-info">
                                <h3>Clearing The Path</h3>
                                <p>Stephen</p>
                                <p>Rs. 1500</p>
                                <button className='btn2' onClick=" carted()">Add to Cart</button>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-image">
                                <img src={second} alt='../second' height="250px" width="220px" />
                            </div>
                            <div className="product-info">
                                <h3>Nepali Cook Book</h3>
                                <p>...</p>
                                <p>Rs. 600</p>
                                <button className='btn2' onClick=" carted()">Add to Cart</button>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-image">
                                <img src={third} alt='../third' height="250px" width="220px" />
                            </div>
                            <div className="product-info">
                                <h3>Kane</h3>
                                <p>Rick Riordan</p>
                                <p>Rs. 2500</p>
                                <button className='btn2' onClick=" carted()">Add to Cart</button>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-image">
                                <img src={fourth} alt='../fourth' height="250px" width="220px" />
                            </div>
                            <div className="product-info">
                                <h3>Why Medidate</h3>
                                <p>Mathieu Ricard</p>
                                <p>Rs. 1800</p>
                                <button className='btn2' onClick=" carted()">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="product-row">
                        <div className="product">
                            <div className="product-image">
                                <img src={fifth} alt='../fifth' height="250px" width="220px" />
                            </div>
                            <div className="product-info">
                                <h3>Vivekananda</h3>
                                <p>Prema</p>
                                <p>Rs. 1600</p>
                                <button className='btn2' onClick=" carted()">Add to Cart</button>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-image">
                                <img src={sixth} alt='../sixth' height="250px" width="220px" />
                            </div>
                            <div className="product-info">
                                <h3>Dalai Lama</h3>
                                <p>Lama</p>
                                <p>Rs. 3500</p>
                                <button className='btn2' onClick=" carted()">Add to Cart</button>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-image">
                                <img src={seventh} alt='../seventh' height="250px" width="220px" />
                            </div>
                            <div className="product-info">
                                <h3>Yoga</h3>
                                <p>Author</p>
                                <p>Rs. 500</p>
                                <button className='btn2' onClick=" carted()">Add to Cart</button>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-image">
                                <img src={eighth} alt='../eighth' height="250px" width="220px" />
                            </div>
                            <div className="product-info">
                                <h3>GorkhaNath</h3>
                                <p>Jataraj</p>
                                <p>Rs. 500</p>
                                <button className='btn2' onClick=" carted()">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="product-row">
                        <div className="product">
                            <div className="product-image">
                                <img src={ninth} alt='../ninth' height="250px" width="220px" />
                            </div>
                            <div className="product-info">
                                <h3>Indian Kitchen</h3>
                                <p>***</p>
                                <p>Rs. 300</p>
                                <button className='btn2' onClick=" carted()">Add to Cart</button>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-image">
                                <img src={tenth} alt='../tenth' height="250px" width="220px" />
                            </div>
                            <div className="product-info">
                                <h3>Love By Design</h3>
                                <p>Nora Roberts</p>
                                <p>Rs. 900</p>
                                <button className='btn2' onClick=" carted()">Add to Cart</button>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-image">
                                <img src={eleventh} alt='../eleventh' height="250px" width="220px" />
                            </div>
                            <div className="product-info">
                                <h3>Young and Truth</h3>
                                <p>***</p>
                                <p>Rs. 1500</p>
                                <button className='btn2' onClick=" carted()">Add to Cart</button>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-image">
                                <img src={twelveth} alt='../twelveth' height="250px" width="220px" />
                            </div>
                            <div className="product-info">
                                <h3>Think Like a Monk</h3>
                                <p>Jay Setty</p>
                                <p>Rs. 1000</p>
                                <button className='btn2' onClick=" carted()">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product