import React, { useEffect, useState } from "react";
import Api from "../../services/Api";
import ShowComment from "../../components/showComment";

import Footer from "../../components/footer";
import LandingPageUs from "../../components/landingPageUs"
import LandingTop from "../../components/landingPageTop";
import "../../assets/css/LandingPage.css";
import Carrosel from "../../components/carrosel";


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
      <div>
        <Carrosel />
      </div>
      <div>
        <LandingPageUs/>
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
