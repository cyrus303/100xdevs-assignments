import React from 'react';
import './Card.css'; // Import the CSS file for styling

const Card = ({name, description, linkedin, twitter, interests}) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>

      <div className="interests">
        <h3>Interests</h3>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>

      <div className="social-media">
        {linkedin && (
          <button
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </button>
        )}
        {twitter && (
          <button
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
