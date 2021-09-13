import axios from "axios";

const instanse = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: false,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"

      }
});

export default instanse;