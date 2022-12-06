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

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    await dispatch(getAllCategoryApi());

    await dispatch(getAllAgencyApi());
  };

  return <></>;
};
