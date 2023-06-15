import React, { useEffect, useRef, useState } from "react";
import { BoxCarrossel1 } from "./style";

import CardComponent from "pages/landingPage/components/CarrosselComment/card/cardComponent";
import { getComment } from "services/Api";

const delay = 2500;

function CarrosselComment() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    getComment().then((ress) => {
      setCardInfo(ress.data);
    });
  }, []);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === cardInfo.length - 1 ? 0 : prevIndex + 1
        ),
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
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {cardInfo.map((card) => (
              <div key={card.id} className="slide">
                <CardComponent cardInfo={card}></CardComponent>
              </div>
            ))}
          </div>
        </div>
      </BoxCarrossel1>
    </>
  );
}

export default CarrosselComment;
