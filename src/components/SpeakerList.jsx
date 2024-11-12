import React, { useState } from 'react';
import './SpeakerList.scss';
import SpeakerCard from './SpeakerCard';
import SpeakerPopover from './SpeakerPopover';

const SpeakerList = ({ speakers }) => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCardClick = (speaker) => {
    setSelectedSpeaker(speaker);
  };

  const handleClosePopover = () => {
    setSelectedSpeaker(null);
  };

  const filteredSpeakers = speakers.filter(speaker =>
    speaker.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="speaker-list">
      <div className="speaker-list__search">
        <span className="speaker-list__search-icon">
          <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 2a9 9 0 0 1 6.32 15.32l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A9 9 0 1 1 11 2zm0 2a7 7 0 1 0 4.95 11.95A7 7 0 0 0 11 4z"/>
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search speakers..."
          className="speaker-list__search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <h2 className="speaker-list__title">Check Out the Featured Speakers at the Event</h2>
      <p className="speaker-list__subtitle">
      Our featured speakers are thought leaders and core contributors from organizations leading the charge in industry innovation.
      </p>
      {selectedSpeaker && (
        <SpeakerPopover speaker={selectedSpeaker} onClose={handleClosePopover} />
      )}
      <div className="speaker-list__carousel">
        {filteredSpeakers.map((speaker) => (
          <SpeakerCard
            key={speaker.id}
            speaker={speaker}
            onClick={() => handleCardClick(speaker)}
          />
        ))}
      </div>
    </div>
  );
};

export default SpeakerList;