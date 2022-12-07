import {
  Form,
  Button,
  Card,
  Col,
  Row,
  Modal,
} from "@themesberg/react-bootstrap";
import React, { useState, useEffect } from "react";
import { CategoryTable } from "../components/Tables";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInputAgency from "../components/FormInputAgency";
import FormInputCategory from "../components/FormInputCategory";
import {
  createCategoryService,
  deleteCategoryById,
  getAllCategoryService,
} from "../services/categoryService";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryApi } from "../redux/actions/CategoryAction";
import { getAllCategorySelector } from "../redux/selectors/CategorySelectors";

const InputCategory = () => {
  const [showForm, setShowForm] = useState(false);
  // const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const categories = useSelector(getAllCategorySelector);

  useEffect(() => {
    const initValue = async () => {
      await dispatch(getAllCategoryApi());
    };

    initValue();
  }, []);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-1">
        <div className="d-block mb-1 mb-md-0">
          <h4>Category</h4>
          <p className="mb-0">Manage all your categories</p>
        </div>
      </div>
      <div>
        <Button
          variant="outline-info"
          size="sm"
          className="py-1 my-2"
          onClick={handleShowForm}
        >
          <span className="mx-2">
            <FontAwesomeIcon icon={faPlus} />
          </span>
          Add new category
        </Button>
      </div>
      <div>
        <CategoryTable categories={categories} />
      </div>
      <Modal
        size="lg"
        show={showForm}
        onHide={handleCloseForm}
        scrollable={true}
      >
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormInputCategory category={{ category_name: "" }} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default InputCategory;
