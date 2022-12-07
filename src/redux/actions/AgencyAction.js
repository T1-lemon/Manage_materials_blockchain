import {
  CREATE_AGENCY,
  EDIT_AGENCY,
  DELETE_AGENCY,
  GET_AGENCY,
} from "../types/AgencyType";

import {
  createAgencyService,
  getAllAgencyService,
  deleteAgencyById,
  editAgencyService,
} from "../../services/agencyService";

export const getAllAgencyApi = () => {
  return async (dispatch) => {
    const { data } = await getAllAgencyService();
    await dispatch({
      type: GET_AGENCY,
      payload: data,
    });
  };
};

export const createAgencyApi = (inputData) => {
  return async (dispatch) => {
    const { data } = await createAgencyService(inputData);
    await dispatch({
      type: CREATE_AGENCY,
      payload: data,
    });
  };
};

export const deleteAgencyApi = (id) => {
  return async (dispatch) => {
    await deleteAgencyById(id);
    const { data } = await getAllAgencyService();
    await dispatch({
      type: DELETE_AGENCY,
      payload: data,
    });
  };
};

export const editAgencyApi = (dataInput) => {
  return async (dispatch) => {
    const { data } = await editAgencyService(dataInput);
    await dispatch({
      type: EDIT_AGENCY,
      payload: data,
    });
  };
};
