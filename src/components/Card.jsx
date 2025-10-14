import React from 'react';
import './Card.css';

function Card({ title, description, image }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} />}
      <h4>{title}</h4>
      <p>{description}</p>
      <button>Read More</button>
    </div>
  );
}

export default Card;
