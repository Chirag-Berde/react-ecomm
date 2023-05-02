const INIT_STATE = {
    carts: []
}
export const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state, carts: [...state.carts, action.payload]
            }

        default:
            return state;
    }
}