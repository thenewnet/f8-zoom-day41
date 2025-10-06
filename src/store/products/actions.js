import http from '@/ultils/http';
import { GET_LIST, SET_LIST, GET_DETAIL, SET_DETAIL } from './constants';
import { hideLoading, showLoading } from '../ui';

export const setList = (payload) => {
    return {
        type: SET_LIST,
        payload
    }
}

export const getList = () => {
    return async (dispatch) => {

        dispatch({
            type: GET_LIST
        });

        dispatch(showLoading());

        try {
            const response = await http.get('/products');
            dispatch(setList(response.items));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(hideLoading());
        }

    }
}

export const setDetail = (payload) => {
    return {
        type: SET_DETAIL,
        payload
    }
}

export const getDetail = (slug) => {
    return async (dispatch) => {

        dispatch({
            type: GET_DETAIL
        });

        dispatch(showLoading());

        try {
            const response = await http.get(`/products/${slug}`);
            console.log(response);
            dispatch(setDetail(response));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(hideLoading());
        }

    }
}