import logo from "./logo.svg";
import "./index.css";
import React from "react";
import RateUs from "./components/RateUs";
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <React.Fragment>
      
      <div className="page">
      <div className="CARD">
        <div className="landingCardTop">
          <h1>Thank you for using our services !</h1>
        </div>
        <button className="submitButton">
        <Link to="/rateus">GIVE US A SCORE</Link>
        </button>
      </div>
    </div>
      </React.Fragment>
    </div>
  );
}

export default App;
