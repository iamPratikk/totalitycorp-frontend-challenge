import React from "react";
import Button from "./Button";


function FirstDiv({img,active,disable,buttonText}) {
   
  return (
    <div className={`firstDiv-container${active? 'active' :'non-active'}`}>
      <div className="firstDiv-left">
        <img className="firstDiv-img" src={img} alt="coffee img" />
      </div>
      <div className={`firstDiv-right ${disable ? 'able':'disabled'}  `}>
        <div className={`firstDiv-content ${disable ? 'able':'disabled'} `}>
          <h1>Win a thousand stars</h1>
          <p>
            We are giving away 1,000 Stars to 1,000 Starbucks® Rewards members in
            our Million Stars Giveaway and much more all week!*
          </p>
          <Button text={buttonText} />
        </div>
      </div>
    </div>
  );
}

export default FirstDiv;
