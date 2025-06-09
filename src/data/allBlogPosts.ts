
import { blogArticles } from './blogData';

const originalPosts = [
  {
    id: 1,
    title: "Top 10 Budget Travel Destinations in India for 2025",
    excerpt: "Discover incredible destinations across India that won't break the bank. From hidden hill stations to pristine beaches, explore the most affordable yet stunning places to visit this year.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=400&fit=crop&crop=center",
    date: "May 15, 2025",
    category: "Budget Travel",
    readTime: "8 min read",
    author: "Priya Sharma",
    views: "2.3k",
    slug: "top-10-budget-travel-destinations-india-2025",
    content: "Welcome to this comprehensive guide about top 10 budget travel destinations in India for 2025. This article will provide you with detailed insights and practical information to enhance your travel experience.\n\nIndia offers incredible diversity in its landscapes, cultures, and experiences. Whether you're seeking adventure in the mountains, relaxation on pristine beaches, or cultural immersion in ancient cities, this guide will help you make the most of your journey.\n\nOur expert recommendations are based on extensive research and firsthand experience, ensuring you get authentic and reliable information for your travels."
  },
  {
    id: 2,
    title: "A Trekker's Guide to India's Best Mountain Trails",
    excerpt: "Explore the most breathtaking mountain trails across the Himalayas, Western Ghats, and Eastern ranges with detailed guides and safety tips.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center",
    date: "May 12, 2025",
    category: "Adventure",
    readTime: "12 min read",
    author: "Arjun Patel",
    views: "1.8k",
    slug: "trekkers-guide-india-mountain-trails",
    content: "Welcome to this comprehensive guide about trekking in India's best mountain trails. This article will provide you with detailed insights and practical information to enhance your travel experience.\n\nIndia offers incredible diversity in its landscapes, cultures, and experiences. Whether you're seeking adventure in the mountains, relaxation on pristine beaches, or cultural immersion in ancient cities, this guide will help you make the most of your journey.\n\nOur expert recommendations are based on extensive research and firsthand experience, ensuring you get authentic and reliable information for your travels."
  },
  {
    id: 3,
    title: "India's Top Five Scenic Road Trips",
    excerpt: "Journey through India's most picturesque routes from Leh-Ladakh to Kerala's backwaters, with complete itineraries and hidden gems.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop&crop=center",
    date: "May 10, 2025",
    category: "Travel Guides",
    readTime: "10 min read",
    author: "Neha Gupta",
    views: "3.1k",
    slug: "india-top-five-scenic-road-trips",
    content: "Welcome to this comprehensive guide about India's top five scenic road trips. This article will provide you with detailed insights and practical information to enhance your travel experience.\n\nIndia offers incredible diversity in its landscapes, cultures, and experiences. Whether you're seeking adventure in the mountains, relaxation on pristine beaches, or cultural immersion in ancient cities, this guide will help you make the most of your journey.\n\nOur expert recommendations are based on extensive research and firsthand experience, ensuring you get authentic and reliable information for your travels."
  },
  {
    id: 4,
    title: "Smart Travel: Best Apps for Your Next Trip",
    excerpt: "Essential mobile apps that every traveler needs in 2025, from booking to navigation, translation, and discovering local experiences.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=400&fit=crop&crop=center",
    date: "May 8, 2025",
    category: "Travel Guides",
    readTime: "6 min read",
    author: "Rohit Singh",
    views: "1.2k",
    slug: "smart-travel-best-apps-2025",
    content: "Welcome to this comprehensive guide about smart travel apps for your next trip. This article will provide you with detailed insights and practical information to enhance your travel experience.\n\nIndia offers incredible diversity in its landscapes, cultures, and experiences. Whether you're seeking adventure in the mountains, relaxation on pristine beaches, or cultural immersion in ancient cities, this guide will help you make the most of your journey.\n\nOur expert recommendations are based on extensive research and firsthand experience, ensuring you get authentic and reliable information for your travels."
  },
  {
    id: 5,
    title: "The Ultimate Guide to India's Beach Destinations",
    excerpt: "Discover pristine coastlines and hidden beach gems across India's extensive shoreline, from Goa's party beaches to Andaman's crystal waters.",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&h=400&fit=crop&crop=center",
    date: "May 5, 2025",
    category: "Travel Guides",
    readTime: "15 min read",
    author: "Kavya Reddy",
    views: "4.2k",
    slug: "ultimate-guide-india-beach-destinations",
    content: "Welcome to this comprehensive guide about India's beach destinations. This article will provide you with detailed insights and practical information to enhance your travel experience.\n\nIndia offers incredible diversity in its landscapes, cultures, and experiences. Whether you're seeking adventure in the mountains, relaxation on pristine beaches, or cultural immersion in ancient cities, this guide will help you make the most of your journey.\n\nOur expert recommendations are based on extensive research and firsthand experience, ensuring you get authentic and reliable information for your travels."
  },
  {
    id: 6,
    title: "Street Food Adventures: Delhi to Mumbai",
    excerpt: "A culinary journey through India's street food capitals, featuring must-try dishes, best locations, and food safety tips for travelers.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop&crop=center",
    date: "May 3, 2025",
    category: "Food & Drink",
    readTime: "9 min read",
    author: "Vikram Kumar",
    views: "2.7k",
    slug: "street-food-adventures-delhi-mumbai",
    content: "Welcome to this comprehensive guide about street food adventures from Delhi to Mumbai. This article will provide you with detailed insights and practical information to enhance your travel experience.\n\nIndia offers incredible diversity in its landscapes, cultures, and experiences. Whether you're seeking adventure in the mountains, relaxation on pristine beaches, or cultural immersion in ancient cities, this guide will help you make the most of your journey.\n\nOur expert recommendations are based on extensive research and firsthand experience, ensuring you get authentic and reliable information for your travels."
  },
  {
    id: 7,
    title: "Photography Guide: Capturing India's Festivals",
    excerpt: "Master the art of festival photography with expert tips on capturing the vibrant colors, emotions, and traditions of India's celebrations.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center",
    date: "May 1, 2025",
    category: "Photography",
    readTime: "11 min read",
    author: "Anisha Das",
    views: "1.9k",
    slug: "photography-guide-capturing-india-festivals",
    content: "Welcome to this comprehensive guide about capturing India's festivals through photography. This article will provide you with detailed insights and practical information to enhance your travel experience.\n\nIndia offers incredible diversity in its landscapes, cultures, and experiences. Whether you're seeking adventure in the mountains, relaxation on pristine beaches, or cultural immersion in ancient cities, this guide will help you make the most of your journey.\n\nOur expert recommendations are based on extensive research and firsthand experience, ensuring you get authentic and reliable information for your travels."
  }
];

// Map blogArticles to match the same structure as originalPosts
const mappedBlogArticles = blogArticles.map(article => ({
  id: article.id,
  title: article.title,
  excerpt: article.description,
  image: article.heroImage,
  date: article.publishedAt,
  category: article.tags?.[0] || "Travel",
  readTime: `${Math.ceil(article.content.length / 1000)} min read`,
  author: article.author.name,
  views: "1.5k",
  slug: article.slug,
  content: article.content
}));

// Filter out duplicates by title
const filteredOriginals = originalPosts.filter(
  post => !mappedBlogArticles.some(article => article.title === post.title)
);

// Combine them
export const allBlogPosts = [...filteredOriginals, ...mappedBlogArticles];
