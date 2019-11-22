import React from "react";
import arrow from "../../assets/Icon/chevron-down-solid.svg";
import "./landing.scss";
import Button from "../Button";

export default class Landing extends React.Component {
  render() {
    return (
      <seciton className="landing" id="landing">
        <div className="landing__flex">
          <div className="landing__left">
            <h1 className="landing__h1">header</h1>
            <p className="landing__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="landing__right">
            <Button text="something" class="button4" />
            <Button text="something" class="button5" />
            <Button text="something" class="button6" />
          </div>
        </div>
        <img className="landing__down" src={arrow} alt="scroll down" />
      </seciton>
    );
  }
}
