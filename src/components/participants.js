import React from "react";

const Participants = props => {
  const participant = props.participants.map(participant => {
    return (
      <tr key={participant.tag}>
        <th scope="row">{participant.name}</th>
        <td>{participant.cardsEarned}</td>
        <td>{participant.collectionDayBattlesPlayed}</td>
        <td>{participant.wins}</td>
      </tr>
    );
  });
  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Cards Earned</th>
          <th scope="col">Collection Battles</th>
          <th scope="col">Wins</th>
        </tr>
      </thead>
      <tbody>{participant}</tbody>
    </table>
  );
};

export default Participants;
