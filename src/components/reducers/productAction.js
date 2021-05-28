import {
  CREATE_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SELECT_PRODUCT,
  CLEAR_PRODUCT,
  DELETE_SELECTED_PRODUCT,
  SEARCH_PRODUCT,
  LOGIN,
  LOGOUT,
} from "./types";

export const login = (userData) => ({
  type: LOGIN,
  payload: userData
});
export const logout = () => ({
  type: LOGOUT,
  payload: {}
});
export const addProduct = (product) => ({
  type: CREATE_PRODUCT,
  payload: product,
});

export const searchByName = (product) => ({
   type: SEARCH_PRODUCT,
   payload:product,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

export const selectAllProduct = (id) => ({
  type: SELECT_PRODUCT,
  payload: id,
});

export const clearAllProduct = () => ({
  type: CLEAR_PRODUCT,
});
export const getProduct = (id) => ({
  type: GET_PRODUCT,
  payload: id,
});

export const deleteAllProduct = () => ({
  type: DELETE_SELECTED_PRODUCT,
});

