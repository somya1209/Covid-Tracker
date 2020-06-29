import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import news1 from "../../assets/news1.jpg";


function NewsPage() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <center>
        <h1
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            color: "#063146",
            fontSize: 40,
          }}
        >
          Covid-19 Headlines
        </h1>
      </center>
      <Container className="flex">
        <Row
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: 20,
          }}
        >
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={news1} alt="Covid-19 news" />
              <CardBody>
                <CardTitle>
                  <h5>News Headline</h5>
                </CardTitle>
                <div className="dropdown-divider"></div>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button
                  href="https://www.google.co.in/?gws_rd=ssl"
                  target="blank"
                  style={{ backgroundColor: "#063146", border: 0 }}
                >
                  Read More
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={news1} alt="Covid-19 news" />
              <CardBody>
                <CardTitle>
                  <h5>News Headline</h5>
                </CardTitle>
                <div className="dropdown-divider"></div>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button
                  href="https://www.google.co.in/?gws_rd=ssl"
                  target="blank"
                  style={{ backgroundColor: "#063146", border: 0 }}
                >
                  Read More
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={news1} alt="Covid-19 news" />
              <CardBody>
                <CardTitle>
                  <h5>News Headline</h5>
                </CardTitle>
                <div className="dropdown-divider"></div>
                <CardText>
                  Some quick example text to build on the News Headline and make
                  up the bulk of the card's content.
                </CardText>
                <Button
                  href="https://www.google.co.in/?gws_rd=ssl"
                  target="blank"
                  style={{ backgroundColor: "#063146", border: 0 }}
                >
                  Read More
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={news1} alt="Covid-19 news" />
              <CardBody>
                <CardTitle>
                  <h5>News Headline</h5>
                </CardTitle>
                <div className="dropdown-divider"></div>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button
                  href="https://www.google.co.in/?gws_rd=ssl"
                  target="blank"
                  style={{ backgroundColor: "#063146", border: 0 }}
                >
                  Read More
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: 20,
          }}
        >
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={news1} alt="Covid-19 news" />
              <CardBody>
                <CardTitle>
                  <h5>News Headline</h5>
                </CardTitle>
                <div className="dropdown-divider"></div>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button
                  href="https://www.google.co.in/?gws_rd=ssl"
                  target="blank"
                  style={{ backgroundColor: "#063146", border: 0 }}
                >
                  Read More
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={news1} alt="Covid-19 news" />
              <CardBody>
                <CardTitle>
                  <h5>News Headline</h5>
                </CardTitle>
                <div className="dropdown-divider"></div>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button
                  href="https://www.google.co.in/?gws_rd=ssl"
                  target="blank"
                  style={{ backgroundColor: "#063146", border: 0 }}
                >
                  Read More
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={news1} alt="Covid-19 news" />
              <CardBody>
                <CardTitle>
                  <h5>News Headline</h5>
                </CardTitle>
                <div className="dropdown-divider"></div>
                <CardText>
                  Some quick example text to build on the News Headl ineand make
                  up the bulk of the card's content.
                </CardText>
                <Button
                  href="https://www.google.co.in/?gws_rd=ssl"
                  target="blank"
                  style={{ backgroundColor: "#063146", border: 0 }}
                >
                  Read More
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={news1} alt="Covid-19 news" />
              <CardBody>
                <CardTitle>
                  <h5>News Headline</h5>
                </CardTitle>
                <div className="dropdown-divider"></div>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button
                  href="https://www.google.co.in/?gws_rd=ssl"
                  target="blank"
                  style={{ backgroundColor: "#063146", border: 0 }}
                >
                  Read More
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default NewsPage;
