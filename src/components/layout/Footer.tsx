
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-pizza-darkGray text-white py-12 animate-on-scroll">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-pizza-red rounded-md flex items-center justify-center text-white font-bold text-xl">
                П
              </div>
              <span className="font-bold text-xl">Дом Пиццы</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Мы доставляем самую вкусную пиццу в городе прямо к вашей двери.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pizza-red transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-pizza-red transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pizza-red transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-6">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pizza-red transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-pizza-red transition-colors">Меню</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-pizza-red transition-colors">О нас</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-pizza-red transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span>ул. Пиццерская, 123, Москва</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>📞</span>
                <span>+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>✉️</span>
                <span>info@dompizza.ru</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>🕒</span>
                <span>Пн-Вс: 10:00 - 23:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {year} Дом Пиццы. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#" className="hover:text-pizza-red transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-pizza-red transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
