import React, { Component } from "react";
import "./App.css";
import Cards from "./components/Cards";
import SearchCountry from "./components/SearchCountry";
import image from "./assets/logo.png";
import Axios from "axios";

class App extends Component {

  state = {
    confirmed: 0,
    recovered: 0,
    deaths: 0
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const res = await Axios.get("https://covid19.mathdro.id/api");
    this.setState({
      confirmed: res.data.confirmed.value,
      recovered: res.data.recovered.value,
      deaths: res.data.deaths.value,
    })
  }

  renderCountryOptions() {

  }


  render() {
    return (
      <div className="App">
        <center>
          <h1 style={{ marginTop: 10, fontFamily: "Monospace", fontSize: 50 }}>
            <img
              src={image}
              alt="COVID-19"
              style={{ height: 70, width: 70, position: "relative" }}
            />{" "}
            COVID-19 Tracker
          </h1>
          <SearchCountry searchCountry={this.renderCountryOptions}/>
        </center>
        <Cards confirmed={this.state.confirmed} recovered={this.state.recovered} deaths={this.state.deaths}/>
      </div>
    );
  }
}

export default App;
