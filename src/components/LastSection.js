import React from "react";
import LastDiv from "./LastDiv";

function LastSection() {
  return (
    <div className="lastSection-container">
      <LastDiv 
        title={"About Us"}
        one={"Our Company"}
        two={"Our Coffee"}
        three={"Stories and News"}
        four={"Starbucks Archieve"}
        five={"Invester Realtions"}
        six={"Customer Service"} />
      <LastDiv
        title={"Careers"}
        one={"Culture and Values"}
        two={"Inclusion, Diversity and Equity"}
        three={"College Achievement Plan"}
        four={"Alumini Cummunity"}
        five={"U.S. Careers"}
        six={"International Careers"}
      />
      <LastDiv
        title={"Social Impact"}
        one={"People"}
        two={"Planet"}
        />
        
      <LastDiv 
        title={"For Business Partners"}
        one={"Landlord Support Centre"}
        two={"Suppliers"}
        three={"Corporate Gift Card sales"}
        four={"Office and Food Service"}
         />
      <LastDiv 
        title={"Order and Pickup"}
        one={"Order On The App"}
        two={"Order On The Web"}
        three={"Delivery"}
        four={"Order and Pickup Options"}
         />
    </div>
  );
}

export default LastSection;
