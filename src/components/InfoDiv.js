import React from "react";

function InfoDiv() {
  return (
    <div className="infoDiv-container" >
      <div className="infoDiv-child1" >
        <p>
          *NO PURCHASE NECESSARY. Participating stores only. Ends 10/23/22. To
          enter and for Official Rules, visit. <a style={{color:'black'}} href="starbucksstardays.com">starbucksstardays.com</a>
        </p>
        <p>Entrants can receive a maximum of 2 entries per day.</p>
      </div>
      <div className="infoDiv-child2" >
        <p>
          **Excludes taxes and gratuities. At participating stores. Some
          restrictions apply. 150 Stars deposited after first qualifying
          Starbucks purchase. Flights purchased close to departure may not earn
          double Stars. Stars may not be earned on purchases of alcohol,
          Starbucks Cards and Starbucks Card reloads. For details, visit.
          <a style={{color:'black'}} href="deltastarbucks.com/terms">deltastarbucks.com/terms</a>
        </p>
      </div>
    </div>
  );
}

export default InfoDiv;
