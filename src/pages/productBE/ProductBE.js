import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCog,
  faSearch,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  InputGroup,
  Dropdown,
} from "@themesberg/react-bootstrap";
import TableProduct from "./TableProduct";




export default function ProductBE() {
  return (
    <>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-1">
      <div className="d-block mb-1 mb-md-0">
        <h4>Products</h4>
        <p className="mb-0">Show all product inside the database</p>
      </div>
    </div>

    <div className="table-settings mb-1">
      <Row className="justify-content-between align-items-center">
        {/* <Col xs={8} md={6} lg={3} xl={4}>
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="Search" />
          </InputGroup>
        </Col> */}
      
      </Row>
    </div>
    <TableProduct />
  </>
  )
}
