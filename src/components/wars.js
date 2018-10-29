import React from "react";
import Participants from "./participants";

const Wars = props => {
  const participants = props.wars.map((war, index) => {
    return (
      <details key={index}>
        <summary>Clan War {index + 1}</summary>
        <div className="war">
          <p className="list-heading">
            Season: {war.seasonNumber} <br />
            Date:
            {new Date(war.createdDate * 1000).toLocaleDateString()}
          </p>
          <p>Participants: {war.participants.length}</p>
          <ul>
            <Participants participants={war.participants} />
          </ul>
        </div>
      </details>
    );
  });
  return participants;
};

export default Wars;
