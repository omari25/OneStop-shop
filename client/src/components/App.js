import React from "react";
import Footer from "./Footer";
//import AboutUs from "./AboutUs";
//import Shop from "./Shop"
import Slider from "./Slider"

function App() {
  return (
    <div className="bg-white w-full h-full">
      <Slider/>
      {/* <AboutUs/>   */}
        <hr/>
{/*       
      <Shop/>   */}
      <hr/>
      <Footer/> 
    </div>
  );
}

export default App;
