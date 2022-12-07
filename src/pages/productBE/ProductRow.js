import React from "react";
import { useState } from "react";
import {
  Button,
} from "@themesberg/react-bootstrap";
import ModalProduct from "./ModalProduct";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import initContract from "../../ultils/web3Contract";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteProductApi } from "../../redux/actions/ProductAction";

export default function ProductRow(props) {
  const { product } = props;
  const {
    code,
    name_product,
    Agency,
    number,
    price,
    updatedAt,
    Category,
    description,
    employee,
    id,
  } = product;

  const dispatch = useDispatch();

  const [showEdit, setShowEdit] = useState(false);
  const [showDetailProduct, setShowDetailProduct] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handleCloseDetailProduct = () => setShowDetailProduct(false);
  const handleShowDetailProduct = () => setShowDetailProduct(true);

  const user = JSON.parse(localStorage.getItem("user"));
  const handleSubmitBlockchain = () => {
    const data = {
      id: id.toString(),
      code,
      name: name_product,
      agency: Agency.agency_name,
      number: number.toString(),
      price: price.toString(),
      dueDate: updatedAt,
      category: Category.category_name,
      description,
      employee: `${employee.user_name}`,
    };

    if (user.type === "client") {
      toast.error(
        "You do not have permission to import products into the blockchain"
      );
    } else {
      const init = async () => {
        const { web3, contract } = await initContract();
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        await contract.methods
          .createProduct(data)
          .send({ from: account, gas: 3000000 });

        await dispatch(deleteProductApi(id));  
        toast.success("Product Changed Successfully Into Blockchain");
      };

      init();
    }
  };

  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return (
    <>
      <tr>
        <td>
          <Button
            variant="outline-success"
            style={{ marginRight: "5px" }}
            size="sm"
            onClick={handleSubmitBlockchain}
          >
            <FontAwesomeIcon icon={faCheck} />
          </Button>
        </td>
        <td>
          <span className="fw-normal">{name_product}</span>
        </td>
        <td>
          <span className="fw-normal">{VND.format(price)}</span>
        </td>
        <td>
          <span className="fw-normal">{updatedAt.split("T")[0]}</span>
        </td>
        <td>
          <span className="fw-normal">{Category.category_name}</span>
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
              variant="outline-info"
              size="sm"
              onClick={handleShowDetailProduct}
            >
              View
            </Button>
          </div>
        </td>
      </tr>

      <ModalProduct
        handleClose={handleCloseDetailProduct}
        show={showDetailProduct}
        product={product}
        isEdit={1}
      />

      <ModalProduct
        handleClose={handleCloseEdit}
        show={showEdit}
        product={product}
        isEdit={2}
      />
    </>
  );
}
