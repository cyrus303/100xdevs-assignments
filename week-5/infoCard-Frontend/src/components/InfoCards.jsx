import React from 'react';
import Card from './Card';

const InfoCards = ({personData}) => {
  return (
    <div className="card-container">
      {personData.map((element) => {
        return <Card {...element} />;
      })}
    </div>
  );
};

export default InfoCards;
