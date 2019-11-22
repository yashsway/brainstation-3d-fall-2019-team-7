import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chart from "../../assets/Logo/chart.png";
import video1 from "../../assets/Logo/video1.png";
import video2 from "../../assets/Logo/video2.png";
import video3 from "../../assets/Logo/video3.png";
import "./styles.scss";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider">
        <h2 className="heading">TECHNOLOGY</h2>
        <img className="chart" src={chart} alt="" />
        <div className="topic">
          <img />
        </div>
        <div className="information"></div>
        <Slider {...settings}>
          <div>
            {" "}
            <img className="video" src={video1} alt="" />
          </div>
          <div>
            {" "}
            <img className="video" src={video2} alt="" />
          </div>
          <div>
            {" "}
            <img className="video" src={video3} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
