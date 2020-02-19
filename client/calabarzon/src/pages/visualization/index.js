import React, { useLayoutEffect, useEffect, useContext, useState } from "react";
import { Row, Col, Form, Card } from "react-bootstrap";
import { config } from "../../core/config";
import Content from "../../components/content/Content";
import { AGE, BRGYS } from "../../core/utils/Constants";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { AppContext } from "../../core/utils/Store";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-labels";
const Index = () => {
  const { app, setApp } = useContext(AppContext);
  const [data, setData] = useState([]);

  const [filter, setFilter] = useState({
    year: new Date().getFullYear().toString(),
    brgy: "anos",
    sex: "male",
    age: "under 1",
    disease_code: "A08"
  });
  useEffect(() => {
    document.title = config.title + " | Data Visualization";
    setApp({ ...app, page: "visualization" });
    localStorage.page = "visualization";
  }, []);

  useLayoutEffect(() => {
    getDataset();
  }, [filter]);

  async function getDataset() {
    const options = {
      headers: config.headers,
      method: "POST",
      body: JSON.stringify({
        ...filter
      })
    };
    const res = await fetch(`${config.host}/visual`, options);
    const body = await res.json();
    setData(body);
    console.log(body);
  }

  return (
    <Content>
      <Row>
        <Col sm={12} md={{ span: 2, offset: 2 }}>
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
              onChange={e => setFilter({ ...filter, brgy: e.target.value })}
            >
              {BRGYS.map((value, index) => (
                <option key={index} value={value.value}>
                  {value.name}
                </option>
              ))}
              <option value="all">All</option>
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
              <option value="all">All</option>
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
              <option value="all">All</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={{ span: 8, offset: 2 }}>
          <Card className="shadow-sm p-2 text-center">
            <p className="text-center">DATA VISUALIZATION</p>
            <Bar
              options={{
                responsive: true,
                legend: {
                  position: "top"
                },
                plugins: {
                  labels: {
                    render: "value",
                    // precision: 2,
                    fontColor: [
                      "black",
                      "black",
                      "black",
                      "black",
                      "black",
                      "black",
                      "black"
                    ],
                    fontSize: 16
                  }
                }
              }}
              data={{
                datasets: [
                  {
                    data: data.map(val => val.cases),
                    backgroundColor: [
                      "#a38dda",
                      "#124ced",
                      "#cf9661",
                      "#e36f66",
                      "#b8216b",
                      "#3f788c",
                      "#8c0f26",
                      "#609564",
                      "#407695",
                      "#684fb0"
                    ],
                    label: "DATA VISUALIZATION"
                  }
                ],
                labels: data.map(val => val.disease_code),
              }}
            />
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Index;
