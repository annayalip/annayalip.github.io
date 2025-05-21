
import React from 'react';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/ui/contact-form';

const ContactsPage = () => {
  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-pizza-gray py-16 animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">Контакты</h1>
          <p className="text-center text-gray-600 mt-2 max-w-xl mx-auto">
            Свяжитесь с нами любым удобным способом или оставьте сообщение
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-16 animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Написать нам</h2>
              <ContactForm />
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Информация</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg">Адрес</h3>
                  <p className="text-gray-600 mt-2">
                    г. Росов-на-Дону, ул. Большая Садовая, 52
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg">Телефон</h3>
                  <p className="text-gray-600 mt-2">
                    +7 (961) 404-58-75
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-gray-600 mt-2">
                    iatse@sfedu.ru
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg">Часы работы</h3>
                  <p className="text-gray-600 mt-2">
                    Понедельник - Воскресенье: 10:00 - 23:00
                  </p>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Мы в соцсетях</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-pizza-gray hover:bg-pizza-red transition-colors p-3 rounded-full text-pizza-darkGray hover:text-white"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-pizza-gray hover:bg-pizza-red transition-colors p-3 rounded-full text-pizza-darkGray hover:text-white"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-pizza-gray hover:bg-pizza-red transition-colors p-3 rounded-full text-pizza-darkGray hover:text-white"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-8 animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Как нас найти</h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with actual map embed or interactive map component */}
            <div className="w-full h-full flex items-center justify-center bg-pizza-gray text-black text-lg">
              Карта с расположением пиццерии
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactsPage;
