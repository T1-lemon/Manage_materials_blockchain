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

      <Row>
        <Col xs={12} className="mb-4">
          <Card>
            <Card.Body>
              <PageVisitsTable />
            </Card.Body>
            <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
              <Nav>
                <Pagination className="mb-2 mb-lg-0">
                  <Pagination.Prev>Previous</Pagination.Prev>
                  <Pagination.Item active>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Item>4</Pagination.Item>
                  <Pagination.Item>5</Pagination.Item>
                  <Pagination.Next>Next</Pagination.Next>
                </Pagination>
              </Nav>
              <small className="fw-bold">
                Showing <b>{1}</b> out of <b>25</b> entries
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
};
