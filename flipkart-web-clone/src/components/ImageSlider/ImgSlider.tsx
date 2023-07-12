import { useEffect, useState } from "react"
import './ImgSlider.css'

interface imageSlider {
  sliderValue: string[]

}

export default function ImgSlider({sliderValue}: imageSlider) {
  const[index, setIndex] = useState(0);

  const Callindex = () => {
    setIndex(index === sliderValue.length-1?0:index+1);
  };
useEffect(() => {
  setTimeout(Callindex, 2500);
});

  return (
    <div className="image-slider-container">
      {/* mobile-view */}
      <div className="slide-section">
        {sliderValue?.map((item) => (
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
      {/* desktop-view */}

    </div>
  )
}


