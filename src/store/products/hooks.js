import { useSelector } from 'react-redux';
import { getList } from './selectors';

export const useList = () => {
    return useSelector(getList);
}