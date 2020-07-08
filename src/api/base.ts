import axios from "axios";

 const base = axios.create({
 baseURL: "http://localhost:56288/"
 });
// const base = axios.create({
//   baseURL: "http://saytara.azurewebsites.net/"
// });


base.interceptors.request.use(request => {
  request.headers["Authorization"] = localStorage.getItem("Token")
    ? "Bearer " + localStorage.getItem("Token")
    : null;
  return request;
});

export default base;
