import React, { Component } from "react";
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

class Cards extends Component {
  render() {
    return (
      <Container style={{ marginLeft: 200, marginTop: 50 }}>
        <Row>
          <Col md={3}>
            <Card
              style={{
                borderBottomColor: "rgba(102, 255, 102, 0.8)",
                borderBottomWidth: 20,
                borderRadius: "20px",
                margin: '1em'
              }}
            >
              <CardBody>
                <CardTitle>Infected</CardTitle>
                <CardSubtitle>
                  <h2>{this.props.confirmed}</h2>
                </CardSubtitle>
                <CardText>
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
                margin: '1em'
              }}
            >
              <CardBody>
                <CardTitle>Recovered</CardTitle>
                <CardSubtitle>
                  <h2>{this.props.recovered}</h2>
                </CardSubtitle>
                <CardText>
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
                margin: '1em'
              }}
            >
              <CardBody>
                <CardTitle>Deaths</CardTitle>
                <CardSubtitle>
                  <h2>{this.props.deaths}</h2>
                </CardSubtitle>
                <CardText>
                  <p>{new Date().toDateString()}</p>
                  <p>Number of deaths caused by COVID-19</p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cards;
