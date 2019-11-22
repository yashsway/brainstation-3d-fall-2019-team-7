import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Burger from "./component/Burger";
import Card from "./component/Card";
import Input from "./component/Input";
import Button from "./component/Button";
import Tabx from "./component/Tab";
import Chart from "./component/Chart";
import Navigation from "./component/navigation/Navigation";
import Carousel from "./component/carousel/Carousel";
import Landing from "./component/landing/Landing";
import Tag from "./component/tag/Tag";
// npm run start:client

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* NOTE: Keep the helmet code below and change the app title.
            Add any meta tags you want, or any tag you want to go in the header. 
            You can modify everything else! */}
        <Helmet>
          <title>TED GRADS</title>
        </Helmet>
        <Navigation />
        <Landing />
        <Tag />
        <Carousel />
        {/* <BrowserRouter>
          <Switch>
            <Route path="/technology" exact component={Carousel} />
            <Route path="/tag" exact component={Tag} />
            <Route path="/" exact component={Landing} />
          </Switch>
        </BrowserRouter> */}
      </div>
    );
  }
}
