import React from "react";

const Participants = props => {
  const participants = props.participants.map(participant => (
    <li key={participant.tag} className="participant-info">
      <span>{participant.name}</span>
      <span>
        Played:
        {participant.battlesPlayed}
      </span>
      <span>
        Wins:
        {participant.wins}
      </span>
    </li>
  ));
  return participants;
};

export default Participants;
