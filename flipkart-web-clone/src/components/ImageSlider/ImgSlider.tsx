import { useEffect, useState } from "react"
import './ImgSlider.css'

interface imageSlider {
  sliderValue: string[]

}

export default function ImgSlider({sliderValue}: imageSlider) {
  const[index, setIndex] = useState(0);
  const [trans, setTrans] = useState(0.3);
  const [time, setTime] = useState(2000);

  const Callindex = () => {
    if (index == sliderValue.length - 1) {
      setTrans(0);
      setTime(10);
    } else {
      setTrans(0.3);
      setTime(2000);
    }
    setIndex(index === sliderValue.length-1?0:index+1);
  };
  useEffect(() => {
  setTimeout(Callindex, time);
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
              transition: `transform ease-out ${trans}s`,
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


