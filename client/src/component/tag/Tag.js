import React from "react";
import arrow from "../../assets/Icon/chevron-down-solid.svg";
import Button from "../Button";
import "./tag.scss";

export default class Tag extends React.Component {
  render() {
    return (
      <section className="tag" id="tag">
        <h2 className="tag__h2">Most popular tags</h2>
        <div className="tag__buttonAll">
          <div className="tag__top">
            <Button text="something" class="button1" />
            <Button text="something" class="button2" />
            <Button text="something" class="button3" />
          </div>
          <div className="tag__button">
            <Button text="something" class="button7" />
            <Button text="something" class="button8" />
            <Button text="something" class="button9" />
          </div>
        </div>
        <img className="tag__down" src={arrow} alt="scroll down" />
      </section>
    );
  }
}
