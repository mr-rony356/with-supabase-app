import type { Product } from "@/lib/types/product";

export const popularProducts: Product[] = [
  {
    id: "1",
    name: "377 whitening Cream",
    description: "377 whitening Cream for skin whitening",
    price: 5,
    image:
      "/377.jpeg",
  },
  {
    id: "2",
    name: "Muffin",
    description: "Freshly baked blueberry muffin, perfect with coffee",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=400&fit=crop&auto=format&q=75",
  },
  {
    id: "3",
    name: "Seafood Salad",
    description: "Mixed greens with shrimp, calamari and lemon vinaigrette",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=400&fit=crop&auto=format&q=75",
    tag: "NEW",
  },
];

export const pizzaProducts: Product[] = [
  {
    id: "4",
    name: "Italian Pizza",
    description: "Classic tomato sauce, mozzarella, fresh basil",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop&auto=format&q=75",
  },
  {
    id: "5",
    name: "Pepperoni Pizza",
    description: "Spicy pepperoni with mozzarella and tomato base",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop&auto=format&q=75",
  },
  {
    id: "6",
    name: "Margherita Pizza",
    description: "San Marzano tomatoes, buffalo mozzarella, basil",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop&auto=format&q=75",
  },
];

export const locations = [
  {
    address: "Best street 3A, New York",
    phone: "+1 234 567 890",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&auto=format&q=75",
  },
  {
    address: "Downtown 12B, Brooklyn",
    phone: "+1 234 567 891",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop&auto=format&q=75",
  },
  {
    address: "Central Ave 7C, Manhattan",
    phone: "+1 234 567 892",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop&auto=format&q=75",
  },
];
