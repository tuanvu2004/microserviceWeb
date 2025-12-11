import ProductList from "../../components/ProductList";

const ProductsPage = async ({ searchParams }: { searchParams: Promise<{ category: string }> }) => {
  const category = (await searchParams).category;

  return (
    <div className='mt-8 mb-8'>
      <ProductList category={category} params="products" />
    </div>
  );
};

export default ProductsPage;