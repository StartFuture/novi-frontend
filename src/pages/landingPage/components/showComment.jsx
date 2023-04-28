import React from "react";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function ShowComment(props) {
  const comments = props.comments;

  const countStars = (cardStars) => {
    if (cardStars === 5) {
      return (
        <>
          <h4>
            <AiFillStar />
          </h4>
          <h4>
            <AiFillStar />
          </h4>
          <h4>
            <AiFillStar />
          </h4>
          <h4>
            <AiFillStar />
          </h4>
          <h4>
            <AiFillStar />
          </h4>
        </>
      );
    } else if (cardStars === 4) {
      return (
        <>
          <h4>
            <AiFillStar />
          </h4>
          <h4>
            <AiFillStar />
          </h4>
          <h4>
            <AiFillStar />
          </h4>
          <h4>
            <AiFillStar />
          </h4>
          <h4>
            <AiOutlineStar />
          </h4>
        </>
      );
    } else if (cardStars === 3) {
      return (
        <>
          <h4>
            <AiFillStar />
          </h4>
          <h4>
            <AiFillStar />
          </h4>
          <h4>
            <AiFillStar />
          </h4>
          <h4>
            <AiOutlineStar />
          </h4>
          <h4>
            <AiOutlineStar />
          </h4>
        </>
      );
    } else if (cardStars === 2) {
      return (
        <>
          <h4>
            <AiFillStar />
          </h4>
          <h4>
            <AiFillStar />
          </h4>
          <h4>
            <AiOutlineStar />
          </h4>
          <h4>
            <AiOutlineStar />
          </h4>
          <h4>
            <AiOutlineStar />
          </h4>
        </>
      );
    } else if (cardStars === 1) {
      return (
        <>
          <h4>
            <AiFillStar />
          </h4>
          <h4>
            <AiOutlineStar />
          </h4>
          <h4>
            <AiOutlineStar />
          </h4>
          <h4>
            <AiOutlineStar />
          </h4>
          <h4>
            <AiOutlineStar />
          </h4>
        </>
      );
    } else {
      return (
        <>
          <h4>
            <AiOutlineStar />
          </h4>
          <h4>
            <AiOutlineStar />
          </h4>
          <h4>
            <AiOutlineStar />
          </h4>
          <h4>
            <AiOutlineStar />
          </h4>
          <h4>
            <AiOutlineStar />
          </h4>
        </>
      );
    }
  };

  const listComments = [];
  for (let i = 0; i < comments.length; i++) {
    listComments.push(
      <li key={i} className="lpCommentsCards">
        <div id="commentsCardsGrid1">
          <div id="commentsGrid1ImgName">
            <span id="cardImg">{comments[i].img}</span>
            <div id="cardNamePerfil">
              <span id="cardName">{comments[i].user_name}</span>
              <span id="cardPerfil">
                <strong>{comments[i].perfil}</strong>
              </span>
            </div>
          </div>
          <span id="cardStars">{countStars(comments[i].stars)}</span>
        </div>
        <div id="commentsCardsGrid2">
          <span id="cardComment">{comments[i].comment}</span>
        </div>
      </li>
    );
  }

  return <ul className="lpCommentsContent">{listComments}</ul>;
}

export default ShowComment;
