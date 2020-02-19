import React, { useEffect, useContext } from "react";
import Content from "../../components/content/Content";
import { Row, Col, Table } from "react-bootstrap";
import { CODE_DISEASE } from "../../core/utils/Constants";
import { config } from "../../core/config";
import { AppContext } from "../../core/utils/Store";

const Index = () => {
  const { app, setApp } = useContext(AppContext);

  useEffect(() => {
    document.title = config.title + " | Disease";
    setApp({ ...app, page: "disease" });
    localStorage.page = "disease";
  }, []);
  return (
    <Content>
      <Row>
        <Col sm={12} md={{ span: 8, offset: 2 }}>
        <h4 className="text-center">Disease Code List</h4>
          <div
            style={{
              height: 500,
              overflow: "auto"
            }}
          >
            <Table bordered hover>
              <thead>
                <tr>
                  <td>#</td>
                  <td>Code</td>
                  <td>Disease</td>
                </tr>
              </thead>
              <tbody>
                {CODE_DISEASE.map((val, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{val.code}</td>
                    <td>{val.disease}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Content>
  );
};

export default Index;
