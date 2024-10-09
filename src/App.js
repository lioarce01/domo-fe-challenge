import React from "react";
import ConsultantComponent from "./components/ConsultantComponent";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import "./styles.css";

function App() {
  return (
    <div>
      <NavbarComponent />
      <ConsultantComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
