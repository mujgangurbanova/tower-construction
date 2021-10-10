import React from "react";
import GlobalStyle from "utils/globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Heading from "components/Header/Main";
import Sketch from "pages/Projects/Sketch";

function App() {
  return (
    <div className="wrapper">
      <GlobalStyle />
      <Heading/> 
      <div className="container">
        <Navbar/>
        <Sketch/>
        </div>     

    </div>
  );
}

export default App;
