import React, { useEffect, useState } from 'react'
import './style.css'
const ProgressBar = ({bgColor,value}) => {
    const [width,setWidth] = useState(0)
    useEffect(() => {
        let animationFrame;
        let animationFrame2;
        animationFrame = requestAnimationFrame(() => {
            animationFrame2 = requestAnimationFrame(() => {
                setWidth(value)
            })
        })

         // Cleanup function to cancel any pending animation frames
         return () => {
            cancelAnimationFrame(animationFrame);
            cancelAnimationFrame(animationFrame2);
        };
    },[value])
  return (
    <div className='progressBar-container'>
        <span>{value}%</span>
        <div className='progressBar' style={{width:`${width}%`}}></div>
    </div>
  )
}

export default ProgressBar