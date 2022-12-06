import axiosInstance from "../ultils/axiosInstance";

export const createAgencyService = async (data) => {
  try {
    const respone = await axiosInstance({
      method: "post",
      url: "agency",
      data: {
        agency_name: `${data.agencyName}`,
        address: `${data.address}`,
      },
    });
    return respone;
  } catch (error) {
    return error;
  }
};

export const getAllAgencyService = async () => {
  try {
    const respone = await axiosInstance({
      method: "get",
      url: "agency",
    });
    return respone;
  } catch (error) {
    return error;
  }
};

export const deleteAgencyById = async (id) => {
  try {
    const respone = await axiosInstance({
      method: "delete",
      url: `agency/${id}`,
    });
    return respone;
  } catch (error) {
    return error;
  }
};
