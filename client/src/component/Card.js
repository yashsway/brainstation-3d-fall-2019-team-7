import React from 'react';
import './card.scss';

export default class Card extends React.Component {
  render() {
    const {title, content} = this.props;

    return(
      <>
        <div className="card">
          <h2 className="card__title">{title}</h2>
          <p className="card__content">{content}</p>
        </div>
      </>
    )
  }
}