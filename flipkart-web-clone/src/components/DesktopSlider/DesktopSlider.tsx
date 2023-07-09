import React, { ImgHTMLAttributes, InputHTMLAttributes, useEffect, useRef, useState } from "react";
import "./DesktopSlider.css";
import leftRight from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/left-right.svg";

interface desktopSlider {
  desktopValue: string[];
}

export default function DesktopSlider({ desktopValue }: desktopSlider) {
  const image = useRef(document.createElement("div"));
  const arrowRight = useRef(document.createElement("div"));
  const arrowLeft = useRef(document.createElement("div"));
  const [index, setIndex] = useState(0);
  const [trans, setTrans] = useState(0.3)
  const[time, setTime] = useState(2000)
  // const [foo,setFoo]= useState(false)

  const eventRight = () => {
    image.current.style.transform = `translate($(2)%)`
    arrowLeft.current.style.display = "flex"
    arrowLeft.current.style.display = "none";
    image.current.style.transition = "transform ease-in-out 0.45s";
  }

  const eventLeft = () => {
    image.current.style.transform = `translateX(${-130}%)`;
    arrowLeft.current.style.display = "flex";
    arrowRight.current.style.display = "flex";
    image.current.style.transition = "transform ease-in-out 0.45s";
  }


// sample
  const Callindex = () => {
    console.log(index, desktopValue.length)
    if(index == desktopValue.length - 1){
      setTrans(0)  
      setTime(10)
      
    }else{
      setTrans(0.3)  
      setTime(2000)

    }
    setIndex(index === desktopValue.length - 1 ? 0 : index + 1);
  };
  useEffect(() => {
    setTimeout(Callindex, time);
  });


  return (
    <div className="desktop-slider-container">
      <div className="btn-left" ref={arrowLeft} onClick={eventRight} >
        <img src={leftRight} alt="leftImage" />
      </div>
      <div className="desktop-slide-section">
        {desktopValue?.map((item) => (
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
      <div className="btn-right" ref={arrowRight} onClick={eventLeft}>
          <img src={leftRight} alt="rightImage" />
        </div>
    </div>
  );
}
