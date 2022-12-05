import React from "react";
import { CounterWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";

import {
  Col,
  Row,
  Nav,
  Card,
  Image,
  Button,
  Table,
  Dropdown,
  ProgressBar,
  Pagination,
  ButtonGroup,
} from "@themesberg/react-bootstrap";

export default () => {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={6} xl={3} className="mb-4">
          <CounterWidget title="Node" value="1" />
        </Col>
        <Col xs={12} sm={6} xl={3} className="mb-4">
          <CounterWidget title="Blocks" value="2" />
        </Col>
        <Col xs={12} sm={6} xl={3} className="mb-4">
          <CounterWidget title="Transactions" value="2" />
        </Col>
        <Col xs={12} sm={6} xl={3} className="mb-4">
          <CounterWidget title="Contracts" value="1" />
        </Col>
      </Row>

    </>
  );
};
