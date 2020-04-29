/* 
  Page      - BugFix.js page
  Function  - Shows the bug fix keywords relevant to the chosen app
  Author    - Sajani Sihara, Ridmi Amasha
*/

import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import ReviewBox from "./ReviewBox";
import Button from "react-bootstrap/Button";
import "../../App.css";
import Footer from "../NavigationBar/Footer";

function BugFixPage(props) {
  return (
    <div>
      {/*Adding the background image*/}
      <div className="bgimg-14">
        {/*Adding the main heading */}
        <div className="caption">
          <span className="border">
            Bug fixes requested by the users of "Facebook"
          </span>
        </div>
      </div>

      {/*The keywords will be in divs descrip-10 and descrip-11 alternatively*/}
      <div>
      
        {/*div contains the button to view the reviews without a particular keyword */}
        <div className="descrip-review">
          <div className="container">
            <div className="row" style={{ width: "fit-content" }}>
            
             <ReviewBox />
             <ReviewBox />
             <ReviewBox />
             <ReviewBox />
             <ReviewBox />
             <ReviewBox />
             <ReviewBox />
             <ReviewBox />
             <ReviewBox />
             <ReviewBox />
             <ReviewBox />
             <ReviewBox />
             
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default BugFixPage;
