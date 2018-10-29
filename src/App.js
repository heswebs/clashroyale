import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Wars from "./components/wars";
import Clan from "./components/clan";

const warlog_url = "https://api.royaleapi.com/clan/QLPR2UO/warlog";
const clan_url = "https://api.royaleapi.com/clan/QLPR2UO";
const api_key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg5OSwiaWRlbiI6IjI5NjgyMzI3Mjc3Mzc3OTQ1OCIsIm1kIjp7InVzZXJuYW1lIjoiSGhkIiwia2V5VmVyc2lvbiI6MywiZGlzY3JpbWluYXRvciI6IjcyMTMifSwidHMiOjE1NDAzNTYxOTcwNzJ9.eAM8GZX7LX2yxNKAVb9MSfDBokMMqjgb6nLOU9J1S1I";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentWars: [],
      clanInfo: [],
      clan: []
    };
  }

  componentDidMount() {
    function getClanMember() {
      return axios.get(clan_url, {
        headers: {
          auth: api_key
        }
      });
    }

    function getRecentWars() {
      return axios.get(warlog_url, {
        headers: {
          auth: api_key
        }
      });
    }
    var self = this;
    axios
      .all([getRecentWars(), getClanMember()])
      .then(
        axios.spread((resWars, resMembers) => {
          const recentWars = resWars.data.slice(0, 3);
          const clanInfo = resMembers.data.members;
          const clan = resMembers.data;
          resMembers.data.members.forEach(function(member) {
            member.attend = 0;
            recentWars.forEach(function(war) {
              war.participants.forEach(function(participant) {
                if (member.tag === participant.tag) {
                  member.attend += 1;
                }
              });
            });
          });

          // console.log(clanInfo);
          // console.log(recentWars);
          // console.log(clan);
          self.setState({ clanInfo });
          self.setState({ recentWars });
          self.setState({ clan });
        })
      )
      .catch(error => {
        window.location.reload();
      });
  }

  render() {
    return (
      <div className="App">
        <div className="content-wrap">
          {this.state.clan.badge && (
            <Clan clan={this.state.clan} clanInfo={this.state.clanInfo} />
          )}
          <Wars wars={this.state.recentWars} />
        </div>
      </div>
    );
  }
}

export default App;
