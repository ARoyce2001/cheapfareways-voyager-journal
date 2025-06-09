
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
    slug: "top-10-budget-travel-destinations-india-2025"
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
    slug: "trekkers-guide-india-mountain-trails"
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
    slug: "india-top-five-scenic-road-trips"
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
    slug: "smart-travel-best-apps-2025"
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
    slug: "ultimate-guide-india-beach-destinations"
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
    slug: "street-food-adventures-delhi-mumbai"
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
    slug: "photography-guide-capturing-india-festivals"
  }
];

// Filter out duplicates by title
const filteredOriginals = originalPosts.filter(
  post => !blogArticles.some(article => article.title === post.title)
);

// Combine them
export const allBlogPosts = [...filteredOriginals, ...blogArticles];
