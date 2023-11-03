import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Parth Singh </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br /> I am a Pre-Final Year student pursuing B.Tech.
            in CSE with a specialization in AI/ML from VIT Chennai.
            <br />
            I am passionate about <span className="purple">Machine Learning </span> and the new possibilities it will open for everyone in the future.
            <br />
            <br />
            Some of my pastime activities are 
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight /> Music
            </li>
            <li className="about-activity">
              <ImArrowRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImArrowRight /> Working Out
            </li>
            <li className="about-activity">
              <ImArrowRight /> Watching Movies
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
