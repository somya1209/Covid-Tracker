import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import image from "../../assets/covid.jpg";
import fever from "../../assets/fever.jpg";
import cough from "../../assets/cough.jpg";
import cold from "../../assets/cold.png";
import fatigue from "../../assets/fatigue.jpg";
import naussea from "../../assets/naussea.jpg";
import breathing from "../../assets/breathing.jpg";
import diarrhea from "../../assets/diarrhea.jpg";
import headache from "../../assets/headaches.png";
import stayhome from "../../assets/stayHome.jpg";
import washhands from "../../assets/washHands.png";
import wearmask from "../../assets/mask.jpg";
import stayinformed from "../../assets/stayInformed.png";
import chills from "../../assets/chills.jpg";
import avoidcontact from "../../assets/avoidContact.jpg";
function WHOGuidelinesPage() {
  return (
    <Container className="flex">
      <div style={{ color: "#042331" }}>
        {/*  <center>
        <h1>WHO Guidelines</h1>
        </center> */}
        <div className="ml-5 mr-5">
          <br />
          <h3 style={{ textAlign: "center" }}>COVID-19 Outbreak</h3>
          <br />
          <h4 style={{ textAlign: "left", marginLeft: 100 }}>
            What is COVID-19?
          </h4>
          <img
            src={image}
            alt="COVID-19"
            style={{
              height: 200,
              width: 300,
              marginTop: 10,
              marginBottom: 20,
              marginLeft: 100,
            }}
          />

          <p
            style={{
              textAlign:'left',
              float: 'left',
              marginLeft: 100,
              marginRight: 100,
              lineHeight: 2,
            }}
          >
            Coronavirus disease (COVID-19) is an infectious disease caused by a
            newly discovered coronavirus. Most people infected with the COVID-19
            virus will experience mild to moderate respiratory illness and
            recover without requiring special treatment. Older people, and those
            with underlying medical problems like cardiovascular disease,
            diabetes, chronic respiratory disease, and cancer are more likely to
            develop serious illness. The best way to prevent and slow down
            transmission is to be well informed about the COVID-19 virus, the
            disease it causes and how it spreads.The COVID-19 virus spreads
            primarily through droplets of saliva or discharge from the nose when
            an infected person coughs or sneezes, so it’s important that you
            also practice respiratory etiquette (for example, by coughing into a
            flexed elbow).{" "}
          </p>
          <p
            style={{
              textAlign:'left',
              float: 'left',
              marginLeft: 100,
              marginRight: 100,
              lineHeight: 2,
            }}
          >
            A novel coronavirus (nCoV) is a new strain that has not been
            previously identified in humans. Coronaviruses are zoonotic, meaning
            they are transmitted between animals and people. Detailed
            investigations found that SARS-CoV was transmitted from civet cats
            to humans and MERS-CoV from dromedary camels to humans. Several
            known coronaviruses are circulating in animals that have not yet
            infected humans. At this time, there are no specific vaccines or
            treatments for COVID-19. However, there are many ongoing clinical
            trials evaluating potential treatments.
          </p>
          <h4 style={{ marginLeft: 100 }}>How did it start?</h4>
          <p
            style={{
              textAlign:'left',
              float: 'right',
              marginLeft: 100,
              marginRight: 100,
              lineHeight: 2,
            }}
          >
            Coronavirus disease 2019 (COVID-19) was first identified amid an
            outbreak of respiratory illness cases in Wuhan City, Hubei Province,
            China. It was initially reported to the WHO on December 31, 2019. On
            January 30, 2020, the WHO declared the COVID-19 outbreak a global
            health emergency. On March 11, 2020, the WHO declared COVID-19 a
            global pandemic, its first such designation since declaring H1N1
            influenza a pandemic in 2009.{" "}
          </p>
          <Button
            href="http://www.emro.who.int/health-topics/corona-virus/index.html"
            target="blank"
            style={{ backgroundColor: "#EE304C", border: 0, marginLeft: 100 }}
          >
            Read More
          </Button>
        </div>
        <div>
          <br />
          <hr />
          <h3 className="ml-5 mr-5" style={{ textAlign: "center" }}>Symptoms</h3>
          <Row style={{  display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',marginTop: 20 }}>
          <Col md={3}>
          <img
            src={fever}
            alt="fever"
            style={{
              height: 200,
              width: 200,
              paddingTop: 5,
              marginBottom: 10
            }}
          />
	   <p style={{textAlign: 'center'}}>Fever</p>
          </Col>
          <Col md={3}>
          <img
            src={cold}
            alt="cold"
            style={{
              height: 200,
              width: 200,
              paddingTop: 5,
              marginBottom: 10
            }}
          />
	   <p style={{textAlign: 'center'}}>Cold</p>
          </Col>
          <Col md={3}>
          <img
            src={headache}
            alt="Headache"
            style={{
              height: 200,
              width: 200,
              paddingTop: 5,
              marginBottom: 10
            }}
          />
	   <p style={{textAlign: 'center'}}>Headaches</p>
          </Col>
          <Col md={3}>
          <img
            src={cough}
            alt="Cough"
            style={{
              height: 200,
              width: 200,
              paddingTop: 5,
              marginBottom: 10
            }}
          />
	   <p style={{textAlign: 'center'}}>Cough</p>
          </Col>
          </Row>
          <Row style={{  display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',marginTop: 20 }}>
          <Col md={3}>
          <img
            src={fatigue}
            alt="Fatigue"
            style={{
              height: 200,
              width: 200,
              paddingTop: 5,
              marginBottom: 10
            }}
          />
	   <p style={{textAlign: 'center'}}>Fatigue</p>
          </Col>
          <Col md={3}>
          <img
            src={naussea}
            alt="Naussea"
            style={{
              height: 200,
              width: 200,
              paddingTop: 5,
              paddingBottom: 10
            }}
          />
           <p style={{textAlign: 'center'}}>Naussea</p>
          </Col>
          <Col md={3}>
          <img
            src={diarrhea}
            alt="Diarrhea"
            style={{
              height: 200,
              width: 200,
              paddingTop: 5,
              marginBottom: 10,
            }}
          />
	   <p style={{textAlign: 'center'}}>Diarrhea</p>
          </Col>
          <Col md={3}>
          <img
            src={breathing}
            alt="Breathing"
            style={{
              height: 200,
              width: 200,
              paddingTop: 5,
              marginBottom: 10,
            }}
          />
	   <p style={{textAlign: 'center'}}>Difficulty Breathing</p>
          </Col>
          </Row>
        </div>
        <div className="ml-5 mr-5">
          <br />
          <hr />
          <h3 style={{ textAlign: "center" }}>Preventive Measures</h3>
	  <Row style={{  display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',marginTop: 20 }}>
          <Col md={3}>
          <img
            src={stayhome}
            alt="Stay Home"
            style={{
              height: 200,
              width: 200,
              paddingTop: 5,
              marginBottom: 20
            }}
          />
	   <p style={{textAlign: 'center'}}>Stay Home, Stay Safe. Self isolate from others if you feel unwell.</p>
          </Col>
          <Col md={3}>
          <img
            src={washhands}
            alt="Wash Hands"
            style={{
              height: 200,
              width: 200,
              paddingTop: 5,
              marginBottom: 15,
            }}
          />
	   <p style={{textAlign: 'center'}}>Wash your hands reguraly 
	   for 20 seconds with soap and water</p>
          </Col>
          <Col md={3}>
          <img
            src={wearmask}
            alt="Wear Mask"
            style={{
              height: 200,
              width: 200,
              paddingTop: 5,
              marginBottom: 15,
            }}
          />
	   <p style={{textAlign: 'center'}}>Cover your mouth and nose with masks when outside.</p>
          </Col>
          </Row>
          <Row style={{  display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',marginTop: 20 }}>
          <Col md={3}>
          <img
            src={stayinformed}
            alt="Stay Informed"
            style={{
              height: 200,
              width: 200,
              paddingTop: 5,
              marginBottom: 20
            }}
          />
	   <p style={{textAlign: 'center'}}>Stay informed and follow the recommended practices.</p>
          </Col>
          <Col md={3}>
          <img
            src={chills}
            alt="Contact doctor if chills"
            style={{
              height: 200,
              width: 250,
              paddingTop: 5,
              marginBottom: 20
            }}
          />
           <p style={{textAlign: 'center'}}>If you have fever, cough and difficulty breathing, 
	   seek medical care immediately.</p>
          </Col>
          <Col md={3}>
          <img
            src={avoidcontact}
            alt="Avoid contact"
            style={{
              height: 200,
              width: 250,
              paddingTop: 5,
              marginBottom: 20,
            }}
          />
	   <p style={{textAlign: 'center'}}>Avoid close contact with people who are unwell. Maintain 1 meter or 4 feet distance.</p>
          </Col>
          </Row>
        </div>
        <div className="ml-5 mr-5">
          <br />
          <hr /> 
          <i><p style={{ textAlign: 'center', fontSize: 25, fontFamily: 'Arial, sans-serif', marginBottom: 50 }}>"Ultimately, the greatest lesson that COVID-19 can teach humanity is that we are all in this together."</p></i>
        </div>
      </div>
    </Container>
  );
}
export default WHOGuidelinesPage;
