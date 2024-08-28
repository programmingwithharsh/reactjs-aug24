import products from '../data/products';

// Is a function which we use to update state based on action
const productReducer = (state = products, action) => {
    switch (action.type) {
        case "REMOVE_PRODUCT":
            return [...state]; // write logic here to remove a product

        case "ADD_PRODUCT":
            return [...state, action.product];

        case "LOAD_PRODUCTS":
            return [...state];

        default:
            return state;
    }
};

export default productReducer;