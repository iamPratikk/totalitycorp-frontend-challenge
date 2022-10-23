import React from "react";
import Button from "./Button";


function SecondDiv(props) {
  return (
    <div className="secondDiv-container">
      <div className="secondDiv-left">
        <div className="secondDiv-content">
          <h2>A new way to earn sips and trips</h2>
          <p>
            Now you can link your Starbucks® Rewards + Delta SkyMiles® accounts
            to get:
          </p>
          <ul>
            <li>150 Stars + 500 miles when you link before 12/31</li>
            <li>Double Stars on Delta travel days</li>
            <li>
              1 mile per $1 spent at Starbucks (excludes taxes and gratuities)**
            </li>
          </ul>
          <Button text={props.text} />
        </div>
        {/* <Button /> */}
      </div>
      <div className="secondDiv-right">
        <img className="secondDiv-img" src={props.img} alt="coffee img" />
      </div>
    </div>
  );
}

export default SecondDiv;
