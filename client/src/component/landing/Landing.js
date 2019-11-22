import React from "react";
import "./landing.scss";
import Button from "../Button";
import image from "../../assets/Logo/image.png";

export default class Landing extends React.Component {
  render() {
    return (
      <seciton className="landing" id="landing">
        <div className="landing__flex">
          <div className="landing__left">
            <h1 className="landing__h1">No Mo’ FOMO</h1>
            <div className="landing__p">
              <p>
                “Have you seen the Ted Talk about…?” - get used to hearing this
                once you start working. No matter what stage you’re at in your
                career, Ted Talks allows you to filter from high level to
                specific topics, providing inspiration or, insightful tools to
                fuel your success.
              </p>
            </div>
          </div>
          <div className="landing__right">
            <Button text="something" class=" bstn button4" />
            <Button text="something" class=" bstn button5" />
            <Button text="something" class=" bstn button6" />
          </div>
        </div>
        {/* <img className="landing__down" src={arrow} alt="scroll down" /> */}
        <img className="image" src={image} alt="" />
      </seciton>
    );
  }
}
