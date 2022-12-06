import axios from "axios";

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcl9uYW1lIjoiVGhhbmgiLCJlbWFpbCI6ImRvdmFuZHVjdGhhbmhAZ21haWwuY29tIiwiYXZhdGFyIjoiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM_cT10Ym46QU5kOUdjUTFEcFU2NWVWQVJMbWtuZFhRblRaUzZrVXhqTFVrN3hpT3l3JnVzcXA9Q0FVIiwidHlwZSI6ImNsaWVudCIsImlhdCI6MTY3MDMxMjc5Mn0.HzkSMpEcUgqzjhZsVpgjyif-GCOFyu5a5_1O5b7w_DM";
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL_API}`,
  headers: {
    Authorization: "Bearer " + accessToken,
  },
});

export default axiosInstance;