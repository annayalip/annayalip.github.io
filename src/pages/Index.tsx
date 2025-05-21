
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/hero/Hero';
import ProductGrid from '@/components/products/ProductGrid';
import { popularProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Additional features section data
  const features = [
    {
      icon: '🍕',
      title: 'Свежие ингредиенты',
      description: 'Мы используем только самые свежие и качественные ингредиенты для приготовления наших блюд.'
    },
    {
      icon: '🚚',
      title: 'Быстрая доставка',
      description: 'Доставляем заказы в течение 60 минут или пицца бесплатно!'
    },
    {
      icon: '💰',
      title: 'Выгодные акции',
      description: 'Регулярные скидки и специальные предложения для наших клиентов.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      
      {/* Popular Products */}
      <ProductGrid 
        products={popularProducts}
        title="Популярные блюда"
        description="Самые любимые блюда наших клиентов, которые точно стоит попробовать"
      />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform hover:-translate-y-2 duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild
              className="bg-pizza-red hover:bg-orange-600 transition-colors"
            >
              <Link to="/menu">
                Перейти к меню
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 animate-on-scroll relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Вкусная пицца"
            className="w-full h-full object-cover opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-pizza-darkGray/80"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Заказывайте прямо сейчас!</h2>
            <p className="text-lg mb-8">
              Не упустите возможность отведать самую вкусную пиццу в городе.
              Закажите прямо сейчас и получите скидку 10% на первый заказ!
            </p>
            <Button 
              asChild
              className="bg-pizza-red hover:bg-orange-600 transition-colors text-lg px-8 py-5"
            >
              <Link to="/menu">
                Заказать со скидкой
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
