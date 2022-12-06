import React from "react";
import { useState } from "react";
import {
  Col,
  Row,
  Nav,
  Card,
  Button,
  Table,
  Pagination,
} from "@themesberg/react-bootstrap";
import ModalProduct from "./ModalProduct";


export default function ProductRow(props) {
    const {product} = props;
  const {
    code,
    name_product,
    Agency,
    price,
    updatedAt,
    Category,
    description,
    employee,
    id,
  } = product;

 

  const [showEdit, setShowEdit] = useState(false);
  const [showDetailProduct, setShowDetailProduct] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handleCloseDetailProduct = () => setShowDetailProduct(false);
  const handleShowDetailProduct = () => setShowDetailProduct(true);

  return (
    <>
      <tr>
        <td>
          <span className="fw-normal">{name_product}</span>
        </td>
        <td>
          <span className="fw-normal">{parseFloat(price).toFixed(2)}</span>
        </td>
        <td>
          <span className="fw-normal">{updatedAt.split("T")[0]}</span>
        </td>
        <td>
          <span className="fw-normal">{Category.category_name}</span>
        </td>
        <td>
          <div>
            <Button
              variant="outline-success"
              style={{ marginRight: "5px" }}
              size="sm"
              onClick={handleShowEdit}
            >
              Edit
            </Button>

            <Button
              variant="outline-info"
              size="sm"
              onClick={handleShowDetailProduct}
            >
              View
            </Button>
          </div>
        </td>
      </tr>

      

      <ModalProduct
        handleClose={handleCloseDetailProduct}
        show={showDetailProduct}
        product={product}
        isEdit={1}
      />

      <ModalProduct
        handleClose={handleCloseEdit}
        show={showEdit}
        product={product}
        isEdit={2}
      />
    </>
  );
}
