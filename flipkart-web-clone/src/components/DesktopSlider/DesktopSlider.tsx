import React, { useEffect, useState } from 'react'
import './DesktopSlider.css'
interface desktopSlider {
    desktopValue: string[]
}

export default function DesktopSlider({desktopValue}: desktopSlider) {
const[index, setIndex] = useState(0);

const Callindex = () => {
    setIndex(index === desktopValue.length-1?0:index+1);
};
useEffect(() => {
    setTimeout(Callindex, 2500);
});


  return (
    <div className='desktop-slider-container'>
        <div className="desktop-slide-section">
        {desktopValue?.map((item) => (
          <div 
           className="image-carousel"
            key={item}
            style={{
              transform: `translateX(${-100 * index}%)`,
              transition: "transform ease-out 0.45s",
            }}
            >
              <img src={item} alt="Image" />
          </div>
        ))}
        </div>
    </div>
  )
}
