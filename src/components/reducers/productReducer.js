import {
  CREATE_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SELECT_PRODUCT,
  CLEAR_PRODUCT,
  DELETE_SELECTED_PRODUCT,
  SEARCH_PRODUCT,
  SORT_BY_ALPHABET,
  LOGIN,
  LOGOUT,
} from "./types";


const intialState = {
  products: [
    {
      id: 1,
      name: "TV",
      price: "18000",
      description: "Sincere@april.biz",
      quantity: "6",
      image: "image.jpd",
    },
    {
      id: 2,
      name: "Laptop",
      price: "50000",
      description: "Sincere@april.biz",
      quantity: "8",
      image: "image.jpd",
    },
    {
      id: 3,
      name: "Mobile",
      price: "18000",
      description: "Sincere@april.biz",
      quantity: "2",
      image: "image.jpd",
    },
  ],
  product: null,
  userData:[],
  selectedProducts: [],
};

export const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN:
      debugger
      return {
        ...state,
        userData: action.payload,
      };
    case LOGOUT:
      debugger
      localStorage.removeItem("user");
      return { ...state,  userData: {} };
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };
    case GET_PRODUCT:
      let arr = state.products.filter(
        (product) => product.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        product: arr,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id == action.payload.id ? action.payload : product
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id != action.payload
        ),
      };
    case DELETE_SELECTED_PRODUCT:
      return {
        ...state,
        products: [],
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProducts: action.payload,
      };
    case SEARCH_PRODUCT:
        debugger

      return {
        ...state,
        products: state.products.filter((product) =>
          product.name.includes(action.payload) ||
          product.price.includes(action.payload) ||
          product.quantity.includes(action.payload)
        ),
      };
    case CLEAR_PRODUCT:
      return {
        ...state,
        selectedProducts: [],
      };
    default:
      return state;
  }
};
