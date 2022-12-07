import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { editProductApi } from "../../redux/actions/ProductAction";
import { useNavigate } from "react-router-dom";


export default function EditModal(props) {
    const {handleClose,product} = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state =>state.UserReducer.user);
  const {
    code,
    name_product,
    Agency,
    price,
    number,
    updatedAt,
    Category,
    description,
    employee,
    id
  } = product;

  const formik = useFormik({
    initialValues: {
      code,
      name_product,
      price,
      number,
      description,
    },

    onSubmit: async (values) => {
        const data = {...values,employee_id:userLogin.id}
        await dispatch(editProductApi(id,data));
        handleClose();
        toast.success("Product Changed Successfully!");
        navigate("/home/all-product");
    //   console.log("data", data);
    },
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;

  

  const inputs = [
    {
      title: "Code",
      placeHolder: "Enter product's code",
      name: "code",
      value: values.code,
    },
    {
      title: "Name",
      placeHolder: "Enter product's name",
      name: "name_product",
      value: values.name_product,
    },
    {
      title: "Number",
      placeHolder: "Enter product's number",
      name: "number",
      value: values.number,
    },
    {
      title: "Price",
      placeHolder: "Enter product's price",
      name: "price",
      value:  values.price,
    },
  ];

  
  return (
    <>
      <Row>
        <Col xs={12} xl={12}>
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
              <Form className="handleSubmit" onSubmit={handleSubmit}>
                <Row>
                  {inputs.map((item, index) => {
                    return (
                      <>
                        <Col md={12} className="mb-3" key={index}>
                          <Form.Group>
                            <Form.Label>{item.title}</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder={item.placeHolder}
                              onChange={handleChange}
                              name={item.name}
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
                      <Form.Label>Description</Form.Label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onChange={handleChange}
                        name="description"
                        value={values.description}
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
}
