import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Nav,
  Card,
  Button,
  Table,
  Pagination,
} from "@themesberg/react-bootstrap";

import { transactionsData } from "../data/tables";
import transactions from "../data/transactions";
import commands from "../data/commands";
import ModalForm from "./ModalForm";

export const PageVisitsTable = () => {
  const TableRow = (props) => {
    const { nameContract, fromAddress, gasUsed, value } = props;
    // const bounceIcon = bounceRate < 0 ? faArrowDown : faArrowUp;
    // const bounceTxtColor = bounceRate < 0 ? "text-danger" : "text-success";

    return (
      <tr>
        <th scope="row">{nameContract}</th>
        <td>{fromAddress}</td>
        <td>{gasUsed}</td>
        <td>{value} ETH</td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5>Transactions</h5>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm">
              See all
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Table responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">From Address</th>
            <th scope="col">Gas Used</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {transactionsData.map((pv) => (
            <TableRow key={`page-visit-${pv.id}`} {...pv} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export const TransactionsTable = (props) => {
  const { products } = props;
  const totalTransactions = transactions.length;

  const TableRow = (props) => {
    const {
      code,
      name,
      agency,
      price,
      dueDate,
      category,
      description,
      employee,
      index,
    } = props.product;

    const initValue = {
      code,
      name,
      agency,
      price,
      dueDate,
      category,
      description,
      employee,
      index,
      isCheckCreate: 2,
    };

    const [showEdit, setShowEdit] = useState(false);
    const [showDetailProduct, setShowDetailProduct] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const handleCloseDetailProduct = () => setShowDetailProduct(false);
    const handleShowDetailProduct = () => setShowDetailProduct(true);

    return (
      <>
        <tr>
          <td>
            <span className="fw-normal">{name}</span>
          </td>
          <td>
            <span className="fw-normal">${parseFloat(price).toFixed(2)}</span>
          </td>
          <td>
            <span className="fw-normal">{dueDate.split("T")[0]}</span>
          </td>
          <td>
            <span className="fw-normal">{category}</span>
          </td>
          <td>
            <div>
              <Button
                variant="outline-success"
                style={{ marginRight: "5px" }}
                size="sm"
                onClick={handleShowEdit}
              >
                Edit
              </Button>
              <Button
                variant="outline-warning"
                size="sm"
                style={{ marginRight: "5px" }}
              >
                History
              </Button>
              <Button
                variant="outline-info"
                size="sm"
                onClick={handleShowDetailProduct}
              >
                View
              </Button>
            </div>
          </td>
        </tr>

        <ModalForm
          handleClose={handleCloseEdit}
          show={showEdit}
          initValue={initValue}
          isEdit={1}
        />

        <ModalForm
          handleClose={handleCloseDetailProduct}
          show={showDetailProduct}
          initValue={initValue}
          isEdit={2}
        />
      </>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">Product's Name</th>
              <th className="border-bottom">Price</th>
              <th className="border-bottom">Due Date</th>
              <th className="border-bottom">Category</th>
              <th className="border-bottom">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <TableRow key={product.code} product={{ ...product, index }} />
              );
            })}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between pb-0">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>Previous</Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>Next</Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{totalTransactions}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export const CommandsTable = () => {
  const TableRow = (props) => {
    const { name, usage = [], description, link } = props;

    return (
      <tr>
        <td className="border-0" style={{ width: "5%" }}>
          <code>{name}</code>
        </td>
        <td className="fw-bold border-0" style={{ width: "5%" }}>
          <ul className="ps-0">
            {usage.map((u) => (
              <ol key={u} className="ps-0">
                <code>{u}</code>
              </ol>
            ))}
          </ul>
        </td>
        <td className="border-0" style={{ width: "50%" }}>
          <pre className="m-0 p-0">{description}</pre>
        </td>
        <td className="border-0" style={{ width: "40%" }}>
          <pre>
            <Card.Link href={link} target="_blank">
              Read More{" "}
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
            </Card.Link>
          </pre>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="p-0">
        <Table
          responsive
          className="table-centered rounded"
          style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
        >
          <thead className="thead-light">
            <tr>
              <th className="border-0" style={{ width: "5%" }}>
                Name
              </th>
              <th className="border-0" style={{ width: "5%" }}>
                Usage
              </th>
              <th className="border-0" style={{ width: "50%" }}>
                Description
              </th>
              <th className="border-0" style={{ width: "40%" }}>
                Extra
              </th>
            </tr>
          </thead>
          <tbody>
            {commands.map((c) => (
              <TableRow key={`command-${c.id}`} {...c} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
