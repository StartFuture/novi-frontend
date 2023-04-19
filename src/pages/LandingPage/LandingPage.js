import React from "react";

import Footer from '../../components/Footer.js';
import LandingPageInicio from '../../components/LandingPageInicio.js'
import LandingUs from '../../components/landingUs.js'

function LandingPage() {
    return (
        <div className='Landing-page'>
          <LandingPageInicio/>
          <br/>
          <LandingUs/>
          <br/>
          <Footer />
        </div>
      );
}

export default LandingPage;