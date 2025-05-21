
import React from 'react';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import { products } from '@/data/products';

const MenuPage = () => {
  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-pizza-gray py-16 animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">Меню</h1>
          <p className="text-center text-gray-600 mt-2 max-w-xl mx-auto">
            Выбирайте из широкого ассортимента наших блюд и наслаждайтесь великолепным вкусом
          </p>
        </div>
      </div>
      
      {/* Products */}
      <ProductGrid 
        products={products}
      />
    </Layout>
  );
};

export default MenuPage;
