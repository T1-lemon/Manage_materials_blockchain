import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getInforUserApi, loginUserApi } from "../../redux/actions/UserAction";
import { useEffect } from "react";
import { ACCESS_TOKEN } from "../../constannts/storage";

export default (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      navigate("/home/dashboard/overview");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      user_name: "",
      password: "",
    },

    validationSchema: Yup.object().shape({
      user_name: Yup.string()
        .required("User name is required")
        .min(5, "Username must have min 5 characters"),

      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    }),

    onSubmit: async (values) => {
      await dispatch(loginUserApi(values, navigate));
    },
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          {/* <p className="text-center">
            <Card.Link as={Link} to={routes.DashboardOverview.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p> */}
          <Row
            className="justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to our platform</h3>
                </div>
                <Form className="mt-4" onSubmit={handleSubmit}>
                  <Form.Group id="user_name" className="mb-4">
                    <Form.Label>User Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        type="text"
                        placeholder="User name"
                        id="userName"
                        name="user_name"
                        onChange={handleChange}
                      />
                    </InputGroup>
                    <span className="text-danger">{errors.user_name}</span>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          id="password"
                          name="password"
                          onChange={handleChange}
                        />
                      </InputGroup>
                      <span className="text-danger">{errors.password}</span>
                    </Form.Group>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Sign in
                  </Button>
                </Form>

                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link
                      as={Link}
                      to={routes.Signup.path}
                      className="fw-bold"
                    >
                      {` Create account `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
