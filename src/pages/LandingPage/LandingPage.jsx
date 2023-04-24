import React, { useEffect, useState } from "react";
import Api from "../../services/Api";
import ShowComment from "../../components/showComment";

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
