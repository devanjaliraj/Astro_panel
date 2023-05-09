import axios from "axios";

const instance = axios.create({
  baseURL: "http://65.2.148.70:8000",

  // baseURL: "http://65.2.148.70:8000",
  // baseURL: "http://65.2.148.70:8000",
});

export default instance;
