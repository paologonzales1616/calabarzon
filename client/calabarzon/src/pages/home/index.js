import Content from "../../components/content/Content";
import React, { useEffect, useContext, useState, useLayoutEffect } from "react";
import Datetime from "react-datetime";
import { Row, Col, Card, Popover, OverlayTrigger } from "react-bootstrap";
import { AppContext } from "../../core/utils/Store";
import { config } from "../../core/config";
import ReactMapboxGl, {
  GeoJSONLayer,
  Layer,
  Feature,
  Marker
} from "react-mapbox-gl";
import { BARANGAY_PROPERITES, TEXT_PROPS } from "../../core/utils/Constants";
import "react-datetime/css/react-datetime.css";
import GEOJSON from "../../core/utils/GeoJSON";
import "./index.css";
import logo from "../../assets/images/imageedit_45_8245427158.png";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoicGFkbzY5IiwiYSI6ImNqc2xiMHMxcjJqZmQ0M3M3bDhpM21tbW8ifQ.ucrihizFRCj9M70JR7hmDg"
});

const bounds = [
  [120.6768888294888, 14.081271873141716], // Southwest coordinates
  [121.85197381492884, 14.63991902621649] // Northeast coordinates
];

const Index = () => {
  const { app, setApp } = useContext(AppContext);
  const [date, setDate] = useState(new Date().getFullYear().toString());
  useEffect(() => {
    document.title = config.title + " | Home";
    setApp({ ...app, page: "home" });
    localStorage.page = "home";
  }, []);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );

  return (
    <Content>
      <Row className="pb-3">
        <Col>
          <Datetime
            value={date}
            className="w-25 float-right mr-1 mb-3"
            dateFormat="YYYY"
            timeFormat={false}
            onChange={date => setDate(date._d.getFullYear().toString())}
          />
        </Col>
        <Col sm={12} md={12}>
          <Card className="shadow-sm">
            <Map
              className="rounded"
              style="mapbox://styles/mapbox/outdoors-v11"
              containerStyle={{
                height: "calc(100vh * .80)",
                width: "100%"
              }}
              onClick={(map, evt) =>
                console.log(`[${evt.lngLat.lng}, ${evt.lngLat.lat}],`)
              }
              maxBounds={bounds}
              center={[121.2418137, 14.1702499]}
              zoom={[13]}
            >
              <GeoJSONLayer
                data={GEOJSON}
                linePaint={{
                  "line-color": "black",
                  "line-width": 2
                }}
              />
              {BARANGAY_PROPERITES.map((v, index) => (
                <Marker 
                coordinates={v.marker_coords} anchor="bottom">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={popover}
                  >
                    <img width="50" src={logo} alt="Map Logo" />
                  </OverlayTrigger>
                </Marker>
              ))}
            </Map>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Index;
