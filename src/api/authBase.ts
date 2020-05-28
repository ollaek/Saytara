import axios from "axios";

const authBase = axios.create({
  baseURL: "http://localhost:56288/"
});

authBase.interceptors.request.use(request => {
  request.headers["Authorization"] = localStorage.getItem("Token")
    ? "Bearer " + localStorage.getItem("Token")
    : null;
  return request;
});

export default authBase;
