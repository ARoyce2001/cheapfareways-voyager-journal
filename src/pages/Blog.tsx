
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "Top 10 Budget Travel Destinations in India for 2025",
    excerpt: "Explore cost-effective trail plan top spots their travel adventurous exploration.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center",
    date: "April 15, 2025",
    category: "Budget Travel",
    location: "India",
    readTime: "8 min read"
  };

  const categories = ["Adventure", "Budget Travel", "Culture", "Food & Drink", "Travel Guides"];

  const blogPosts = [
    {
      id: 2,
      title: "A Trekker's Guide to India's Best Mountain Trails",
      excerpt: "Explore cost-effective traian top spots of their travel adventurous exploration",
      image: "https://images.unsplash.com/photo-1464822759844-d150baec93c5?w=800&h=400&fit=crop&crop=center",
      date: "March 28, 2025",
      category: "Adventure"
    },
    {
      id: 3,
      title: "India's Top Five Scenic Road Trips",
      excerpt: "Insight sipes how to enrich linture-rich enjoy",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop&crop=center",
      date: "March 20, 2025",
      category: "Travel Guides"
    },
    {
      id: 4,
      title: "Smart Travel: Best Apps for Your Next Trip",
      excerpt: "Explore rich light apps for your next rensals",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=400&fit=crop&crop=center",
      date: "March 12, 2025",
      category: "Travel Guides"
    },
    {
      id: 5,
      title: "The Ultimate Guide to India's Beach Destinations",
      excerpt: "Discover pristine coastlines and hidden beach gems across India's extensive shoreline",
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&h=400&fit=crop&crop=center",
      date: "March 5, 2025",
      category: "Travel Guides"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=800&fit=crop&crop=center"
            alt="India's Hidden Gems"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-yellow-100 mb-8 leading-tight">
            Discover India's Hidden Gems
          </h1>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-light text-yellow-100 mb-8">Featured Article</h2>
          
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="md:w-1/2">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-light text-yellow-100 mb-4 leading-tight">
                {featuredPost.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span>{featuredPost.date}</span>
                <span>{featuredPost.category}</span>
                <span>{featuredPost.location}</span>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <Button className="w-fit bg-yellow-600 hover:bg-yellow-700 text-gray-900 font-medium px-6 py-2 rounded">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Topics */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-light text-yellow-100 mb-8">Browse Topics</h2>
          
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 hover:text-white rounded px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex flex-col md:flex-row gap-6 group cursor-pointer">
                <div className="md:w-1/3">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 md:h-32 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-light text-yellow-100 mb-2 group-hover:text-yellow-200 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                    <span>{post.date}</span>
                    <span>{post.category}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
