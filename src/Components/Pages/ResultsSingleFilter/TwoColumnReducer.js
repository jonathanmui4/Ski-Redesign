export const initialState = {
    filters: [],
    priFilter: "",
    // minPrice: 0,
    // maxPrice: 500,
};

export const TwoColumnReducer = (state, action) => {
    switch (action.type) {
        case "ADD_FILTER":
            return {
                ...state,
                filters: [...state.filters, action.payload],
            };
        case "SET_PRI_FILTER":
            return {
                ...state,
                priFilter: action.payload,
            };
        case "REMOVE_FILTER":
            return {
                ...state,
                filters: state.filters.filter(
                    (filter) => filter !== action.payload
                ),
            };
        // case "SET_MIN_PRICE":
        //     return {
        //         ...state,
        //         minPrice: action.payload,
        //     };
        // case "SET_MAX_PRICE":
        //     return {
        //         ...state,
        //         maxPrice: action.payload,
        //     };

        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};
