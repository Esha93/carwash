
const initialState = {
    isAuthenticated: false,
    userId: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case('login') : 
            return {
                isAuthenticated : state
            }
        case('google-login') : 
            return {
                isAuthenticated : state
            }
        default: return state;
    }
}

export default reducer;