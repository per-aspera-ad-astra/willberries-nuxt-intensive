import { Product } from '../../app/models/products.model';

const getNewProducts = (products: Product[]) =>
  products.filter((c) => c.label.toLowerCase() === 'new');

export default defineEventHandler(async (event) => {
  const products: Product[] = await $fetch(
    'https://intensive-nuxt-default-rtdb.firebaseio.com/db.json'
  );

  return getNewProducts(products);
});
