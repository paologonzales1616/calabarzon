import React, { useLayoutEffect, useEffect, useContext, useState } from "react";
import Content from "../../components/content/Content";
import { Row, Col, Form, Button, Table } from "react-bootstrap";
import { config } from "../../core/config";
import { AppContext } from "../../core/utils/Store";
import { AGE, BRGYS, CODE_DISEASE } from "../../core/utils/Constants";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
const Index = () => {
  const { app, setApp } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    year: new Date().getFullYear().toString(),
    barangay: "anos",
    sex: "male",
    age: "under 1",
    disease_code: "A08"
  });
  useEffect(() => {
    document.title = config.title + " | Dataset";
    setApp({ ...app, page: "dataset" });
    localStorage.page = "dataset";
  }, []);

  useLayoutEffect(() => {
    getDataset();
  }, [filter]);

  async function getDataset() {
    const res = await fetch(
      `${config.host}/dataset/${filter.year}/${filter.barangay}/${filter.sex}/${filter.age}/${filter.disease_code}`
    );
    const body = await res.json();
    setData(body);
    console.log(body);
  }

  return (
    <Content>
      <Row>
        <Col sm={12} md={12}>
          <Button
            size="sm"
            variant="outline-success mb-3"
            className="float-right"
            onClick={() => {}}
          >
            New Entry
          </Button>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={2}>
          <Form.Group>
            <Form.Label>Year</Form.Label>
            <Datetime
              className="mr-1"
              value={filter.year}
              dateFormat="YYYY"
              timeFormat={false}
              onChange={date =>
                setFilter({ ...filter, year: date._d.getFullYear().toString() })
              }
            />
          </Form.Group>
        </Col>
        <Col sm={12} md={2}>
          <Form.Group>
            <Form.Label>Brgy.</Form.Label>
            <Form.Control
              as="select"
              value={filter.barangay}
              onChange={e => setFilter({ ...filter, barangay: e.target.value })}
            >
              {BRGYS.map((value, index) => (
                <option key={index} value={value.value}>
                  {value.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col sm={12} md={2}>
          <Form.Group>
            <Form.Label>Sex</Form.Label>
            <Form.Control
              as="select"
              value={filter.sex}
              onChange={e => setFilter({ ...filter, sex: e.target.value })}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col sm={12} md={2}>
          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
              value={filter.age}
              onChange={e => setFilter({ ...filter, age: e.target.value })}
              as="select"
            >
              {AGE.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col sm={12} md={2}>
          <Form.Group>
            <Form.Label>Disease Code</Form.Label>
            <Form.Control
              as="select"
              value={filter.disease}
              onChange={e =>
                setFilter({ ...filter, disease_code: e.target.value })
              }
            >
              {CODE_DISEASE.map((value, index) => (
                <option key={index} value={value.code}>
                  {`(${value.code}) ${value.disease} `}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="text-center" sm={12} md={12}>
          <Table striped bordered hover size="sm" responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Year</th>
                <th>Brgy</th>
                <th>Sex</th>
                <th>Age</th>
                <th>Disease Code</th>
                <th>Cases</th>
                <th width="15%">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.Year}</td>
                  <td>{val.barangay}</td>
                  <td>{val.sex}</td>
                  <td>{val.age}</td>
                  <td>{val.disease}</td>
                  <td>{val.cases}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Content>
  );
};

export default Index;
