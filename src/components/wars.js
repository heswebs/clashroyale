import React from "react";
import Participants from "./participants";

const Wars = props => {
  const participants = props.wars.map((war, index) => {
    return (
      <div className="war" key={index}>
        <h3 className="list-heading">
          Season: {war.seasonNumber} <br />
          Date:
          {new Date(war.createdDate * 1000).toLocaleDateString()}
        </h3>
        <p>Participants: {war.participants.length}</p>
        <ul>
          <Participants participants={war.participants} />
        </ul>
      </div>
    );
  });
  return participants;
};

export default Wars;
