import { useDispatch } from 'react-redux';
import styles from './ProductList.module.scss';

import {
    hooks as productsHooks,
    actions as productsActions,

} from '@/store/products';
import { useEffect } from 'react';
import ProductItem from './components/ProductItem';

function ProductList() {

    const dispatch = useDispatch();
    const products = productsHooks.useList();

    useEffect(() => {
        dispatch(productsActions.getList());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Product List</h1>
            <div className={styles.content}>
                {products.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
        </div>
    )
}

export default ProductList;
