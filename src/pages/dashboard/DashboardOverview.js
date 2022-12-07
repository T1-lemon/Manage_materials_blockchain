import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { CounterWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";

import {
  Col,
  Row,
  Nav,
  Card,
  Image,
  Button,
  Table,
  Dropdown,
  ProgressBar,
  Pagination,
  ButtonGroup,
} from "@themesberg/react-bootstrap";
import { getAllCategoryApi } from "../../redux/actions/CategoryAction";
import { getAllAgencyApi } from "../../redux/actions/AgencyAction";
import "./dashboard.css";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await dispatch(getAllCategoryApi());

    await dispatch(getAllAgencyApi());
  };

  return (
    <div className="dashboard_container">
      <img
        src="https://4.bp.blogspot.com/-r9ym602WfE4/Wjh160vYw8I/AAAAAAAAB2w/kpNHAcY46FASzoZm8U6-QyENwD6jyuyGACLcBGAs/s1600/AAEAAQAAAAAAAAVFAAAAJDY3OTZhNGVlLTBjZGQtNDUwNC1iNTkxLWRmNWIzZWMwNDJhNQ.png"
        alt=""
        className="etherum"
      />
    </div>
  );
};
