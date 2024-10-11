import { getProducts } from '../api/api';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Product.module.css';

export default async function ProductGrid() {
  const products = await getProducts();

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
 </div>
);
}