import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BoxComment } from "./style";

const rating = [];

function CardComponent({ cardInfo }) {
  if (rating.length == 0) {
    for (var i = 0; i < cardInfo.stars; i++) {
      rating.push(i);
    }
  }

  return (
    <>
      <BoxComment>
        <div className="upperCard">
          <div className="boxUserImage">
            <div className="userImage"></div>
          </div>

          <div className="alignText">
            <h3>{cardInfo.user_name}</h3>
            <p>{cardInfo.perfil}</p>
          </div>

          <div className="rating">
            {rating.map((r) => (
              <AiOutlineStar className="starSize"></AiOutlineStar>
            ))}
          </div>
        </div>

        <div className="comment">
          <p>{cardInfo.comment}</p>
        </div>
      </BoxComment>
    </>
  );
}

export default CardComponent;
