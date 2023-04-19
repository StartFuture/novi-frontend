import React from "react";

import Footer from '../../components/footer.js';
import LandingTop from '../../components/landingTop.js'

function LandingPage() {
    return (
        <div className='landingPage'>
          <LandingTop/>
          <br/>
          <Footer />
        </div>
      );
}

export default LandingPage;