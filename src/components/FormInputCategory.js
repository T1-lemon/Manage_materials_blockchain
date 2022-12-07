import { Button, Card, Col, Form, Row } from "@themesberg/react-bootstrap";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  createCategoryApi,
  editCategoryApi,
} from "../redux/actions/CategoryAction";

const FormInputCategory = (props) => {
  const { category } = props;
  console.log(category);
  const counter = category.category_name === "" ? false : true;
  console.log(counter);
  const [categoryName, setCategoryName] = useState(category.category_name);
  const dispatch = useDispatch();

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    await dispatch(createCategoryApi(categoryName));
    toast.success("Create Category Successfully!");
  };

  const handleEditCategory = async (e) => {
    e.preventDefault();
    const dataInputEditCategory = {
      id: category.id,
      categoryName: categoryName,
    };
    await dispatch(editCategoryApi(dataInputEditCategory));
    toast.success("Update Category Successfully!");
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
              <Form
                className="handleSubmit"
                onSubmit={
                  counter === true ? handleEditCategory : handleCreateCategory
                }
              >
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
