import axios from "axios";

const instance = axios.create({
  baseURL: "https://pets-react-query-backen.herokuapp.com",
});

export default instance;

// we insert the basic URL index file to make it easy if we change the server in future we will
// only need to change it once not in every component.
// + direct the API to the basic URL
