export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'cakes' | 'pastries' | 'brownies';
  ingredients?: string[];
  sizes?: string[];
}

export const products: Product[] = [
  // Cakes
  {
    id: 'cake-1',
    name: 'Chocolate Cake',
    description: 'Rich, moist chocolate layers with velvety ganache.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
    category: 'cakes',
    ingredients: ['Dark Chocolate', 'Organic Flour', 'Cocoa Powder', 'Fresh Cream'],
    sizes: ['6 inch', '8 inch', '10 inch']
  },
  {
    id: 'cake-2',
    name: 'Black Forest Cake',
    description: 'Classic German layers with cherries and whipped cream.',
    price: 38,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800',
    category: 'cakes',
    ingredients: ['Cherries', 'Kirsch', 'Chocolate Shavings', 'Whipped Cream'],
    sizes: ['6 inch', '8 inch', '10 inch']
  },
  {
    id: 'cake-3',
    name: 'Red Velvet Cake',
    description: 'Striking red layers with smooth cream cheese frosting.',
    price: 40,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&q=80&w=800',
    category: 'cakes',
    ingredients: ['Buttermilk', 'Cocoa', 'Cream Cheese', 'Natural Red Color'],
    sizes: ['6 inch', '8 inch', '10 inch']
  },
  {
    id: 'cake-4',
    name: 'Vanilla Cake',
    description: 'Light and airy vanilla sponge with Madagascar bean frosting.',
    price: 30,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800',
    category: 'cakes',
    ingredients: ['Madagascar Vanilla', 'Butter', 'Eggs', 'Sugar'],
    sizes: ['6 inch', '8 inch', '10 inch']
  },
  {
    id: 'cake-5',
    name: 'Fruit Cake',
    description: 'Loaded with fresh seasonal fruits and light cream.',
    price: 42,
    image: 'https://images.unsplash.com/photo-1562238525-063f47fd31b2?auto=format&fit=crop&q=80&w=800',
    category: 'cakes',
    ingredients: ['Seasonal Fruits', 'Sponge Cake', 'Fruit Glaze'],
    sizes: ['6 inch', '8 inch', '10 inch']
  },

  // Pastries
  {
    id: 'pastry-1',
    name: 'Chocolate Pastry',
    description: 'Individual slice of our signature chocolate heaven.',
    price: 6,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800',
    category: 'pastries',
    ingredients: ['Chocolate Ganache', 'Sponge', 'Cocoa'],
  },
  {
    id: 'pastry-2',
    name: 'Strawberry Pastry',
    description: 'Fresh strawberries on a light, creamy base.',
    price: 7,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a02583ec?auto=format&fit=crop&q=80&w=800',
    category: 'pastries',
    ingredients: ['Fresh Strawberries', 'Pastry Cream', 'Shortcrust'],
  },
  {
    id: 'pastry-3',
    name: 'Croissant',
    description: 'Buttery, flaky, and golden-brown French classic.',
    price: 5,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
    category: 'pastries',
    ingredients: ['French Butter', 'Flour', 'Yeast'],
  },
  {
    id: 'pastry-4',
    name: 'Tiramisu Pastry',
    description: 'Coffee-soaked layers with mascarpone richness.',
    price: 8,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
    category: 'pastries',
    ingredients: ['Espresso', 'Mascarpone', 'Ladyfingers'],
  },

  // Brownies
  {
    id: 'brownie-1',
    name: 'Classic Brownie',
    description: 'The ultimate fudgy chocolate experience.',
    price: 4,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800',
    category: 'brownies',
    ingredients: ['Dark Chocolate', 'Butter', 'Walnuts'],
  },
  {
    id: 'brownie-2',
    name: 'Walnut Brownie',
    description: 'Classic brownie with a crunch of premium walnuts.',
    price: 5,
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80&w=800',
    category: 'brownies',
    ingredients: ['Walnuts', 'Cocoa', 'Fudge'],
  },
  {
    id: 'brownie-3',
    name: 'Caramel Brownie',
    description: 'Fudgy brownie swirled with salted caramel.',
    price: 6,
    image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800',
    category: 'brownies',
    ingredients: ['Salted Caramel', 'Chocolate', 'Sea Salt'],
  },
  {
    id: 'brownie-4',
    name: 'Dark Chocolate Brownie',
    description: 'Intense 70% cocoa for the true chocolate lover.',
    price: 7,
    image: 'https://images.unsplash.com/photo-1582176595405-ef37b4259740?auto=format&fit=crop&q=80&w=800',
    category: 'brownies',
    ingredients: ['70% Dark Chocolate', 'Cocoa Nibs'],
  },
];
