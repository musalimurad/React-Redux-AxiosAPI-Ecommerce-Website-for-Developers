const INITIAL_STATE = { products: [], isLoading: false, error: "ERROR THIS API" };


export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS_START":   return   { ...state, error: "",                isLoading: true  }; 
        case "GET_PRODUCTS_SUCCESS": return   { ...state, products: action.payload, isLoading: false };
        case "GET_PRODUCTS_ERROR":   return   { ...state, error:    action.payload, isLoading: false };
      
        default: return state;
    }
}