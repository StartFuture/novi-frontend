import React from "react";
import Frame8 from "../../../landingPage/assets/img/Frame8.png"
import Frame9 from "../../../landingPage/assets/img/Frame9.png"
import Frame10 from "../../../landingPage/assets/img/Frame10.png"
import { DivCarrouselTop } from "./style";
import { useEffect, useRef, useState } from "react";

const colors = [
    
Frame8,
Frame9,
Frame10,];

const delay = 2500;

function CarrouselTop() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <DivCarrouselTop>
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((colors, index) => (
          <div
            className="slide"
            key={index}
           
          ></div>
        ))}
      </div>
      

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
    </DivCarrouselTop>
  );
}
export default CarrouselTop