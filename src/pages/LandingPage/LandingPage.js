import React from "react";

import Footer from '../../components/footer.js';
import LandingPageInicio from '../../components/landingPageInicio.js'

function LandingPage() {
    return (
        <div className='landingPage'>
          <LandingPageInicio/>
          <br/>
          <Footer />
        </div>
      );
}

export default LandingPage;