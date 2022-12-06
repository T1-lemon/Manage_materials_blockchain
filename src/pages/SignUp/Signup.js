import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
import { registerUserApi } from "../../redux/actions/UserAction";

export default () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      user_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },

    validationSchema: Yup.object().shape({
      user_name: Yup.string()
        .required("User name is required")
        .min(5, "Username must have min 5 characters"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid!"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
      confirm_password: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),

    onSubmit: async (values) => {
      const {confirm_password,...restValues} = values;
      await dispatch(registerUserApi(restValues,navigate));
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
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
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
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        onChange={handleChange}
                        type="email"
                        placeholder="example@company.com"
                        name="email"
                      />
                    </InputGroup>
                    <span className="text-danger">{errors.email}</span>
                  </Form.Group>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                        name="password"
                      />
                    </InputGroup>
                    <span className="text-danger">{errors.password}</span>
                  </Form.Group>
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        onChange={handleChange}
                        type="password"
                        placeholder="Confirm Password"
                        name="confirm_password"
                      />
                    </InputGroup>
                    <span className="text-danger">
                      {errors.confirm_password}
                    </span>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Sign up
                  </Button>
                </Form>

                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link
                      as={Link}
                      to={routes.Signin.path}
                      className="fw-bold"
                    >
                      {` Login here `}
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
