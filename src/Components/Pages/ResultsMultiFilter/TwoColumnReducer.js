export const initialState = {
    filters: [],
    priFilter: "",
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

        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};
