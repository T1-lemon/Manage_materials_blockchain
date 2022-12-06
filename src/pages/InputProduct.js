import React from "react";
import { Row } from "@themesberg/react-bootstrap";
import FormData from "../components/FormData";
const initValue = {
  code: "",
  name: "",
  agency: "",
  price: "",
  dueDate: "",
  category: "",
  description: "",
  employee: "",
  index: -1,
  isCheckCreate: 1,
};

const InputProduct = () => {
  return (
    <>
      <Row>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <div className="d-block mb-4 mb-md-0">
            <h4>Insert Product</h4>
            <p className="mb-0">Insert your product to blockchain</p>
          </div>
        </div>

        <FormData initValue={initValue} />
      </Row>
    </>
  );
};

export default InputProduct;
