
import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: 1,
    name: 'Маргарита',
    description: 'Классическая итальянская пицца с томатным соусом, моцареллой и свежим базиликом',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Пицца',
    price: 399,
    sizes: [
      { id: 1, name: '25 см', price: 399 },
      { id: 2, name: '30 см', price: 549 },
      { id: 3, name: '35 см', price: 699 }
    ],
    popular: true
  },
  {
    id: 2,
    name: 'Пепперони',
    description: 'Пицца с томатным соусом, моцареллой и острыми колбасками пепперони',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Пицца',
    price: 499,
    sizes: [
      { id: 1, name: '25 см', price: 499 },
      { id: 2, name: '30 см', price: 649 },
      { id: 3, name: '35 см', price: 799 }
    ],
    popular: true
  },
  {
    id: 3,
    name: '4 сыра',
    description: 'Изысканная пицца с четырьмя видами сыра: моцарелла, горгонзола, пармезан и рикотта',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Пицца',
    price: 549,
    sizes: [
      { id: 1, name: '25 см', price: 549 },
      { id: 2, name: '30 см', price: 699 },
      { id: 3, name: '35 см', price: 849 }
    ]
  },
  {
    id: 4,
    name: 'Гавайская',
    description: 'Пицца с томатным соусом, моцареллой, ветчиной и ананасами',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Пицца',
    price: 499,
    sizes: [
      { id: 1, name: '25 см', price: 499 },
      { id: 2, name: '30 см', price: 649 },
      { id: 3, name: '35 см', price: 799 }
    ]
  },
  {
    id: 5,
    name: 'Вегетарианская',
    description: 'Пицца с томатным соусом, моцареллой, баклажанами, цуккини, болгарским перцем и грибами',
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Пицца',
    price: 469,
    sizes: [
      { id: 1, name: '25 см', price: 469 },
      { id: 2, name: '30 см', price: 619 },
      { id: 3, name: '35 см', price: 769 }
    ]
  },
  {
    id: 6,
    name: 'Карбонара',
    description: 'Пицца с соусом бешамель, моцареллой, беконом, яйцом и пармезаном',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Пицца',
    price: 549,
    sizes: [
      { id: 1, name: '25 см', price: 549 },
      { id: 2, name: '30 см', price: 699 },
      { id: 3, name: '35 см', price: 849 }
    ],
    popular: true
  },
  {
    id: 7,
    name: 'Coca Cola',
    description: 'Классический освежающий напиток',
    image: 'https://images.unsplash.com/photo-1554866585-a4df25525eff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Напитки',
    price: 149
  },
  {
    id: 8,
    name: 'Sprite',
    description: 'Освежающий лимонно-лаймовый напиток',
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Напитки',
    price: 149
  },
  {
    id: 9,
    name: 'Фанта',
    description: 'Газированный напиток с апельсиновым вкусом',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Напитки',
    price: 149
  },
  {
    id: 10,
    name: 'Чизкейк Нью-Йорк',
    description: 'Классический американский чизкейк с нежной консистенцией и ванильным вкусом',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Десерты',
    price: 259,
    popular: true
  },
  {
    id: 11,
    name: 'Тирамису',
    description: 'Итальянский десерт на основе сыра маскарпоне с добавлением кофе и какао',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Десерты',
    price: 279
  },
  {
    id: 12,
    name: 'Шоколадный фондан',
    description: 'Шоколадный кекс с жидкой сердцевиной, подается с шариком ванильного мороженого',
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Десерты',
    price: 289
  }
];

// Popular products for the homepage
export const popularProducts = products.filter(product => product.popular);
