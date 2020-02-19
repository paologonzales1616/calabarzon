import React, { useLayoutEffect, useEffect, useContext, useState } from "react";
import Content from "../../components/content/Content";
import { Row, Col, Form, Button, Table, Modal, FormControl,  } from "react-bootstrap";
import { config } from "../../core/config";
import { AppContext } from "../../core/utils/Store";
import { AGE, BRGYS, CODE_DISEASE } from "../../core/utils/Constants";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { Formik, Form as FormikForm } from "formik";

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
  const [showDelete, setShowDelete] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedUser, setSelectedUser] = useState({ index: 0 }); // Selected user for update
  const [selectedUserIndex, setSelectedUserIndex] = useState(0); // Selected index for delete

  useEffect(() => {
    document.title = config.title + " | Dataset";
    setApp({ ...app, page: "dataset" });
    localStorage.page = "dataset";
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
    const res = await fetch(`${config.host}/dataset/get`, options);
    const body = await res.json();
    setData(body);
    console.log(body);
  }

  async function deleteUser() {
    console.log(selectedUserIndex);
    const options = {
      headers: config.headers,
      method: "DELETE",
      body: JSON.stringify({
      })
    };
    const res = await fetch(`${config.host}/accounts`, options);
    const body = await res.json();
    handleCloseDelete();
  }

  async function updateUser(password) {
    console.log(password);
    const options = {
      headers: config.headers,
      method: "PUT",
      body: JSON.stringify({
        ...password
      })
    };
    const res = await fetch(`${config.host}/accounts`, options);
    const body = await res.json();
    handleCloseUpdate();
    setShowPassword(false);
  }

  async function newUser(user) {
    const options = {
      headers: config.headers,
      method: "POST",
      body: JSON.stringify({
        ...user
      })
    };
    const res = await fetch(`${config.host}/accounts`, options);
    const body = await res.json();
    handleCloseNew();
  }

  const handleShowDelete = index => {
    setSelectedUserIndex(index);
    setShowDelete(true);
  };

  const handleCloseDelete = () => {
    setShowDelete(false);
  };

  const handleShowUpdate = user => {
    setSelectedUser(user);
    setShowUpdate(true);
  };

  const handleCloseUpdate = () => {
    setShowUpdate(false);
  };

  const handleShowNew = () => {
    setShowNew(true);
  };

  const handleCloseNew = () => {
    setShowNew(false);
  };

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
              onChange={date => {
                if (date._d) {
                  setFilter({
                    ...filter,
                    year: date._d.getFullYear().toString()
                  });
                }
              }}
            />
          </Form.Group>
        </Col>
        <Col sm={12} md={2}>
          <Form.Group>
            <Form.Label>Brgy.</Form.Label>
            <Form.Control
              as="select"
              value={filter.brgy}
              onChange={e => setFilter({ ...filter, brgy: e.target.value })}
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
                  <td>{val.year}</td>
                  <td>{BRGYS.find(brgy => brgy.value == val.barangay).name}</td>
                  <td>{val.sex}</td>
                  <td>{val.age}</td>
                  <td>{val.disease}</td>
                  <td>{val.cases}</td>
                  <td>
                    <Button size="sm" variant="outline-secondary">
                      Edit
                    </Button>{" "}
                    <Button size="sm" variant="outline-danger">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => {}}>
            Yes
          </Button>
          <Button variant="outline-secondary" onClick={handleCloseDelete}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showUpdate} onHide={handleCloseUpdate}>
        <Formik
          initialValues={{
            password: ""
          }}
          // validationSchema={}
          onSubmit={values => {}}
        >
          {({ errors, touched, handleChange, values }) => (
            <FormikForm>
              <Modal.Header closeButton>
                <Modal.Title>Update User Password</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit" variant="success" size="sm">
                  Save
                </Button>
                <Button
                  size="sm"
                  variant="outline-secondary"
                  onClick={handleCloseUpdate}
                >
                  Cancel
                </Button>
              </Modal.Footer>
            </FormikForm>
          )}
        </Formik>
      </Modal>
      <Modal show={showNew} onHide={handleCloseNew}>
        <Formik
          initialValues={{
    
          }}
          // validationSchema={}
          onSubmit={values => {}}
        >
          {({ errors, touched, handleChange, values }) => (
            <FormikForm>
              <Modal.Header closeButton>
                <Modal.Title>New User</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <FormControl
                    size="sm"
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={touched.username && errors.username}
                    placeholder="Enter Username"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>
               
              </Modal.Body>
              <Modal.Footer>
                <Button
                  size="sm"
                  type="submit"
                  className="shadow"
                  variant="success"
                >
                  Save
                </Button>
                <Button
                  size="sm"
                  variant="outline-secondary"
                  onClick={handleCloseNew}
                >
                  Cancel
                </Button>
              </Modal.Footer>
            </FormikForm>
          )}
        </Formik>
      </Modal>
    </Content>
  );
};

export default Index;
