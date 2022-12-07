import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

export default function DetailInfor(props) {
  const {
    code,
    name_product,
    number,
    Agency,
    price,
    updatedAt,
    Category,
    description,
    employee,
  } = props.product;

  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  const products = [
    { title: "Code", value: code },
    { title: "Name", value: name_product },
    { title: "Agency", value: Agency.agency_name },
    { title: "Number", value: number },
    { title: "Price", value: VND.format(price) },
    { title: "Due Date", value: updatedAt.split("T")[0] },
    { title: "Category", value: Category.category_name },
    // { title: "Description", value: description },
    { title: "Employee", value: employee.user_name },
  ];
  return (
    <>
      {products.map((item, index) => {
        return (
          <Row key={item.value}>
            <Col md={3}>
              <h6>{item.title}</h6>
            </Col>
            <Col md={9}>{item.value}</Col>
          </Row>
        );
      })}

      <Row >
        <Col md={3}>
          <h6>Description</h6>
        </Col>
        <Col md={9}>{description}</Col>
      </Row>
    </>
  );
}
