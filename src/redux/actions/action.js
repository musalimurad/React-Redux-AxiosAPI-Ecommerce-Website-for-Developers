import axios from "axios";

export const getProducts = () => dispatch => {
    dispatch({
        type: "GET_PRODUCTS_START"
    });
    axios.get(`${process.env.REACT_APP_API_URL}/products`).then(response => {
        dispatch({
            type: "GET_PRODUCTS_SUCCESS",
            payload: response.data
        });
    }).catch(error => {
        dispatch({
            type: "GET_PRODUCTS_ERROR",
            payload: error
        });
    });
}