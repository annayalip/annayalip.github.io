
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { X, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const CartSidebar: React.FC = () => {
  const { 
    items, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    totalPrice,
    clearCart
  } = useCart();
  
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    address: '',
    comments: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setOrderForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!orderForm.name || !orderForm.phone || !orderForm.address) {
      toast.error('Пожалуйста, заполните все обязательные поля');
      return;
    }
    
    // Here you would normally send the order to your backend
    console.log('Order submitted', { items, totalPrice, ...orderForm });
    
    // Show success message and reset
    toast.success('Ваш заказ успешно оформлен!');
    setIsOrderFormOpen(false);
    clearCart();
  };

  const openOrderForm = () => {
    closeCart();
    setIsOrderFormOpen(true);
  };

  // Format price
  const formatPrice = (price: number) => {
    return `${price.toFixed(0)} ₽`;
  };

  return (
    <>
      {/* Cart Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="py-4 px-6 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center">
              <ShoppingCart className="mr-2" size={20} />
              Корзина
            </h2>
            <button 
              onClick={closeCart}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Закрыть корзину"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 text-gray-500">
                <ShoppingCart size={48} className="opacity-50" />
                <p>Ваша корзина пуста</p>
                <Button 
                  variant="outline" 
                  onClick={closeCart}
                  className="mt-2"
                >
                  Перейти к меню
                </Button>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex py-4 border-b animate-fade-in">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4 flex-grow">
                      <h4 className="font-semibold">{item.name}</h4>
                      {item.size && <p className="text-sm text-gray-500">{item.size}</p>}
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-full border hover:bg-gray-100 transition-colors"
                            aria-label="Уменьшить количество"
                          >
                            <Minus size={14} />
                          </button>
                          <span>{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full border hover:bg-gray-100 transition-colors"
                            aria-label="Увеличить количество"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="flex items-center">
                          <span className="font-semibold">{formatPrice(item.price * item.quantity)}</span>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="ml-3 p-1 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                            aria-label="Удалить товар"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Footer with total and checkout button */}
          {items.length > 0 && (
            <div className="px-6 py-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Итого:</span>
                <span className="text-xl font-bold">{formatPrice(totalPrice)}</span>
              </div>
              <Button 
                onClick={openOrderForm}
                className="w-full bg-pizza-red hover:bg-orange-600 transition-colors py-2"
              >
                Оформить заказ
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Order Form Dialog */}
      <Dialog open={isOrderFormOpen} onOpenChange={setIsOrderFormOpen}>
        <DialogContent className="sm:max-w-md">
          <h2 className="text-xl font-bold mb-4">Оформление заказа</h2>
          <form onSubmit={handleSubmitOrder}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Имя*</label>
                <Input 
                  id="name"
                  name="name" 
                  value={orderForm.name} 
                  onChange={handleChange} 
                  placeholder="Иван Иванов"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Телефон*</label>
                <Input 
                  id="phone"
                  name="phone" 
                  value={orderForm.phone} 
                  onChange={handleChange} 
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-1">Адрес доставки*</label>
                <Input 
                  id="address"
                  name="address" 
                  value={orderForm.address} 
                  onChange={handleChange} 
                  placeholder="ул. Примерная, д. 1, кв. 1"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="comments" className="block text-sm font-medium mb-1">Комментарий к заказу</label>
                <Textarea 
                  id="comments"
                  name="comments" 
                  value={orderForm.comments} 
                  onChange={handleChange} 
                  placeholder="Особые пожелания к заказу или доставке"
                  className="resize-none"
                />
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Итого к оплате:</span>
                  <span className="text-lg font-bold">{formatPrice(totalPrice)}</span>
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    type="button"
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setIsOrderFormOpen(false)}
                  >
                    Отмена
                  </Button>
                  <Button 
                    type="submit"
                    className="flex-1 bg-pizza-red hover:bg-orange-600 transition-colors"
                  >
                    Заказать
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CartSidebar;
