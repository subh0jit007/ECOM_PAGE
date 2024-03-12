import React from 'react'
import "./Hero.css";
import shoe_image from "../images/shoe_image.png"
import flipkart from "../images/flipkart.png";
import amazon from "../images/amazon.png"

function Hero() {
  return (
    <div className='hero'>

        {/* left section */}
        <div className='hero-left'>

            {/* heading starts */}
            <h1 className='headingLSS'>YOUR FEET DESERVE THE BEST</h1>
            {/* heading ends */}

            {/* para starts */}
          <pre className='paraLSS'>
    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO 
    HELP YOU WITH OUR SHOES.YOUR FEET DESERVE 
    THE BEST AND WE’RE HERE TO HELP YOU WITH OUR 
    SHOES.
   </pre>

            {/* para ends */}

            {/* buttons section starts */}
            <div className='buttonsLSS'>
                <button className='button1'>Shop Now</button>
                <button className='button2'>Category</button>
            </div>
            {/* buttons section ends */}

            {/* logo section starts */}
            <div className='shopLSS'>
                <p className='shopLSS-para'>Also Available On</p>
               <div className='shopLSS-icons'>
               <img src={flipkart} alt="" className='flipkart'/>
                <img src={amazon} alt=""  className='amazon'/>
               </div>
            </div>
            {/* logo section ends */}

        </div>

        {/* right section */}
        <div className='hero-right'>
          <img src={shoe_image} />
        </div>

    </div>
  )
}

export default Hero