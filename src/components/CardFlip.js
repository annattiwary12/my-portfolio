// CardFlip.js
import React from 'react';
import './CardFlip.css';

const CardFlip = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <h2>Front Side</h2>
        </div>
        <div className="card-back">
          <h2>Back Side</h2>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
