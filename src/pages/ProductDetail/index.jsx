import { useEffect } from 'react';
import styles from './ProductDetail.module.scss';

import { actions as productActions, hooks as productHooks } from '@/store/products';
import { useDispatch } from 'react-redux';

import { Link, useParams } from 'react-router';

function ProductDetail() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const product = productHooks.useProduct();

  useEffect(() => {
    dispatch(productActions.getDetail(slug));
  }, [dispatch, slug])

  return (
    <div className={styles.container}>
      <div className={styles.backBtn}>
        <Link to="/products">Back to Products</Link>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={product?.thumbnail} alt={product?.name} />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>{product?.name}</div>
          <div className={styles.description}>{product?.description}</div>

          <div className={styles.infoBox}>
            <div className={styles.infoItem}>
              <div className={styles.label}>Price</div>
              <div className={styles.data}>${product?.price}</div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.label}>Rating</div>
              <div className={styles.data}>${product?.rating}</div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.label}>Stock</div>
              <div className={styles.data}>${product?.stock}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;
