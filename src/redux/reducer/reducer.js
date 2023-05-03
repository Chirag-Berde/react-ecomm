const INIT_STATE = {
    carts: []
}
export const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state, carts: [...state.carts, action.payload]
            }
      case "REMOVE_TO_CART":
        const data=state.carts.filter((item)=>item.id!== action.payload)
        return{
            ...state,
            carts:data
        }
        default:
            return state;
    }
}