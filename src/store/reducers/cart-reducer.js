
const initialState = {
    cartValue: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case('add') : 
            return {
                cartValue: state.cartValue + 1
            }
        case('remove') : 
            return {
                cartValue: state.cartValue - 1
            }
        default: return state;
    }
}

export default reducer;