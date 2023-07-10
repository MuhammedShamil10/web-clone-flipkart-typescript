import React, {useEffect,useState,} from "react";
import "./DesktopSlider.css";
import leftRight from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/left-right.svg";

interface desktopSlider {
  desktopValue: string[];
}

export default function DesktopSlider({ desktopValue }: desktopSlider) {
  const [index, setIndex] = useState(0);
  const [trans, setTrans] = useState(0.3);
  const [time, setTime] = useState(2000);

  const eventRight = () => {
    setIndex(index + 1);
  };

  const eventLeft = () => {
    setIndex(index - 1);
  };

  const Callindex = () => {
    console.log(index, desktopValue.length);
    if (index == desktopValue.length - 1) {
      setTrans(0);
      setTime(10);
    } else {
      setTrans(0.3);
      setTime(2000);
    }
    setIndex(index === desktopValue.length - 1 ? 0 : index + 1);
  };
  useEffect(() => {
    setTimeout(Callindex, time);
  });

  return (
    <div className="desktop-slider-container">
      <div className="btn-left" onClick={eventLeft}>
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
      <div className="btn-right" onClick={eventRight}>
        <img src={leftRight} alt="rightImage" />
      </div>
    </div>
  );
}
