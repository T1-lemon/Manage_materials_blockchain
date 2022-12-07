import {
  Form,
  Button,
  Card,
  Col,
  Row,
  Modal,
} from "@themesberg/react-bootstrap";
import React, { useState } from "react";
import { AgencyTable } from "../components/Tables";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInputAgency from "../components/FormInputAgency";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllAgencyApi } from "../redux/actions/AgencyAction";
import { getAllAgencySelector } from "../redux/selectors/AgencySelector";

const InputAgency = () => {
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();

  const agencies = useSelector(getAllAgencySelector);

  useEffect(() => {
    const initValue = async () => {
      await dispatch(getAllAgencyApi());
    };

    initValue();
  }, []);
  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-1">
        <div className="d-block mb-1 mb-md-0">
          <h4>Agency</h4>
          <p className="mb-0">Manage all your agencies</p>
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
          Add new agency
        </Button>
      </div>
      <div>
        <AgencyTable agencies={agencies} />
      </div>
      <Modal
        size="lg"
        show={showForm}
        onHide={handleCloseForm}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormInputAgency agency={{ agency_name: "", address: "" }} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default InputAgency;
