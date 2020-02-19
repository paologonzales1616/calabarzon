import React, { useContext, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { config } from "../../core/config";
import Content from "../../components/content/Content";
import { Bar } from "react-chartjs-2";
import { AppContext } from "../../core/utils/Store";
import "chartjs-plugin-labels";
const Index = () => {
  const { app, setApp } = useContext(AppContext);

  useEffect(() => {
    document.title = config.title + " | Data Prediction";
    setApp({ ...app, page: "prediction" });
    localStorage.page = "prediction";
  }, []);

  return (
    <Content>
      <Row>
        <Col sm={12} md={{ span: 8, offset: 2 }}>
          <Card className="shadow-sm p-2 text-center">
            <p>DATA PREDICTION</p>

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
                    data: [],
                    backgroundColor: [
                      "#ff6384",
                      "#36a2eb",
                      "#ff9f40",
                      "#ffcd56",
                      "#4bc0c0",
                      "#f48024",
                      "#989bd0"
                    ],
                    label: "DATA PREDICTION"
                  }
                ],
                labels: []
              }}
            />
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Index;
