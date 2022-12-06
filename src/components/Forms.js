import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editProfileApi } from "../redux/actions/UserAction";
import { toast } from "react-toastify";

export const GeneralInfoForm = () => {
  const userLogin = useSelector((state) => state.UserReducer.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      first_name: userLogin.first_name,
      last_name: userLogin.last_name,
      birthday: userLogin.birthday,
      gender: userLogin.gender,
      email: userLogin.email,
      phone_number: userLogin.phone_number,
      address: userLogin.address,
    },

    onSubmit: async (values) => {
      await dispatch(editProfileApi(userLogin.id, values));
      toast.success("Profile Changed Successfully");
    },
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;

  const [birthday, setBirthday] = useState(values.birthday);

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your first name"
                  value={values.first_name}
                  name="first_name"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Also your last name"
                  value={values.last_name}
                  name="last_name"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="birthday">
                <Form.Label>Birthday</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setBirthday}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={
                          birthday ? moment(birthday).format("MM/DD/YYYY") : ""
                        }
                        placeholder="mm/dd/yyyy"
                        onFocus={openCalendar}
                        onChange={handleChange}
                        name="birthday"
                      />
                    </InputGroup>
                  )}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Gender</Form.Label>

                <Form.Select
                  defaultValue={values.gender}
                  name="gender"
                  onChange={handleChange}
                >
                  <option value="0">Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="name@company.com"
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="+12-345 678 910"
                  value={values.phone_number}
                  name="phone_number"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your home address"
                  value={values.address}
                  name="address"
                  onChange={handleChange}
                />
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
  );
};
