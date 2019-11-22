import React from "react";
import Button from "../Button";
import "./tag.scss";

export default class Tag extends React.Component {
  render() {
    return (
      <section className="tag" id="tag">
        <div className="tag__container">
          <h2 className="tag__h2">Explore</h2>
          <div className="tag__p">
            Our data will allow you to curate the most popular videos to keep
            you in the loop. Based on most likes, comments and views, a tag’s
            engagement level will be measured and content will be shared with
            you to ensure that the next time someone asks “Have you seen…?”,
            you’ll be able to say “Yes!”
          </div>
          <div className="tag__buttonAll">
            <div className="tag__top">
              <Button text="TECHNOLOGY" class=" bstn button1" />
              <Button text="SCIENCE" class=" bstn button2" />
              <Button text="DESIGN" class=" bstn button3" />
            </div>
            <div className="tag__button">
              <Button text="BUSINESS" class=" bstn button7" />
              <Button text="COMMUNICATION" class=" bstn button8" />
              <Button text="FUTURE" class=" bstn button9" />
            </div>
          </div>
        </div>
        {/* <img className="tag__down" src={arrow} alt="scroll down" /> */}
      </section>
    );
  }
}
