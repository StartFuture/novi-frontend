import styled from "styled-components"

export const BoxCarrossel1 = styled.div`
width: auto;
height: auto;
margin-top: 110px;
margin-left: 30px;

.slideshow {
  
  margin: 0 auto;
  overflow: hidden;
  max-width: 100%;
  height: 400px;

  
}

.slideshowSlider {
  width: 670px;
  height: 600px;
  white-space: nowrap;
  transition: ease 1000ms;
}

.slide {
  display: inline-block;

  height: 400px;
  width: 100%;
  border-radius: 40px;

  
}

/* Buttons */

.slideshowDots {
  text-align: center;
}

.slideshowDot {
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;

  cursor: pointer;
  margin: 15px 7px 0px;

  background-color: #c4c4c4;
}

.slideshowDot.active {
  background-color: #6a0dad;
}

@media (min-width: 1px) and (max-width:768px) {
  
  .slide {width: 70%;}

}

`