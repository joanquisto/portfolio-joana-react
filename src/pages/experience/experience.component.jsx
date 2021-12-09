import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";  
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
    <br /> <br /><br />
      <h1 className="pt-2 text-center font-details-b pb-2">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
      <br /> <br /><br />
        <Container>
          <Tilt options={{ max: 10 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center"></Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style "></strong>
                      <strong>In the last couple of years, I've created websites for my family, friends and clients who came across on my websites. I was able help them in stabilizing their businesses and organization, and I hope I could help you too. The donations and profits from every website I've created are credited to the coordinator of Santo Niño Church in Taguig City, for the improvement of our Chapel.
</strong>                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>

          </Tilt>
          <br /> <br />
        </Container>
        <br /> <br /><br />
      </Jumbotron>
    </div>

  );
};

export default Experience;