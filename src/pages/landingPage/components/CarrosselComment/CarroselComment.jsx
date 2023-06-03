import React, { useEffect, useRef, useState } from "react";
import { BoxCarrossel1 } from "./style";

import CardComponent from "pages/landingPage/components/CarrosselComment/card/cardComponent"


const images = [
CardComponent,
CardComponent,
CardComponent,
CardComponent,


  
];
const delay = 2500;

function CarrosselComment() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
      setIndex((prevIndex) => prevIndex === (images.length - 1) ? 0 : prevIndex + 1), 
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
<>


    <BoxCarrossel1>
    <div className="slideshow">
      <div className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((images, i) => (
          <div key={i} className="slide">
          
           <CardComponent></CardComponent>
          </div>
        ))}
      </div>
    </div>
    </BoxCarrossel1>
    </>
  );
}

export default CarrosselComment