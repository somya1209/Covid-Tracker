import React, { Component } from "react";
import Axios from "axios";
import NumberFormat from "react-number-format";

class IndiaDataPage extends Component {
  state = {
    statedata: [],
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const resApi = await Axios.get("https://api.covid19india.org/data.json");
    const statedata = [];
    for (var i = 0; i < resApi.data.statewise.length; i++) {
      statedata.push(resApi.data.statewise[i]);
    }
    this.setState({
      statedata,
    });
  }
  render() {
    return (
      <div>
        <center>
          <h2
            style={{
              color: "#063146",
              fontWeight: 600,
            }}
          >
            Statewise Data - INDIA
          </h2>
          <br />
          <table
            width="1050"
            style={{
              backgroundColor: "white",
              boxShadow: "0px 10px 20px #555",
              borderRadius: "10px",
            }}
          >
            <tr
              style={{
                backgroundColor: "#063146",
              }}
            >
              <td
                style={{
                  borderBottom: "1px solid #ddd",
                  color: "white",
                  padding: "15px",
                  textAlign: "left",
                  fontFamily: "Segoe UI",
                }}
              >
                <h5 className="my-auto">Last Updated On</h5>
              </td>
              <td
                style={{
                  borderBottom: "1px solid #ddd",
                  color: "white",
                  padding: "15px",
                  textAlign: "left",
                  fontFamily: "Segoe UI",
                }}
              >
                <h5>State</h5>
              </td>

              <td
                style={{
                  borderBottom: "1px solid #ddd",
                  color: "white",
                  padding: "15px",
                  textAlign: "left",
                  fontFamily: "Segoe UI",
                }}
              >
                <h5>Confirmed</h5>
              </td>

              <td
                style={{
                  borderBottom: "1px solid #ddd",
                  color: "white",
                  padding: "15px",
                  textAlign: "left",
                  fontFamily: "Segoe UI",
                }}
              >
                <h5>Active</h5>
              </td>
              <td
                style={{
                  borderBottom: "1px solid #ddd",
                  color: "white",
                  padding: "15px",
                  textAlign: "left",
                  fontFamily: "Segoe UI",
                }}
              >
                <h5>Recovered</h5>
              </td>
              <td
                style={{
                  borderBottom: "1px solid #ddd",
                  color: "white",
                  padding: "15px",
                  textAlign: "left",
                  fontFamily: "Segoe UI",
                }}
              >
                <h5>Deaths</h5>
              </td>
            </tr>
            {this.state.statedata.map((item) => {
              return (
                <tr>
                  <td
                    style={{
                      borderBottom: "1px solid #ddd",
                      color: "#042331",
                      padding: "15px",
                      textAlign: "left",
                      fontFamily: "Segoe UI",
                      fontWeight: 400,
                    }}
                  >
                    <h5>{item.lastupdatedtime}</h5>
                  </td>
                  <td
                    style={{
                      borderBottom: "1px solid #ddd",
                      color: "#042331",
                      padding: "15px",
                      textAlign: "left",
                      fontFamily: "Segoe UI",
                      fontWeight: 400,
                    }}
                  >
                    <h5>{item.state}</h5>
                  </td>
                  <td
                    style={{
                      borderBottom: "1px solid #ddd",
                      color: "#042331",
                      padding: "15px",
                      textAlign: "left",
                      fontFamily: "Segoe UI",
                      fontWeight: 400,
                    }}
                  >
                    <h5>
                      <NumberFormat
                        value={item.confirmed}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </h5>
                  </td>

                  <td
                    style={{
                      borderBottom: "1px solid #ddd",
                      color: "#042331",
                      padding: "15px",
                      textAlign: "left",
                      fontFamily: "Segoe UI",
                      fontWeight: 400,
                    }}
                  >
                    <h5>
                      <NumberFormat
                        value={item.active}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </h5>
                  </td>
                  <td
                    style={{
                      borderBottom: "1px solid #ddd",
                      color: "#042331",
                      padding: "15px",
                      textAlign: "left",
                      fontFamily: "Segoe UI",
                      fontWeight: 400,
                    }}
                  >
                    <h5>
                      <NumberFormat
                        value={item.recovered}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </h5>
                  </td>
                  <td
                    style={{
                      borderBottom: "1px solid #ddd",
                      color: "#042331",
                      padding: "15px",
                      textAlign: "left",
                      fontFamily: "Segoe UI",
                      fontWeight: 400,
                    }}
                  >
                    <h5>
                      <NumberFormat
                        value={item.deaths}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </h5>
                  </td>
                </tr>
              );
            })}
          </table>
          <br />
        </center>
      </div>
    );
  }
}
export default IndiaDataPage;
