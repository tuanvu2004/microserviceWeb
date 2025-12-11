import ProductLayout from "../../components/ProductLayout"; 

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProductLayout>
      {children}
    </ProductLayout>
  );
}