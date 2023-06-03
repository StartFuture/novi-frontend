import styled from "styled-components";


export const DivCarrouselTop = styled.div `
width: auto;
height: auto;


.slideshow {
  margin: 0 auto;
  overflow: hidden;
  max-width: 500px;
}

.slideshowSlider {
  white-space: nowrap;
  transition: ease 1000ms;
}

.slide {
  display: inline-block;

  height: 400px;
  width: 300px;
  border-radius: 40px;
}

/* Buttons */

.slideshowDots {
  text-align: center;
}

.slideshowDot {
  display: inline-block;
  height: 14px;
  width: 50px;
  border-radius: 22px;

  cursor: pointer;
  margin: 15px 7px 0px;

  background-color: #c4c4c4;
}

.slideshowDot.active {
  background-color: ${props => props.theme.colors.primaryColor};
}
`