import React, { useState } from "react";
import {
  Nav,
  Card,
  Button,
  Table,
  Pagination,
} from "@themesberg/react-bootstrap";

import transactions from "../data/transactions";
import ModalForm from "./ModalForm";
import initContract from "../ultils/web3Contract";
import { useDispatch } from "react-redux";
import { deleteCategoryApi } from "../redux/actions/CategoryAction";
import { deleteAgencyApi } from "../redux/actions/AgencyAction";

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
    const [showHistoryProduct, setShowHistoryProduct] = useState(false);
    const [historyProducts, setHistoryProducts] = useState([]);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const handleCloseDetailProduct = () => setShowDetailProduct(false);
    const handleShowDetailProduct = () => setShowDetailProduct(true);

    const handleShowHistoryProduct = async () => {
      const { web3, contract } = await initContract();
      const idEvent = index + 1;
      contract.getPastEvents(
        "SubmitProduct",
        { filter: { id: idEvent }, fromBlock: 0, toBlock: "latest" },
        (err, events) => {
          setHistoryProducts(events);
        }
      );
      setShowHistoryProduct(true);
    };
    const handleCloseHistoryProduct = () => setShowHistoryProduct(false);

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
                onClick={handleShowHistoryProduct}
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

        <ModalForm
          handleClose={handleCloseHistoryProduct}
          show={showHistoryProduct}
          initValue={historyProducts}
          isEdit={3}
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

export const AgencyTable = (props) => {
  const { agencies } = props;
  const totalTransactions = transactions.length;

  const dispatch = useDispatch();
  const handleDeleteAgency = async (id) => {
    await dispatch(deleteAgencyApi(id));
  }

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">Agency's Name</th>
              <th className="border-bottom">Agency's Address</th>
              <th className="border-bottom">Action</th>
            </tr>
          </thead>
          <tbody>
            {agencies.map((agency, index) => {
              return (
                <tr key={index}>
                  <td>
                    <span className="fw-normal">{agency.agency_name}</span>
                  </td>
                  <td>
                    <span className="fw-normal">{agency.address}</span>
                  </td>
                  <td>
                    <div>
                      <Button
                        variant="outline-danger"
                        style={{ marginRight: "5px" }}
                        size="sm"
                        onClick={() => handleDeleteAgency(agency.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="outline-warning"
                        style={{ marginRight: "5px" }}
                        size="sm"
                      >
                        Edit
                      </Button>
                    </div>
                  </td>
                </tr>
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

export const CategoryTable = (props) => {
  const { categories } = props;
  const totalTransactions = transactions.length;
  const dispatch = useDispatch();

  const handleDeleteCategory = async (id) => {
    await dispatch(deleteCategoryApi(id));
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">Category's Name</th>
              <th className="border-bottom">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => {
              return (
                <tr key={index}>
                  <td>
                    <span className="fw-normal">{category.category_name}</span>
                  </td>
                  <td>
                    <div>
                      <Button
                        variant="outline-danger"
                        style={{ marginRight: "5px" }}
                        size="sm"
                        onClick={() => handleDeleteCategory(category.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="outline-warning"
                        style={{ marginRight: "5px" }}
                        size="sm"
                      >
                        Edit
                      </Button>
                    </div>
                  </td>
                </tr>
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
