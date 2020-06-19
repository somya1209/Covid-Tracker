import React, { Component } from "react";
import "./App.css";
import Cards from "./components/Cards";
import SearchCountry from "./components/SearchCountry";
import image from "./assets/logo.png";
import Axios from "axios";

class App extends Component {

  constructor(props) {
    super(props);

    this.getCountryData = this.getCountryData.bind(this);
  }

  state = {
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    countries: []
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const resApi = await Axios.get("https://covid19.mathdro.id/api");
    const resCountries = await Axios.get("https://covid19.mathdro.id/api/countries");
    const countries=[];
    for(var i = 0; i < resCountries.data.countries.length; i++){
      countries.push(resCountries.data.countries[i].name);
  }
    this.setState({
      confirmed: resApi.data.confirmed.value.toLocaleString(navigator.language, { minimumFractionDigits: 0 }),
      recovered: resApi.data.recovered.value.toLocaleString(navigator.language, { minimumFractionDigits: 0 }),
      deaths: resApi.data.deaths.value.toLocaleString(navigator.language, { minimumFractionDigits: 0 }),
      countries
    })
  }

  async getCountryData(e) {

    if(e.target.value === 'Global')
    {
      return this.getData();
    }
    try {
    const res = await Axios.get(`https://covid19.mathdro.id/api/countries/${e.target.value}`);
    this.setState({
      confirmed: res.data.confirmed.value.toLocaleString(navigator.language, { minimumFractionDigits: 0 }),
      recovered: res.data.recovered.value.toLocaleString(navigator.language, { minimumFractionDigits: 0 }),
      deaths: res.data.deaths.value.toLocaleString(navigator.language, { minimumFractionDigits: 0 })
    })
  } catch(err) {
    if(err.response.status === 404)
    this.setState({
      confirmed: 'Data Unavailable',
      recovered: 'Data Unavailable',
      deaths: 'Data Unavailable'
    })
    console.log(err.response);
  }
  }

  renderCountryOptions() {
    return this.state.countries.map((country, i) => {
      return <option key={i}>{country}</option>
  
    });
  }


  render() {
    return (
      <div className="App">
        <center>
          <h1 style={{ marginTop: 10, fontFamily: "Arial, Helvetica, sans-serif", fontSize: 50 }}>
            C <img
              src={image}
              alt="COVID-19"
              style={{ height: 50, width: 50, position: "relative" }}
            /> VID-19 Tracker
          </h1>
          <SearchCountry CountryOptions={this.renderCountryOptions()} CountryData={this.getCountryData}/>
        </center>
        <Cards confirmed={this.state.confirmed} recovered={this.state.recovered} deaths={this.state.deaths}/>
      </div>
    );
  }
}

export default App;
