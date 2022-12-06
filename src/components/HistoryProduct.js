import React from "react";
import { useEffect } from "react";
import { Row, Col } from "@themesberg/react-bootstrap";
const HistoryProduct = (props) => {
  let historyProduct = props.initValue;

  console.log(historyProduct)
  return (
    <div>
      {
    historyProduct === undefined ? 
      <></>
     : 
      <>
        {historyProduct.map((product, index) => {
          return (
            <Row key={index}>
              <Col md={1}>
              {index === 0 ? (
                <p className="text-success">Create</p>
              ) : (
                <p className="text-warning">Edit</p>
              )}
              </Col>
              <Col md={2}>
                <span>Code: </span> {product.returnValues.product[1]}
              </Col>
              <Col md={2}>
                <span>Name: </span> {product.returnValues.product[2]}
              </Col>
              <Col md={4}>
                <span>Due Date: </span> {product.returnValues.product[6]}
              </Col>
              <Col md={2}>
                <span>Admin: </span> {product.returnValues.product[9]}
              </Col>
            </Row>

          );
        })}
      </>
    }
    </div>
  )
  // return (

  // );
};

export default HistoryProduct;
