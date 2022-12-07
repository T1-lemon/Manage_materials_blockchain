import {
  CREATE_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORY,
} from "../types/CategoryType";

import {
  createCategoryService,
  getAllCategoryService,
  deleteCategoryById,
  editCategoryService,
} from "../../services/categoryService";

export const getAllCategoryApi = () => {
  return async (dispatch) => {
    const { data } = await getAllCategoryService();
    await dispatch({
      type: GET_CATEGORY,
      payload: data,
    });
  };
};

export const createCategoryApi = (categoryName) => {
  return async (dispatch) => {
    const { data } = await createCategoryService(categoryName);
    await dispatch({
      type: CREATE_CATEGORY,
      payload: data,
    });
  };
};

export const deleteCategoryApi = (id) => {
  return async (dispatch) => {
    await deleteCategoryById(id);
    const { data } = await getAllCategoryService();
    await dispatch({
      type: DELETE_CATEGORY,
      payload: data,
    });
  };
};

export const editCategoryApi = (dataInput) => {
  return async (dispatch) => {
    const { data } = await editCategoryService(dataInput);
    await dispatch({
      type: EDIT_CATEGORY,
      payload: data,
    });
  };
};