import React from "react";
import {AiOutlineStar} from "react-icons/ai"
import { BoxComment } from "./style";



function CardComponent() {

  return (

    <>

      <BoxComment>
        <div className="upperCard">
          <div className="boxUserImage">
            <div className="userImage"></div>
          </div>

          <div className="alignText">
            <h3>Paula Lima Santos</h3>
            <p>Viajante</p>
          </div>

          <div className="rating">
            <AiOutlineStar></AiOutlineStar>
            <AiOutlineStar></AiOutlineStar>
            <AiOutlineStar></AiOutlineStar>
            <AiOutlineStar></AiOutlineStar>
            <AiOutlineStar></AiOutlineStar>
          </div>
        </div>

        <div className="comment">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolore iusto possimus accusamus commodi laborum amet, praesentium quae quaerat quisquam reprehenderit odit explicabo modi sunt, repellat esse minima iste vero.</p>

        </div>
      </BoxComment>


    </>

  );
}

export default CardComponent;
