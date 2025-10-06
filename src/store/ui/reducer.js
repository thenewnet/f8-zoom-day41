import { HIDE_LOADING, SHOW_LOADING } from "./constants";

const initialState = {
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADING: {
            return {
                ...state,
                loading: true
            }
        }

        case HIDE_LOADING: {
            return {
                ...state,
                loading: false
            }
        }
        default:
            return state;
    }
}

export default reducer;