import { Button, Card, Col, Form, Row } from "@themesberg/react-bootstrap";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategoryApi } from "../redux/actions/CategoryAction";

const FormInputCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const dispatch = useDispatch();

  const handelSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createCategoryApi(categoryName));
  };

  const handleChangeCategory = (e) => {
    setCategoryName(e.target.value);
  };

  return (
    <>
      <Row>
        <Col xs={12} xl={12}>
          <Card border="light" className="bg-white shadow-sm ">
            <Card.Body className="pt-0">
              <Form className="handleSubmit" onSubmit={handelSubmit}>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group>
                      <Form.Label className="mt-1">Category'name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Input your category's name"
                        onChange={handleChangeCategory}
                        value={categoryName}
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
        </Col>
      </Row>
    </>
  );
};

export default FormInputCategory;
