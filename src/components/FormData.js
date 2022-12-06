import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";
import Web3 from "web3";
import ProductFactory from "../contracts/ProductFactory.json";
import { toast } from "react-toastify";
import initContract from "../ultils/web3Contract";

const ABI = ProductFactory.abi;
const FormData = (props) => {
  const {
    id, 
    code,
    name,
    agency,
    number,
    price,
    dueDate,
    category,
    description,
    employee,
    index,
  } = props.initValue;

  const [inputData, setInputData] = useState({
    id,
    code,
    name,
    agency,
    number,
    price,
    dueDate,
    category,
    description,
    employee,
  });

  const handle = [
    {
      title: "Code",
      placeHolder: "Enter product's code",
      handleFunction: (e) => {
        setInputData({ ...inputData, code: e.target.value });
      },
      value: inputData.code,
    },
    {
      title: "Name",
      placeHolder: "Enter product's name",
      handleFunction: (e) => {
        setInputData({ ...inputData, name: e.target.value });
      },
      value: inputData.name,
    },
    {
      title: "Agency",
      placeHolder: "Enter product's agency",
      handleFunction: (e) => {
        setInputData({ ...inputData, agency: e.target.value });
      },
      value: inputData.agency,
    },
    {
      title: "Number",
      placeHolder: "Enter product's number",
      handleFunction: (e) => {
        setInputData({ ...inputData, number: e.target.value });
      },
      value: inputData.number,
    },
    {
      title: "Price",
      placeHolder: "Enter product's price",
      handleFunction: (e) => {
        setInputData({ ...inputData, price: e.target.value });
      },
      value: inputData.price,
    },
  ];

  const [web3Api, setWeb3Api] = useState({
    web3: null,
    contract: null,
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    
    const init = async () => {
      const { web3, contract } = await initContract();
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];

      await contract.methods
      .updateProduct(inputData, index)
      .send({ from: account, gas: 3000000 });

      toast.success("Product Changed Successfully Into Blockchain");
      props.handleClose();
    }

    init();
    }

  return (
    <>
      <Row>
        <Col xs={12} xl={12}>
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
              <Form className="handleSubmit" onSubmit={handelSubmit}>
                <Row>
                  {handle.map((item, index) => {
                    return (
                      <>
                        <Col md={12} className="mb-3" key={index}>
                          <Form.Group>
                            <Form.Label>{item.title}</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder={item.placeHolder}
                              onChange={item.handleFunction}
                              value={item.value}
                            />
                          </Form.Group>
                        </Col>
                      </>
                    );
                  })}
                </Row>
                <Row className="align-items-center">
                  <Col md={12} className="mb-3">
                    <Form.Group id="gender">
                      <Form.Label>Category</Form.Label>
                      <Form.Select
                        onChange={(e) =>
                          setInputData({
                            ...inputData,
                            category: e.target.value,
                          })
                        }
                        value={inputData.category}
                      >
                        <option value="electronic">Electronic</option>
                        <option value="medicine">Medicine</option>
                        <option value="file">File</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={12} className="mb-3">
                    <Form.Group id="gender">
                      <Form.Label>Description</Form.Label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onChange={(e) =>
                          setInputData({
                            ...inputData,
                            description: e.target.value,
                          })
                        }
                        value={inputData.description}
                      ></textarea>
                    </Form.Group>
                  </Col>
                </Row>
                <div className="mt-3">
                  <Button variant="primary" type="submit">
                    Save All
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default FormData;
