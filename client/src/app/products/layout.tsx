import ProductLayout from "../../components/ProductLayout";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProductLayout>{children}</ProductLayout>;
}
