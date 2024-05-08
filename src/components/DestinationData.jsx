import React from 'react';
import "./DestinationStyles.css";
// import Mountain1 from "../assets/1.jpg";
// import Mountain2 from "../assets/2.jpg";
// import Mountain3 from "../assets/3.jpg";
// import Mountain4 from "../assets/4.jpg";

const DestinationData = (props) => {
  return (
    <>
      <div className={props.cName}>
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>
            {props.text}
          </p>
        </div>

        <div className="image">
          <img src={props.img1} alt="img" />
          <img src={props.img2} alt="img" />
        </div>
      </div>
    </>
  );
}

export default DestinationData;