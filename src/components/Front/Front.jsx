import React from "react";
import "./Front.css";
import TextLogo from "../../images/logo.png";

export default function front() {
  return (
    <div className="Front">
      <div className="Hero">
        <div className="LogoContainer">
          <img className="TextLogo" src={TextLogo} alt="" />
        </div>
        <div className="HeroText">
          <h1>The Biggest Hackathon at Ohio University</h1>
          <div className="logobutton">
            {/* <a href="[RESISTRATION LINK HERE]" target="_blank"> */}
              <button role="button" className="btn"><h1 className="hbtn">Registration Coming Soon!</h1></button>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
