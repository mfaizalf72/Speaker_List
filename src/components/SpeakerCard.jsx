// src/components/SpeakerCard.jsx
import React from 'react';
import './SpeakerCard.scss';

const SpeakerCard = ({ speaker, onClick }) => {
  return (
    <div className="speaker-card" onClick={onClick}>
      <div className="speaker-card__image">
        <img src={speaker.image} alt={`${speaker.name}'s photo`} />
      </div>
      <div className="speaker-card__name">{speaker.name}</div>
      <div className="speaker-card__title">{speaker.title}</div>
      <div className="speaker-card__company">{speaker.company}</div>
    </div>
  );
};

export default SpeakerCard;
