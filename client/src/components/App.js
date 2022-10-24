import React from "react";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Shop from "./Shop"

function App() {
  return (
    <div className="bg-white w-full h-full">
      
      <AboutUs/>  
        <hr/>
      
      <Shop/>  
      <hr/>
      <Footer/> 
    </div>
  );
}

export default App;
