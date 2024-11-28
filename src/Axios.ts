import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://nest-todo-hgkn.onrender.com/",
  timeout: 50000,
  method: "POST",
  headers: { "Content-Type": "application/json" },
});

httpRequest.interceptors.request.use((req) => {
  req.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
  console.log("Request Url" + req.baseURL);
  return req;
});

httpRequest.interceptors.response.use(null, (res) => {
  if (res.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  console.log(res.config);
  console.log(res)
  return res;
});

export default httpRequest;
