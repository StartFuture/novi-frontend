import React, { useEffect, useState } from "react";
import Api from "../../services/Api";

import Footer from "../../components/footer.js";
import LandingTop from "../../components/landingPageTop.js";

function LandingPage() {
  
  const [comments, setComments] = useState();

  useEffect(() => {
    Api.get("/get-comment")
      .then((response) => setComments(response.data))
      .catch((err) => {
        console.log("error: " + err);
      });
  }, []);

  console.log(comments)

  return (
    <div className="landingPage">
      <div>
        <LandingTop />
      </div>
      <div className="lpCommentsContainer">
        <div className="lpCommentsContent">
          <p>{JSON.stringify(comments[0])}</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
