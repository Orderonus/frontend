import { BACKEND_URL } from "./constants";
import axios from "axios";

// Settings for this to work.
axios.defaults.baseURL = BACKEND_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";

/**
 * Generates an error message from the server response
 * This is compatible with all axios responses
 *
 * @param {Response} resp Response from the server
 * @returns {String}
 */
const generateErrorMsg = (resp) => {
  return resp.data?.error ?? `Error ${resp.status}: ${resp.data}}`;
};

/**
 * Logs in a user with the server
 * Returns [isSuccess, message] from the server when logging in
 *
 * @param {String} username The username of the user to login
 * @param {String} password The password of the user to login
 * @returns {Promise<Boolean, String>}
 */
export const Login = async (username, password) => {
  if (username.length === 0 || password.length === 0)
    return [false, "Username or password cannot be empty."];
  const resp = await axios.post(`/account/login`, {
    username: username,
    password: password,
  });
  if (resp.status === 200) return [true, resp.data.data];
  return [false, generateErrorMsg(resp)];
};

/**
 * Registers a user with the server
 * Returns [isSuccess, message] from the server
 *
 * @param {String} username The username of the user to register
 * @param {String} password The password of the user to register
 * @returns {Promise<Boolean, String>} The success/error message from the server
 */
export const Register = async (username, password) => {
  if (username.length === 0 || password.length === 0)
    return [false, "Username or password cannot be empty."];
  const resp = await axios.post(`/account/register`, {
    username: username,
    password: password,
  });
  if (resp.status === 200) return [true, resp.data.data];
  return [false, generateErrorMsg(resp)];
};

/**
 * Checks if the server is alive
 * Returns true if the server is alive
 *
 * @returns {Promise<Boolean>}
 */
export const CheckAlive = async () => {
  const resp = await axios.get(`/`);
  return resp.status === 200;
};

/**
 * Gets a list of orders from the server. (Requires login)
 * Returns [isSuccess, payload].
 * If successful returns a list of orders.
 * If unsuccessful returns an error message.
 *
 * @returns {Promise<Boolean, Store[]>}
 */
export const GetStores = async () => {
  const resp = await axios.get(`/stores`);
  if (resp.status === 200) return [true, JSON.parse(resp.data.data)];
  return [false, generateErrorMsg(resp)];
};

/**
 * Adds a store to the list of stores. (Requires login)
 * Returns [isSuccess, message] from the server.
 *
 * @param {String} name The name of the store
 * @param {String} description The description of the store
 */
export const AddStore = async (name, description) => {
  if (name.length === 0) return [false, "Name cannot be empty."];
  const resp = await axios.post(`/stores/add`, {
    name: name,
    description: description,
  });
  if (resp.status === 200) return [true, resp.data.data];
  return [false, generateErrorMsg(resp)];
};

/**
 * Returns [isSuccess, payload]. (Requires login)
 * If successful returns a list of orders from the store.
 * If unsuccessful returns an error message.
 *
 * @param {Number} storeId
 * @returns {Promise<Boolean, Order[] | String>}
 */
export const ViewOrdersFromStore = async (storeId) => {
  if (typeof storeId !== "number") return [false, "Invalid store ID."];
  const resp = await axios.get(`/stores/${storeId}/orders`);
  if (resp.status === 200) return [true, JSON.parse(resp.data.data)];
  return [false, generateErrorMsg(resp)];
};

/**
 * Adds an order to a store. (Requires login)
 * Returns [isSuccess, message] from the server.
 *
 * @param {Number} storeId The ID of the store to add the order to
 * @param {Object} data The data of the order to add
 * @returns {Promise<Boolean, String>}
 */
export const AddOrderToStore = async (storeId, data) => {
  if (typeof storeId !== "number") return [false, "Invalid store ID."];
  const resp = await axios.post(`/stores/${storeId}/orders/add`, data);
  if (resp.status === 200) return [true, resp.data.data];
  return [false, generateErrorMsg(resp)];
};

/**
 * Views an order based on id and store. (Requires login)
 * Returns [isSuccess, payload].
 *
 * @param {Number} storeId The ID of the store to view the order from
 * @param {Number} orderId The ID of the order to view
 * @returns {Promise<Boolean, Order | String>}
 */
export const ViewOrder = async (storeId, orderId) => {
  if (typeof storeId !== "number") return [false, "Invalid store ID."];
  if (typeof orderId !== "number") return [false, "Invalid order ID."];
  const resp = await axios.get(`/stores/${storeId}/orders/${orderId}`);
  if (resp.status === 200) return [true, JSON.parse(resp.data.data)];
  return [false, generateErrorMsg(resp)];
};

/**
 * Completes an order status based on id and store. (Requires login)
 * Returns [isSuccess, message] from the server.
 *
 * @param {Number} storeId The ID of the store
 * @param {Number} orderId The ID of the order
 * @param {Boolean} status Whether the order is complete
 * @returns {Promise<Boolean, String>}
 */
export const CompleteOrder = async (storeId, orderId, status) => {
  if (typeof storeId !== "number") return [false, "Invalid store ID."];
  if (typeof orderId !== "number") return [false, "Invalid order ID."];
  if (typeof status !== "boolean") return [false, "Invalid status."];
  const resp = await axios.post(
    `/stores/${storeId}/orders/${orderId}/complete`,
    {
      is_completed: status,
    }
  );
  if (resp.status === 200) return [true, resp.data.data];
  return [false, generateErrorMsg(resp)];
};

/**
 * Gets a list of dishes from the server. (Requires login)
 * Returns [isSuccess, payload].
 * If successful returns a list of dishes.
 * If unsuccessful returns an error message.
 *
 * @param {Number} storeId The ID of the store to get the dishes from
 * @returns {Promise<Boolean, Dish[] | String>}
 */
export const GetDishes = async (storeId) => {
  const resp = await axios.get(`/stores/${storeId}/dishes`);
  if (resp.status === 200) return [true, JSON.parse(resp.data.data)];
  return [false, generateErrorMsg(resp)];
};

/**
 * Marks the dish as available or not. (Requires login)
 * Returns [isSuccess, message] from the server.
 *
 * @param {Number} storeId The ID of the store
 * @param {Number} dishId The ID of the dish to mark
 * @param {Boolean} status Whether the dish is available
 * @returns {Promise<Boolean, String>}
 */
export const EditDishAvailability = async (storeId, dishId, status) => {
  if (typeof storeId !== "number") return [false, "Invalid store ID."];
  if (typeof dishId !== "number") return [false, "Invalid dish ID."];
  if (typeof status !== "boolean") return [false, "Invalid status."];
  const resp = await axios.post(
    `/stores/${storeId}/dishes/${dishId}/available`,
    {
      is_available: status,
    }
  );
  if (resp.status === 200) return [true, resp.data.data];
  return [false, generateErrorMsg(resp)];
};
