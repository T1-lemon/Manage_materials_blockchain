import { Button, Card, Col, Form, Row } from "@themesberg/react-bootstrap";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createAgencyApi, editAgencyApi } from "../redux/actions/AgencyAction";

const FormInputAgency = (props) => {
  const { agency } = props;
  const counter = agency.address === "" ? false : true;
  const [inputData, setInputData] = useState({
    agencyName: agency.agency_name,
    address: agency.address,
  });

  const dispatch = useDispatch();
  const handleCreateAgency = async (e) => {
    e.preventDefault();
    await dispatch(createAgencyApi(inputData));
    toast.success("Create Agency Successfully!");
  };

  const handleEditAgency = async (e) => {
    e.preventDefault();
    const dataInputEditAgency = {
      id: agency.id,
      agencyName: inputData.agencyName,
      address: inputData.address,
    };

    await dispatch(editAgencyApi(dataInputEditAgency));
    toast.success("Update Agency Successfully!");
  };

  const handle = [
    {
      title: "Name",
      placeHolder: "Enter agency's name",
      handleFunction: (e) => {
        setInputData({ ...inputData, agencyName: e.target.value });
      },
      value: inputData.agencyName,
    },
    {
      title: "Address",
      placeHolder: "Enter agency's product",
      handleFunction: (e) => {
        setInputData({ ...inputData, address: e.target.value });
      },
      value: inputData.address,
    },
  ];

  return (
    <>
      <Row>
        <Col xs={12} xl={12}>
          <Card border="light" className="bg-white shadow-sm ">
            <Card.Body className="pt-0">
              <Form
                className="handleSubmit"
                onSubmit={counter === true ? handleEditAgency : handleCreateAgency}
              >
                <Row>
                  {handle.map((item, index) => {
                    return (
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
                    );
                  })}
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

export default FormInputAgency;
