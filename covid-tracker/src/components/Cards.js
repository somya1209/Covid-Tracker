import React, {useState, useEffect } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Container,
} from "reactstrap";
import { Line } from 'react-chartjs-2';
import Axios from 'axios'

const url = 'https://covid19.mathdro.id/api';
const fetchDailyData = async () => {
  try {
    const { data } = await Axios.get(`${url}/daily`);

   return data.map(({ confirmed,recovered, deaths, reportDate: date }) => ({ confirmed: confirmed.total,recovered: recovered.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};


const Cards = (props) => {
  const [dailyData, setDailyData] = useState({});
useEffect(() => {
  const fetchMyAPI = async () => {
    const initialDailyData = await fetchDailyData();

    setDailyData(initialDailyData);
  };

  fetchMyAPI();
}, []);

const lineChart = (
  dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
          data: dailyData.map((data) => data.confirmed),
          label: 'Infected',
          borderColor: 'rgb(102, 255, 102)',
          fill: true,
        },
        {
          data: dailyData.map((data) => data.recovered),
          label: 'Recovered',
          borderColor: 'rgb(255, 255, 102)',
          fill: true,
        }, 
        {
          data: dailyData.map((data) => data.deaths),
          label: 'Deaths',
          borderColor: 'rgb(255, 102, 102)',
          backgroundColor: 'rgba(255, 102, 102, 0.8)',
          fill: true,
        },
        ],
      }}
    />
  ) : null
);

  return (
    
  

      <Container className="flex"  >
        <Row style={{  display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',marginTop: 20 }}>
          <Col md={3}>
            <Card className="box"
              style={{
                borderBottomColor: "rgba(102, 255, 102, 0.8)",
                borderBottomWidth: 20,
                borderRadius: "20px",
                margin: '1em',
                boxShadow: "0px 10px 20px #555",
              }}
            >
              <CardBody>
                <CardTitle style={{color: "#063146"}}>Infected</CardTitle>
                <CardSubtitle style={{color: "#063146"}}>
                  <h2>{props.confirmed}</h2>
                </CardSubtitle>
                <CardText style={{color: "#063146"}}>
                  <p>{new Date().toDateString()}</p>
                  <p>Number of confirmed cases of COVID-19</p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                borderBottomColor: "rgba(255, 255, 102, 0.8)",
                borderBottomWidth: 20,
                borderRadius: "20px",
                margin: '1em',
                boxShadow: "0px 10px 20px #555",
              }}
            >
              <CardBody>
                <CardTitle style={{color: "#063146"}}>Recovered</CardTitle>
                <CardSubtitle style={{color: "#063146"}}>
                  <h2>{props.recovered}</h2>
                </CardSubtitle>
                <CardText style={{color: "#063146"}}>
                  <p>{new Date().toDateString()}</p>
                  <p>Number of recoveries from COVID-19</p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                borderBottomColor: "rgba(255, 102, 102, 0.8)",
                borderBottomWidth: 20,
                borderRadius: "20px",
                margin: '1em',
                boxShadow: "0px 10px 20px #555",
              }}
            >
              <CardBody>
                <CardTitle style={{color: "#063146"}}>Deaths</CardTitle>
                <CardSubtitle style={{color: "#063146"}}>
                  <h2>{props.deaths}</h2>
                </CardSubtitle>
                <CardText style={{color: "#063146"}}>
                  <p>{new Date().toDateString()}</p>
                  <p>Number of deaths caused by COVID-19</p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
<div>
  <br/>
  <center><h3 style={{color: "#063146"}}>Global Data</h3></center>
  <br/>
  {lineChart}</div>
       
      </Container>

    );
  }


export default Cards;
