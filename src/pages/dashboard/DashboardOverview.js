import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

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
import { getAllCategoryApi } from "../../redux/actions/CategoryAction";
import { getAllAgencyApi } from "../../redux/actions/AgencyAction";
import "./dashboard.css";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await dispatch(getAllCategoryApi());

    await dispatch(getAllAgencyApi());
  };

  return (
    <>
      <Row className="mt-2">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Thành viên nhóm thực hiện </Card.Title>
              <Card.Text>Bùi Anh Tuấn</Card.Text>
              <Card.Text>Đỗ Văn Đức Thành</Card.Text>
              <Card.Text>Nguyễn Thị Hương</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Quy trình nhập sản phẩm</Card.Title>
              <Card.Text>
                Bao gồm các bước thực hiện để nhập một sản phẩm vào blockchain
              </Card.Text>
              <Button variant="primary" className="w-100">Link</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Code repository</Card.Title>
              <Card.Text>Code repository bao gồm Frontend, Backend</Card.Text>
              <Button variant="primary" className="w-100">Link</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
        <Card>
            <Card.Body>
              <Card.Title>Get Started</Card.Title>
              <Card.Text>Bắt đầu trải nghiệm sản phẩm</Card.Text>
              <Button variant="primary" className="w-100">Link</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
