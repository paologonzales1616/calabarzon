import React from "react";
import Content from "../../components/content/Content";
import { Container, Row, Col } from "react-bootstrap";

const Index = () => {
  return (
    <Content>
      <Container>
        <Row>
          <Col sm={12} md={{ span: 6, offset: 3 }}>
            <h3 className="text-center">About</h3>
            <p className="text-center">
              This Health Map is an accessible, automated information system for
              monitoring, organizing and visualizing reports of dreaded diseases
              within the CALABARZON area as reported yearly by the Department of
              Health. It also provides a predictive analysis of the possible
              disease prevalence.
            </p>
          </Col>
        </Row>
      </Container>
    </Content>
  );
};

export default Index;
