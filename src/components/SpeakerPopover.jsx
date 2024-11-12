// src/components/SpeakerPopover.jsx
import React from 'react';
import './SpeakerPopover.scss';

const SpeakerPopover = ({ speaker, onClose }) => {
  return (
    <div className="speaker-popover">
      <button className="speaker-popover__close" onClick={onClose}>
        &times;
      </button>
      <div className="speaker-popover__content">
        <img src={speaker.image} alt={`${speaker.name}'s photo`} className="speaker-popover__image" />
        <h3 className="speaker-popover__name">{speaker.name}</h3>
        <p className="speaker-popover__title">{speaker.title} at {speaker.company}</p>
        <p className="speaker-popover__description">{speaker.description}</p>
      </div>
    </div>
  );
};

export default SpeakerPopover;
