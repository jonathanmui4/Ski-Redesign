export const initialState = {
    isRatingsActive: false,
    isPriceActive: false,
};

export const MultiFilterReducer = (state, action) => {
    switch (action.type) {
        case "SET_RATINGS_ACTIVE":
            return {
                ...state,
                isRatingsActive: action.payload,
            };
        case "SET_PRICE_ACTIVE":
            return {
                ...state,
                isPriceActive: action.payload,
            };

        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};
