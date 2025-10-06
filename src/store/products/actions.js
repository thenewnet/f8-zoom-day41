import http from '@/ultils/http';
import { GET_LIST, SET_LIST } from './constants';
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
            console.log(response);
            dispatch(setList(response.items));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(hideLoading());
        }

    }
}