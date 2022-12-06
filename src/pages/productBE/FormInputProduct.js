import React, { useState, useEffect } from "react";
import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addProductApi } from "../../redux/actions/ProductAction";

export default function FormInputProduct() {
  const categories = useSelector((state) => state.CategoryReducer.category);
  const agencies = useSelector((state) => state.AgencyReducer.agency);
  const userLogin = useSelector((state) => state.UserReducer.user);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      code: "",
      name_product: "",
      price: "",
      number: "",
      category_id: "",
      agency_id: "",
    },

    validationSchema: Yup.object().shape({
      code: Yup.string().required("Code is required"),
      name_product: Yup.string().required("Name is required"),
      price: Yup.string().required("Price is required"),
      number: Yup.string().required("Number is required"),
      category_id: Yup.string().required("Category is required"),
      agency_id: Yup.string().required("Agency is required"),
    }),

    onSubmit: async (values) => {
      const data = { ...values, employee_id: userLogin.id };
      console.log(data);
      await dispatch(addProductApi(data,navigate));
      

    },
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;
  const inputs = [
    {
      title: "Code",
      placeHolder: "Enter product's code",
      value: values.code,
      name: "code",
      error: errors.code,
    },
    {
      title: "Name",
      placeHolder: "Enter product's name",
      value: values.name_product,
      name: "name_product",
      error: errors.name_product,
    },
    {
      title: "Price",
      placeHolder: "Enter product's price",
      value: values.price,
      name: "price",
      error: errors.price,
    },
    {
      title: "Number",
      placeHolder: "Enter product's number",
      value: values.number,
      name: "number",
      error: errors.number,
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
                              type="text"
                              placeholder={item.placeHolder}
                              value={item.value}
                              name={item.name}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <span className="text-danger">{item.error}</span>
                        </Col>
                      </>
                    );
                  })}
                </Row>

                <Row className="align-items-center">
                  {/* category */}
                  <Col md={12} className="mb-3">
                    <Form.Group id="gender">
                      <Form.Label>Category</Form.Label>

                      <Form.Select
                        name="category_id"
                        onChange={handleChange}
                        value={values.category_id}
                      >
                        <option>Select Category</option>
                        {categories.map((category, index) => {
                          return (
                            <option value={category.id}>
                              {category.category_name}
                            </option>
                          );
                        })}
                      </Form.Select>

                      <span className="text-danger">{errors.category_id}</span>
                    </Form.Group>
                  </Col>

                  {/* agency */}
                  <Col md={12} className="mb-3">
                    <Form.Group id="gender">
                      <Form.Label>Agency</Form.Label>

                      <Form.Select
                        name="agency_id"
                        value={values.agency_id}
                        onChange={handleChange}
                      >
                        <option>Select Agency</option>

                        {agencies.map((agency, index) => {
                          return (
                            <option value={agency.id}>
                              {agency.agency_name}
                            </option>
                          );
                        })}
                      </Form.Select>

                      <span className="text-danger">{errors.agency_id}</span>
                    </Form.Group>
                  </Col>

                  <Col md={12} className="mb-3">
                    <Form.Group id="gender">
                      <Form.Label>Description</Form.Label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="description"
                        onChange={handleChange}
                        value={values.description}
                      ></textarea>
                    </Form.Group>
                    <span className="text-danger">{errors.description}</span>
                  </Col>
                </Row>
                <div className="mt-3">
                  <Button variant="primary" type="submit">
                    Add Product
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
