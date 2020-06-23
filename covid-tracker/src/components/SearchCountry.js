import React, { Component } from "react";


class SearchCountry extends Component {
  render() {
    return (
      <div>
        <select
          className="countryList"
          onChange={this.props.CountryData}
          style={{
            marginTop: 20,
            marginBottom: 20,
            borderRadius: "20px",
            paddingTop: "5px",
            paddingBottom: "5px",
            paddingLeft: "7px"
          }}
        >
          <option>Global</option>
          {this.props.CountryOptions}
        </select>

        
      </div>
    );
  }
}

export default SearchCountry;
