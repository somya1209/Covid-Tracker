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
          Covid-19 Headlines
        </h1>
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
    </div>
    </Container>
  );
}
export default NewsPage;
