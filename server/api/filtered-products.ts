import { Product } from '../../app/models/products.model';

export interface Query {
  field: keyof Product;
  name: string | undefined;
}

const getFilteredProducts = (products: Product[], query: Query) => {
  if (query.field && query.name) {
    return products.filter((c) => c[query.field] === query.name);
  } else {
    return products;
  }
};

export default defineEventHandler(async (event) => {
  const { field, name }: Query = getQuery(event);

  const products: Product[] = await $fetch(
    'https://intensive-nuxt-default-rtdb.firebaseio.com/db.json'
  );

  return getFilteredProducts(products, { field, name });
});
