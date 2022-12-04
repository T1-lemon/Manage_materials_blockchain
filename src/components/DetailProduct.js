import React, { useState, useEffect } from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

const DetailProduct = (props) => {
  const {
    code,
    name,
    agency,
    price,
    dueDate,
    category,
    description,
    employee,
  } = props.initValue;

  console.log(dueDate)

  const products = [
    { title: "Code", value: code },
    { title: "Name", value: name },
    { title: "Agency", value: agency },
    { title: "Price", value: price },
    { title: "Due Date", value: dueDate },
    { title: "Category", value: category },
    { title: "Description", value: description },
    { title: "Employee", value: employee },
  ];

  return (
    <>
      {products.map((item, key) => {
        return (
          <Row>
            <Col md={3}>
              <h6>{item.title}</h6>
            </Col>
            <Col md={9}>{item.value}</Col>
          </Row>
        );
      })}
    </>
  );
};

export default DetailProduct;
