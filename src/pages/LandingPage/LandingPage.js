import React from "react";

import Footer from '../../components/Footer.js';
import LandingPageInicio from '../../components/LandingPageInicio.js'

function LandingPage() {
    return (
        <div className='Landing-page'>
          <LandingPageInicio/>
          <br/>
          <Footer />
        </div>
      );
}

export default LandingPage;