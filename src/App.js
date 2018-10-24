import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Wars from "./components/wars";

const url = "https://api.royaleapi.com/clan/QLPR2UO/warlog";
const api_key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg5OSwiaWRlbiI6IjI5NjgyMzI3Mjc3Mzc3OTQ1OCIsIm1kIjp7InVzZXJuYW1lIjoiSGhkIiwia2V5VmVyc2lvbiI6MywiZGlzY3JpbWluYXRvciI6IjcyMTMifSwidHMiOjE1NDAzNTYxOTcwNzJ9.eAM8GZX7LX2yxNKAVb9MSfDBokMMqjgb6nLOU9J1S1I";
class App extends Component {
  state = {
    recentWars: []
  };
  componentDidMount() {
    axios
      .get(url, {
        headers: {
          auth: api_key
        }
      })
      .then(res => {
        const recentWars = res.data;
        this.setState({ recentWars });
        console.log(this.state.recentWars);
      });
  }

  render() {
    return (
      <div className="App">
        <Wars wars={this.state.recentWars} />
      </div>
    );
  }
}

export default App;
