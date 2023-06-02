import React, { useEffect, useState } from "react";
import { api } from "../../services/Api";
import ShowComment from "./components/showComment";

import Footer from "../../components/footer";
import Carrosel from "../../components/carrosel";
import LandingPageUs from "./components/landingPageUs";
import LandingTop from "./components/landingPageTop";
import "./assets/css/landingPage.css";
import CarrosselComment from "pages/homePage/default";


function LandingPage() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.get("/get-comment")
      .then((response) => setComments(response.data))
      .catch((err) => {
        console.log("error: " + err);
      });
  }, []);

  console.log(comments);

  return (
    <div className="lp">
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
        {/* <ShowComment comments={comments} /> */}
        <CarrosselComment></CarrosselComment>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
