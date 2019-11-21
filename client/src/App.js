import React from 'react';
import './App.scss';
import { Helmet } from 'react-helmet';

export default class App extends React.Component {
  render() {

    return (
      <div className="App">
        {/* NOTE: Keep the helmet code below and change the app title.
            Add any meta tags you want, or any tag you want to go in the header. 
            You can modify everything else! */}
        <Helmet>
          <title>Your App Title Here</title>
        </Helmet>
        <header className="App-header">
          <h2>Brainstation 3D Starter - Kingsley and Kelly are awesomesauce </h2>
        </header>
      </div>
    );
  }
}
