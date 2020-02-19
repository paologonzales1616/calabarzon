import React, { useContext, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  Nav,
  Form,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import { AppContext, BrgyContext, DateContext } from "../../core/utils/Store";
import { withRouter } from "react-router-dom";
const Navigationbar = ({ history }) => {
  const { app, setApp } = useContext(AppContext);

  return (
    <Navbar
      bg="light"
      className="navbar shadow-sm p-3 mb-3 bg-white rounded"
      expand
    >
      <Button
        variant="outline-success"
        onClick={() => setApp({ ...app, isOpen: !app.isOpen })}
      >
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto pl-2" navbar></Nav>
        <Nav className="ml-auto pt-2" navbar>
          <OverlayTrigger
            placement="auto"
            overlay={<Tooltip>Sign Out</Tooltip>}
          >
            <Nav.Link
              onClick={e => {
                e.preventDefault();
                history.push("/login");
                localStorage.removeItem("accountType");
                localStorage.removeItem("brgy");
              }}
              href="#"
            >
              <FontAwesomeIcon size="lg" icon={faPowerOff} />
            </Nav.Link>
          </OverlayTrigger>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navigationbar);
