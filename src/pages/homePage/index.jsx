
import { useState } from "react";
import DefaultHome from "./default";
import LoggedHome from "./loggedHome";


function Home() {

    const hasTrip = localStorage.getItem("hasTrip");
    // const [travel, setTravel] = useState(1);
  
    const HomeDisplay = () => {
      if (hasTrip === '0') {
      return <DefaultHome></DefaultHome>;
      } else {
      return <LoggedHome></LoggedHome>;
      }}
  
  
    return (
  
      <div>{HomeDisplay()}</div>
  
  
  
    )
  
  
  
  }
  
  export default Home