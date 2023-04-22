import React from "react";

import Footer from '../../components/footer.js';
import LandingTop from '../../components/landingPageTop.js';
import LandingPageUs from '../../components/landingPageUs.js';

function LandingPage() {
    return (
        <div className='landingPage'>
          <LandingTop/>
          <br/>
          <LandingPageUs/>
          <br/>
          <Footer />
        </div>
      );
}

export default LandingPage;