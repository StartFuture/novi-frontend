import React, { useEffect, useState } from "react";
import Api from "../../services/Api";

import Footer from "../../components/footer.js";
import LandingTop from "../../components/landingPageTop.js";
import "../../assets/css/LandingPage.css";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function LandingPage() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Api.get("/get-comment")
      .then((response) => setComments(response.data))
      .catch((err) => {
        console.log("error: " + err);
      });
  }, []);

  console.log(comments);

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
              <p id="cardImg">{comments[i].img}</p>
              <div>
                <p id="cardName">{comments[i].user_name}</p>
                <p id="cardPerfil">
                  <strong>{comments[i].perfil}</strong>
                </p>
              </div>
            </div>
            <p id="cardStars">{countStars(comments[i].stars)}</p>
          </div>
          <div id="commentsCardsGrid2">
            <p id="cardComment">{comments[i].comment}</p>
          </div>
        </li>
      );
    }

    return <ul className="lpCommentsContent">{listComments}</ul>;
  }

  return (
    <div className="landingPage">
      <div>
        <LandingTop />
      </div>
      <div className="lpCommentsContainer">
        <ShowComment comments={comments} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
