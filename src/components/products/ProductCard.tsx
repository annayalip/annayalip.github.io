
import React, { useState } from 'react';
import { Product, Size, useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<Size | undefined>(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : undefined
  );
  
  const handleAddToCart = () => {
    addToCart(product, selectedSize);
  };

  // Animate the add to cart button
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleButtonClick = () => {
    setIsAnimating(true);
    handleAddToCart();
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div 
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-md product-card animate-on-scroll",
        className
      )}
    >
      <div className="relative pb-[75%]">
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {product.popular && (
          <div className="absolute top-2 left-2 bg-pizza-red text-white px-2 py-1 rounded-md text-xs font-semibold">
            Популярное
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-500 text-sm my-2 line-clamp-2 min-h-[2.5rem]">{product.description}</p>
        
        {/* Size selector */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="my-3">
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size.id}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded text-sm border border-gray-300 transition-colors ${
                    selectedSize?.id === size.id
                      ? 'bg-pizza-red text-white border-pizza-red'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center mt-4">
          <div className="font-bold text-lg">
            {selectedSize ? `${selectedSize.price} ₽` : `${product.price} ₽`}
          </div>
          <Button
            onClick={handleButtonClick}
            className={cn(
              "bg-pizza-red hover:bg-orange-600 transition-all",
              isAnimating && "animate-add-to-cart"
            )}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
