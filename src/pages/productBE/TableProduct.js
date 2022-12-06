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
     
    </Card.Body>
  </Card></>
  )
}
