import React from "react";
import { Col, Row } from '@themesberg/react-bootstrap';
import { ProfileCardWidget } from "../components/Widgets";
import { GeneralInfoForm } from "../components/Forms";



export default () => {
  return (
    <>
      <Row >
        <Col xs={12} xl={8}>
          <GeneralInfoForm />
        </Col>

        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <ProfileCardWidget />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
