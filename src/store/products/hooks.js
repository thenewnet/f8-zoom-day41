import { useSelector } from 'react-redux';
import { getList, getDetail } from './selectors';

export const useList = () => {
    return useSelector(getList);
}

export const useProduct = () => {
    return useSelector(getDetail);
}