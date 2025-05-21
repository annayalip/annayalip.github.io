
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/contexts/CartContext';

interface ProductGridProps {
  products: Product[];
  title?: string;
  description?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  title,
  description,
}) => {
  const [category, setCategory] = useState<string>('all');
  
  // Get all unique categories
  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];
  
  // Filter products by category
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(p => p.category === category);

  return (
    <section className="py-12 animate-on-scroll">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        )}
        {description && (
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">{description}</p>
        )}
        
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full transition-colors ${
                category === cat
                  ? 'bg-pizza-red text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {cat === 'all' ? 'Все' : cat}
            </button>
          ))}
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">В этой категории нет товаров</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
