import React from "react";
import { Button, Card, Col, Row } from "reactstrap";

function GotoVideoCall() {
  return (
    <div className="container mt-2 mb-2 mx-2">
      <Row>
        <Card>
          <Col className="mt-2 mb-2 mx-3 ">
            <a target="_blank" href="#/astrovideocall">
              <Button color="success">Go to VideoCall Page</Button>
            </a>
          </Col>
        </Card>
      </Row>
    </div>
  );
}

export default GotoVideoCall;
