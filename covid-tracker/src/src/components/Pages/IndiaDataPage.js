import React, { Component } from "react";
import Axios from "axios";
import NumberFormat from "react-number-format";
import { Container } from "reactstrap";
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';
import './IndiaDataPage.css';

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
    const columns = [{  
      Header: 'Last Updated',
      accessor: 'lastupdatedtime',
      headerClassName: 'hdrCls',
      footerClassName: 'ftrCls',
      className: 'cellCls',
      filterMethod: (filter, row) => {
          var v = row[filter.id]
            .toString()
            .toUpperCase()
            .search(filter.value.toUpperCase());
          // row[filter.id].toString().startsWith(filter.value)
          if (v >= 0) {
            return true;
          } else return false;
          
        }, Filter: ({filter, onChange}) => (
          <input
          placeholder="Search"
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              width: '100%',
              backgroundColor: '#eeeeee',
              color: 'black',
              fontSize: 15
            }}
          />
        ) 
           
      },{  
      Header: 'State',  
      accessor: 'state',
      headerClassName: 'hdrCls',
      className: 'cellCls',
      footerClassName: 'ftrCls',
      filterMethod: (filter, row) => {
          var v = row[filter.id]
            .toString()
            .toUpperCase()
            .search(filter.value.toUpperCase());
          // row[filter.id].toString().startsWith(filter.value)
          if (v >= 0) {
            return true;
          } else return false;
        } , Filter: ({filter, onChange}) => (
          <input
          placeholder="Search"
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              width: '100%',
              backgroundColor: '#DCDCDC',
              color: 'black',
              fontSize: 15
            }}
          />
        )     
      },{  
        Header: 'Confirmed',  
        accessor: 'confirmed',
        headerClassName: 'hdrCls',
        className: 'cellCls',
        footerClassName: 'ftrCls',
        filterMethod: (filter, row) => {
          var v = row[filter.id]
            .toString()
            .toUpperCase()
            .search(filter.value.toUpperCase());
          // row[filter.id].toString().startsWith(filter.value)
          if (v >= 0) {
            return true;
          } else return false;
        }, Filter: ({filter, onChange}) => (
          <input
          placeholder="Search"
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              width: '100%',
              backgroundColor: '#DCDCDC',
              color: 'black',
              fontSize: 15
            }}
          />
        )    
     
        },{  
        Header: 'Active',  
        accessor: 'active',
        headerClassName: 'hdrCls',
        className: 'cellCls',
        footerClassName: 'ftrCls',
        filterMethod: (filter, row) => {
          var v = row[filter.id]
            .toString()
            .toUpperCase()
            .search(filter.value.toUpperCase());
          // row[filter.id].toString().startsWith(filter.value)
          if (v >= 0) {
            return true;
          } else return false;
        }, Filter: ({filter, onChange}) => (
          <input
          placeholder="Search"
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              width: '100%',
              backgroundColor: '#DCDCDC',
              color: 'black',
              fontSize: 15
            }}
          />
        )    
     
        },{  
        Header: 'Recovered',  
        accessor: 'recovered',
        headerClassName: 'hdrCls',
        className: 'cellCls',
        footerClassName: 'ftrCls',
        filterMethod: (filter, row) => {
          var v = row[filter.id]
            .toString()
            .toUpperCase()
            .search(filter.value.toUpperCase());
          // row[filter.id].toString().startsWith(filter.value)
          if (v >= 0) {
            return true;
          } else return false;
        }, Filter: ({filter, onChange}) => (
          <input
          placeholder="Search"
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              width: '100%',
              backgroundColor: '#DCDCDC',
              color: 'black',
              fontSize: 15
            }}
          />
        )    
     
        },{  
      Header: 'Deceased',  
      accessor: 'deaths',
      headerClassName: 'hdrCls',
      className: 'cellCls',
      footerClassName: 'ftrCls',
      filterMethod: (filter, row) => {
        var v = row[filter.id]
          .toString()
          .toUpperCase()
          .search(filter.value.toUpperCase());
        // row[filter.id].toString().startsWith(filter.value)
        if (v >= 0) {
          return true;
        } else return false;
      }, Filter: ({filter, onChange}) => (
        <input
        placeholder="Search"
          onChange={event => onChange(event.target.value)}
          value={filter ? filter.value : ''}
          style={{
            width: '100%',
            backgroundColor: '#DCDCDC',
            color: 'black',
            fontSize: 15
          }}
        />
      )    
   
      }
  ]  

    return (
      <Container className="container">
        <div>
        <div ml-5 mr-5>
          <br />
            <h1
            className='container'
              style={{
                color: "#063146",
                fontWeight: 600,
                display: "flex",
                flexDirection: "column",
                flexFlow: "column",
                textAlign: "center",
              }}
            >
              India Live
            </h1>
            <br />

            <ReactTable
                    className="MyReactTableClass"
                     columns={columns}
                     data={this.state.statedata}
                     filterable
                     defaultPageSize={10}                   
                     >
                       

                     </ReactTable>

         {/*    <table
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
            </table> */}
            <br />
            <br />
        </div>
        </div>
      </Container>
    );
  }
}
export default IndiaDataPage;
