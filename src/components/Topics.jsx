import React from "react";
import { Card } from "react-bootstrap";

const Topics = () => {
  return (
    <Card>
      <Card.Body>
        <h4>Web Development (Example Club)</h4>
        <ul className='users'>
          <li>Web Dev Simplified @DevSimplified</li>
          <li>Ben Awad @benawad</li>
          <li>Dev Ed @developedbyEd</li>
          <li>... and 50 others</li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Topics;
