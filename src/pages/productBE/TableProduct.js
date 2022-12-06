import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faLeaf } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Nav,
  Card,
  Button,
  Table,
  Pagination,
} from "@themesberg/react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductRow from "./ProductRow";
import { useEffect } from "react";
import { getAllProductApi } from "../../redux/actions/ProductAction";


export default function TableProduct(props) {
    const dispatch = useDispatch();
    useEffect( () => {
        async function fetchData() {
             await dispatch(getAllProductApi());
           
          }
          fetchData();
    },[])

    const products = useSelector(state=>state.ProductReducer.listProducts);
    
  return (
    <> <Card border="light" className="table-wrapper table-responsive shadow-sm">
    <Card.Body className="pt-0">
      <Table hover className="user-table align-items-center">
        <thead>
          <tr>
            <th className="border-bottom">Product's Name</th>
            <th className="border-bottom">Price</th>
            <th className="border-bottom">Due Date</th>
            <th className="border-bottom">Category</th>
            <th className="border-bottom">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <ProductRow key={product.code} product={{ ...product, index }} />
            );
          })}
        </tbody>
      </Table>
      <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between pb-0">
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
          Showing <b>10</b> out of <b>25</b> entries
        </small>
      </Card.Footer>
    </Card.Body>
  </Card></>
  )
}
