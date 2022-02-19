import React, { useEffect, useRef } from 'react'
import "./bg.css"
import lottie from 'lottie-web';
const Background = () => {

    const containerlot = useRef(null)

    useEffect(() => {
      lottie.loadAnimation({
        container: containerlot.current,
        renderer: 'svg',
        loop: true,
        animationData: require('./birdflock.json')
      })
    }, [])

  return (
    <>
        <div className='container1'>
            <div className='logo'>
                <img src="https://krishinetwork.com/img/kn_logo.svg" alt="" srcset="" />
            </div>
            <div className='containerlot' ref={containerlot}>
           
            </div>
            <div className='joinus'>Join India's Biggest <br/> <span>Farmers' Community!</span></div>
            <div className='bottom'>
                <div className='img1'>
                    <img  src="./images/img1.svg"  alt="" className='img1o'/>
                </div>
                <div className='img2'>
                    <img src="./images/img2.svg" alt="" srcset=""  className='img2o'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Background