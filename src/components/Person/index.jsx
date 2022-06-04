import React from "react";
import style from "./index.module.css";
import defaultImage from "../../media/images/girl.png";

export default function index({
  name,
  rating = 10,
  imageUrl,
  occupation,
  education,
  bodyCount,
  relationshipStatus,
  age,
}) {
  const handleRatingCheckmark = (position, rating) =>
    position === rating ? "✓" : "";
  const handleRatingMessage = (rating) => {
    switch (rating) {
      case 1:
        return "you are a sin to look at";
        break;
      case 2:
        return "ew";
        break;
      case 3:
        return "no one is buying her drinks";
        break;
      case 4:
        return "she below average";
        break;
      case 5:
        return "you are average at best";
        break;
      case 6:
        return "she above average";
        break;
      case 7:
        return "she cute though";
        break;
      case 8:
        return "she fine af";
        break;
      case 9:
        return "she hot af";
        break;
      case 10:
        return "For sure I'm simping";
        break;

      default:
        break;
    }
  };
  return (
    <div className={`${style.main} container rounded border shadow-lg`}>
      <div>
        <div>Name:</div>
        <div>{name || "Jane Dowe"}</div>
      </div>
      <div>
        <img
          src={imageUrl || defaultImage}
          className={`img-thumbnail img-fluid`}
          alt="Person"
        />
      </div>
      <div>
        <div>{handleRatingCheckmark(1, rating)}</div>
        <div>{handleRatingCheckmark(2, rating)}</div>
        <div>{handleRatingCheckmark(3, rating)}</div>
        <div>{handleRatingCheckmark(4, rating)}</div>
        <div>{handleRatingCheckmark(5, rating)}</div>
        <div>{handleRatingCheckmark(6, rating)}</div>
        <div>{handleRatingCheckmark(7, rating)}</div>
        <div>{handleRatingCheckmark(8, rating)}</div>
        <div>{handleRatingCheckmark(9, rating)}</div>
        <div>{handleRatingCheckmark(10, rating)}</div>
      </div>
      <div>
        <div>Rating:</div>
        <div>{handleRatingMessage(rating)}</div>
      </div>
      <div>
        <div>Age:</div>
        <div>{age || 18}</div>
      </div>
      <div>
        <div>Ocupation:</div>
        <div>{occupation || "Occupation"}</div>
      </div>
      <div>
        <div>Education:</div>
        <div>{education || "Education"}</div>
      </div>
      <div>
        <div>Body Count:</div>
        <div>{bodyCount || "Over 9000"}</div>
      </div>
      <div>
        <div>Relationship Status:</div>
        <div>{relationshipStatus || "Single"}</div>
      </div>
      <div className="d-grid gap-2 mx-auto">
        <button className="btn btn-primary">Vote</button>
      </div>
    </div>
  );
}
