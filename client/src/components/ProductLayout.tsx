import React from 'react';
const ProductLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};
export default ProductLayout;