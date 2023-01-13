import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import illustrationThankYou from "../images/illustration-thank-you.svg";

export default function ThankYou() {
  const location = useLocation();
  console.log(location.state.rating);

  return (
    <div className="page">
      <div className="CARD">
        <div className="thankYouCARD">
          <div className="thankYouCardTop">
            <img
              className="thankYouImg"
              src={illustrationThankYou}
              alt="illustrationThankYou"
            />
            <div className="numberOfStars">
              You selected {location.state.rating} out of 5 stars
            </div>

            {location.state.rating === 1 && "nous sommes désolés que vous n'ayez pas apprécié votre expérience"}
            
            <h1>Thank you !</h1>
            <h5>
              We appreciate you taking the time to give a rating. If you ever
              need more support, dont hesitate to get in touch!
            </h5>
          </div>
          <div className="backToHomeButton">
            <Link to="/">BACK TO HOME</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
