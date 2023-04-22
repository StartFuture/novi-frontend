import React, { useEffect, useState } from "react";
import Api from "../../services/Api";

import Footer from "../../components/footer.js";
import LandingTop from "../../components/landingPageTop.js";
import "../../assets/css/LandingPage.css";

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

    const listComments = [];
    for (let i = 0; i < comments.length; i++) {
      listComments.push(
        <li key={i} className="lpCommentsCards">
          <div id="commentsCardsGrid1">
            <div id="commentsGrid1ImgName">
                <p id="cardImg">{JSON.stringify(comments[i].img)}</p>
              <div>
                <p id="cardName">{JSON.stringify(comments[i].name)}</p>
                <p id="cardPerfil">{JSON.stringify(comments[i].perfil)}</p>
              </div>
            </div>
            <p id="cardStars">{JSON.stringify(comments[i].stars)}</p>
          </div>
          <div id="commentsCardsGrid2">
            <p id="cardComment">{JSON.stringify(comments[i].comment)}</p>
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
