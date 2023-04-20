import React from "react";

import Footer from '../../components/Footer.js';
import LandingPageInicio from '../../components/LandingPageInicio.js'
import LandingPageUs from '../../components/landingPageUs.js'

function LandingPage() {
    return (
        <div className='Landing-page'>
          {/* <LandingPageInicio/> */}
          <br/>
          <LandingPageUs/>
          <br/>
          <Footer />
        </div>
      );
}

export default LandingPage;