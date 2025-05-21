
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Пожалуйста, заполните все поля');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // Here you would normally send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Ваше сообщение отправлено!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Произошла ошибка. Пожалуйста, попробуйте еще раз');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-on-scroll">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Имя*</label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Иван Иванов"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email*</label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@mail.ru"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Сообщение*</label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Напишите ваш вопрос или пожелание..."
          rows={5}
          required
          className="resize-none"
        />
      </div>
      
      <Button
        type="submit"
        className="w-full bg-pizza-red hover:bg-orange-600 transition-colors"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Отправка...' : 'Отправить'}
      </Button>
    </form>
  );
};

export default ContactForm;
