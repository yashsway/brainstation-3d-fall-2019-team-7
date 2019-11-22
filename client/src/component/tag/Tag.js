import React from "react";
import arrow from "../../assets/Icon/chevron-down-solid.svg";
import Button from "../Button";
import "./tag.scss";

export default class Tag extends React.Component {
  render() {
    return (
      <section className="tag" id="tag">
        <div className="tag__container">
          <h2 className="tag__h2">Explore</h2>
          <div className="tag__p">Our data will allow you to curate the most popular videos to keep you in the loop.  Based on most likes, comments and views, a tag’s engagement level will be measured and content will be shared with you to ensure that the next time someone asks “Have you seen…?”, you’ll be able to say “Yes!”</div>
          <div className="tag__buttonAll">
            <div className="tag__top">
              <Button text="TECHNOLOGY" class="button1" />
              <Button text="SCIENCE" class="button2" />
              <Button text="DESIGN" class="button3" />
            </div>
            <div className="tag__button">
              <Button text="BUSINESS" class="button7" />
              <Button text="COMMUNICATION" class="button8" />
              <Button text="FUTURE" class="button9" />
            </div>
          </div>
        </div>
        <img className="tag__down" src={arrow} alt="scroll down" />
      </section>
    );
  }
}
