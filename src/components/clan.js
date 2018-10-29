import React from "react";

const Clan = props => {
  const clan = props.clan;
  const member = props.clanInfo.map(member => {
    return (
      <tr key={member.tag}>
        <th scope="row">{member.name}</th>
        <td>{member.attend}</td>
        <td>{member.donations}</td>
        <td>{member.donationsReceived}</td>
      </tr>
    );
  });
  return (
    <div className="clan-info">
      <div className="jumbotron jumbotron-fluid">
        <div className="container clan-info-container">
          <h2 className="display-5">{clan.name}</h2>
          <img className="clan-icon" src={clan.badge.image} alt="clan Icon" />
          <p className="lead">{clan.description}</p>
          <p className="totalMembers">Members: {clan.memberCount}</p>
          <p className="donations">Donations: {clan.donations}</p>
          <p className="score">Score: {clan.score}</p>
        </div>
      </div>
      <details>
        <summary>All members</summary>
        <div className="table-responsive">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Attend</th>
                <th scope="col">Donation</th>
                <th scope="col">Received</th>
              </tr>
            </thead>
            <tbody>{member}</tbody>
          </table>
        </div>
      </details>
    </div>
  );
};

export default Clan;
