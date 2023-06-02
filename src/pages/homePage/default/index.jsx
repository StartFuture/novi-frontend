// import React from "react";
// import {LayoutGrid, PageGrid, MainDiv, SecondaryDiv, Button, Wrapper} from "../default/style"
// import {ImAirplane} from "react-icons/im";







//   function DefaultHome(){

//     return(

// <PageGrid>
// <LayoutGrid>

// <MainDiv>
// <p>Fala <b> Marcelo </b>, vamos viajar?</p>
// <SecondaryDiv>

// <ImAirplane className="iconAirplane"/>
// <h2>Vamos achar a viagem certa para você !</h2>

// <p>Com a entrevista do seu perfil vamos mapear a viagem perfeita.</p>

// <Button>Quero Viajar</Button>




// </SecondaryDiv>

// </MainDiv>




// </LayoutGrid>
// </PageGrid>



// )



//   }

//   export default DefaultHome




import React, { useEffect, useRef, useState } from "react";


import Frame8 from '../../../pages/landingPage/assets/img/Frame8.png';
import Frame9 from '../../../pages/landingPage/assets/img/Frame9.png';
import Frame10 from '../../../pages/landingPage/assets/img/Frame10.png';
import { BoxCarrossel } from "./style";
import { BoxComment } from "../../landingPage/components/CarrouselTop/card/style";
import CardComponent from "pages/landingPage/components/CarrouselTop/card/cardComponent";

// const comentarios = [
//   {
//     foto:"abc",
//     nome:"joana darc",
//   },
//   {
//     foto:"abc",
//     nome:"joana darc",
//   },
//   {
//     foto:"abc",
//     nome:"joana darc",
//   }
// ]
const images = [
  BoxComment,
  BoxComment,
  BoxComment,

  
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


    <BoxCarrossel>
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
    </BoxCarrossel>
    </>
  );
}

export default CarrosselComment



