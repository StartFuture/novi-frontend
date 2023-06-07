import React, { useEffect, useState } from "react";
import { api } from "../../services/Api";
import { DivStyleTop } from "pages/landingPage/components/CarrouselTop/style"

import Footer from "../../components/footer";
import Carrosel from "../../components/carrosel";
import LandingPageUs from "./components/landingPageUs";
import LandingTop from "./components/landingPageTop";
import "./assets/css/landingPage.css";
import CarrosselComment from "./components/CarrosselComment/CarroselComment";
import CarrouselTop from "./components/CarrouselTop/carrouselTop";
import DescubraNovasExperiencias from "./components/CarrouselTop/CarrouselTopText/DescubraNovasExperiencias"


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

      <div className="carroselTopContainer">
       
          <DescubraNovasExperiencias></DescubraNovasExperiencias>
        
        
          <CarrouselTop></CarrouselTop>
        
      </div>
      <div>
        <LandingPageUs />
      </div>
      <div>
        <CarrosselComment></CarrosselComment>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
