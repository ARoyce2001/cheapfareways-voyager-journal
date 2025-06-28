
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, User, Eye } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { allBlogPosts } from "../data/allBlogPosts";

const Blog = () => {
  const [api, setApi] = useState<any>();

  // Auto-play slideshow
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  const slideshowImages = [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1920&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&h=800&fit=crop&crop=center"
  ];

  // Use the first article as featured post
  const featuredPost = allBlogPosts[0];

  const categories = ["Adventure", "Budget Travel", "Culture", "Food & Drink", "Travel Guides", "Photography", "Solo Travel", "Wildlife"];

  // Use all posts except the first one (which is featured) for the grid
  const blogPosts = allBlogPosts.slice(1);

  const handleArticleClick = (slug: string) => {
    window.open(`/blog/${slug}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section with Slideshow */}
      <section className="relative bg-black text-white overflow-hidden py-24">
        <div className="absolute inset-0">
          <Carousel setApi={setApi} className="w-full h-full">
            <CarouselContent className="w-full h-full">
              {slideshowImages.map((image, index) => (
                <CarouselItem key={index} className="w-full h-full p-0">
                  <img 
                    src={image}
                    alt={`Travel destination ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 bg-yellow-600/30 backdrop-blur-md rounded-full border border-yellow-600/50 mb-6">
            <span className="text-yellow-300 font-medium">Travel Blog</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            Discover India's
            <span className="text-yellow-300 block">Hidden Gems</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your ultimate guide to affordable travel, authentic experiences, and unforgettable adventures across incredible India.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-20 bg-black/90 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-1 h-8 bg-yellow-600"></div>
              <h2 className="text-3xl font-light text-white">Featured Article</h2>
            </div>
            
            <div 
              className="group bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-700/40 overflow-hidden hover:border-yellow-600/40 transition-all duration-500 hover:transform hover:scale-[1.02] cursor-pointer"
              onClick={() => handleArticleClick(featuredPost.slug)}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-600 text-gray-900 text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="px-3 py-1 bg-gray-800/60 backdrop-blur-sm rounded-full">{featuredPost.category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light text-white mb-4 leading-tight group-hover:text-yellow-300 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                    </div>
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-gray-900 font-medium px-6 py-3 rounded-full group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Browse Topics */}
      <section className="py-20 border-t border-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-8 bg-yellow-600"></div>
            <h2 className="text-3xl font-light text-white">Browse Topics</h2>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="bg-gray-900/40 backdrop-blur-md border-gray-600/40 text-gray-300 hover:bg-yellow-600 hover:border-yellow-600 hover:text-gray-900 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="group bg-gray-900/30 backdrop-blur-md rounded-xl border border-gray-700/30 overflow-hidden hover:border-yellow-600/40 transition-all duration-500 hover:transform hover:scale-[1.02] cursor-pointer"
                onClick={() => handleArticleClick(post.slug)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-yellow-300 text-xs font-semibold rounded-full border border-gray-700/50">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3 group-hover:text-yellow-300 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-yellow-300 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <Button className="bg-transparent border-2 border-gray-600/50 text-gray-300 hover:bg-yellow-600 hover:border-yellow-600 hover:text-gray-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-md">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
