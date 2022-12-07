import axiosInstance from "../ultils/axiosInstance";

export const createCategoryService = async (categoryName) => {
  try {
    const respone = await axiosInstance({
      method: "post",
      url: "category",
      data: {
        category_name: categoryName,
      },
    });
    return respone;
  } catch (error) {
    return error;
  }
};

export const getAllCategoryService = async () => {
  try {
    const respone = await axiosInstance({
      method: "get",
      url: "category",
    });
    return respone;
  } catch (error) {
    return error;
  }
};

export const deleteCategoryById = async (id) => {
  try {
    const respone = await axiosInstance({
      method: "delete",
      url: `category/${id}`,
    });
    return respone;
  } catch (error) {
    return error;
  }
};

export const editCategoryService = async (data) => {
  try {
    const respone = await axiosInstance({
      method: "put",
      url: `category/${data.id}`,
      data: {
        category_name: `${data.categoryName}`,
      },
    });
    return respone;
  } catch (error) {
    return error;
  }
};
