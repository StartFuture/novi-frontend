
import { useState } from "react";
import DefaultHome from "./default";
import LoggedHome from "./loggedHome";


function Home() {

  

    const [travel, setTravel] = useState(0);
  
    
  
    const HomeDisplay = () => {
      if (travel === 0) {
      return <DefaultHome></DefaultHome>;
      } else {
      return <LoggedHome></LoggedHome>;
      }}
  
  
    return (
  
      <div>{HomeDisplay()}</div>
  
  
  
    )
  
  
  
  }
  
  export default Home