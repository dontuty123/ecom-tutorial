/** @format */

import axios, { AxiosInstance } from "axios";

class Http {
  instace: AxiosInstance;
  constructor() {
    this.instace = axios.create({
      baseURL: "http://localhost:4000/",
    });
  }
}

const http = new Http().instace;
export default http;
