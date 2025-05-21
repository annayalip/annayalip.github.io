
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-pizza-darkGray text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Вкусная пицца"
          className="w-full h-full object-cover opacity-50"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32 min-h-[80vh] flex items-center">
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="block">Лучшая пицца</span>
            <span className="block text-pizza-red">в вашем городе</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Насладитесь непревзойденным вкусом нашей пиццы, приготовленной 
            из свежайших ингредиентов по традиционным итальянским рецептам.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              asChild
              className="bg-pizza-red hover:bg-orange-600 transition-colors text-lg px-8 py-6"
            >
              <Link to="/menu">
                Заказать сейчас
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              className="border-white text-pizza-orange bg-white hover:bg-white/90 transition-colors text-lg px-8 py-6"
            >
              <Link to="/menu">
                Смотреть меню
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
