import { blogArticles } from './blogData';

const originalPosts = [
  {
    id: 2,
    title: "A Trekker's Guide to India's Best Mountain Trails",
    excerpt: "Explore the most breathtaking mountain trails across the Himalayas, Western Ghats, and Eastern ranges with detailed guides and safety tips.",
    slug: "trekkers-guide-india",
    // ...other fields
  },
  // ...rest of your original posts
];

// Filter out duplicates by title
const filteredOriginals = originalPosts.filter(
  post => !blogArticles.some(article => article.title === post.title)
);

// Combine them
export const allBlogPosts = [...filteredOriginals, ...blogArticles];

