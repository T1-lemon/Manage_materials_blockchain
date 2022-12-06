import React from "react";
import { Modal } from "@themesberg/react-bootstrap";
import DetailInfor from "./DetailInfor";
import EditModal from "./EditModal";



export default function ModalProduct(props) {
  const { handleClose, show, product, isEdit } = props;

  return (
    <>
      <Modal
        size={isEdit === 3 ? "xl" : "lg"}
        show={show}
        onHide={handleClose}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isEdit === 1 ? (
            <DetailInfor product={product} handleClose={handleClose} />
          ) :  (
            <EditModal product={product} handleClose={handleClose}/>
          ) }
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
