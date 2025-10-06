import { HIDE_LOADING, SHOW_LOADING }  from './constants';

export const hideLoading = (payload) => {
    return {
        type: HIDE_LOADING,
        payload
    }
}

export const showLoading = (payload) => {
    return {
        type: SHOW_LOADING,
        payload
    }
}
