import { Link } from 'react-router';
import styles from './ProductItem.module.scss';

function ProductItem({ product }) {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img src={product.thumbnail} alt={product.title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.infoBox}>
                    <div className={styles.infoItem}>
                        <div className={styles.label}>Price</div>
                        <div className={styles.data}>${product.price}</div>
                    </div>
                    
                    <div className={styles.infoItem}>
                        <div className={styles.label}>Rating</div>
                        <div className={styles.data}>${product.rating}</div>
                    </div>
                    
                    <div className={styles.infoItem}>
                        <div className={styles.label}>Stock</div>
                        <div className={styles.data}>${product.stock}</div>
                    </div>
                </div>
                <Link to={`/product/${product.slug}`} className={styles.button}>View Details</Link>
            </div>
        </div>
    )
}

export default ProductItem;