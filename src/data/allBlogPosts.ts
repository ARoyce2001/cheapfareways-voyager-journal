
import { blogArticles } from './blogData';

// Transform blogArticles to match the expected structure for the blog components
export const allBlogPosts = blogArticles.map((article, index) => ({
  id: article.slug,
  slug: article.slug,
  title: article.title,
  excerpt: article.excerpt,
  content: article.content,
  image: `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center`, // Default image for all posts
  category: "Travel",
  date: "2024",
  readTime: "5 min read",
  author: "Travel Expert",
  seoTitle: article.seoTitle,
  metaDescription: article.metaDescription,
  keywords: article.keywords
}));

console.log('Total blog posts loaded:', allBlogPosts.length);
console.log('Blog post slugs:', allBlogPosts.map(post => post.slug));
