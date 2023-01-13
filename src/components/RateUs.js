import React from "react";
import { useState } from "react";
import StarRating from "./StarRating";
import "../index.css";
import { useNavigate } from "react-router-dom";

export default function RateUs() {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const handleClick = () => {
    if (rating === 0) {
      alert("Please select a rating");
      return;
    } else {
      setTimeout(() => {
        navigate("/submited", { state: { rating } }); // passer le rating en state (invisible pour l'user)
        // navigate(`/submited/${rating}`) // envoyer le rating dans l'url (moche relou voir doc)
      }, 100);
    }
  };

  return (
    <div className="page">
      <div className="CARD">
        <div className="cardTop">
          <h1>How did we do ?</h1>
          <h5>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </h5>
        </div>
        <StarRating rating={rating} setRating={setRating} />
        <button onClick={handleClick} className="submitButton">
          submit
        </button>
      </div>
    </div>
  );
}
