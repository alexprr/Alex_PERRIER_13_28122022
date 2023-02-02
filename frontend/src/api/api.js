import axios from "axios";
import BASE_URL from "../utils/config";

/**
 *
 * @param { string } endpoint api endpoint
 * @param { object } user user's credentials
 * @returns { object } response data
 */
export const userLogin = async (endpoint, credentials) => {
  const response = await axios.post(`${BASE_URL}/${endpoint}`, credentials);
  const token = response.data.body.token;

  // store token in localStorage
  window.localStorage.setItem("token", token);

  // sets authorization headers for all requests
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  console.log(`JWT Token: ${token}`);

  console.log(response.data);
  return response.data;
};

/**
 *
 * @param { string } endpoint api endpoint
 * @returns { object } response data
 */
export const getUserProfile = async (endpoint) => {
  const response = await axios.post(`${BASE_URL}/${endpoint}`);
  return response.data;
};

export const updateUserProfile = async (endpoint, newUserName) => {
  const response = await axios.put(`${BASE_URL}/${endpoint}`, newUserName);
  return response.data;
};
