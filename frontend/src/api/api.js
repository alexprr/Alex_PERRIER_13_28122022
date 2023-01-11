import axios from "axios";
import BASE_URL from "../utils/config";

const loginApi = async (endpoint, credentials) => {
  const { data } = await axios.post(`${BASE_URL}/${endpoint}`, credentials);

  return data;
};

export default loginApi;
