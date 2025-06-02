
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, User, Eye } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "Top 10 Budget Travel Destinations in India for 2025",
    excerpt: "Discover incredible destinations across India that won't break the bank. From hidden hill stations to pristine beaches, explore the most affordable yet stunning places to visit this year.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center",
    date: "December 15, 2024",
    category: "Budget Travel",
    location: "India",
    readTime: "8 min read",
    author: "Priya Sharma",
    views: "2.3k"
  };

  const categories = ["Adventure", "Budget Travel", "Culture", "Food & Drink", "Travel Guides", "Photography", "Solo Travel"];

  const blogPosts = [
    {
      id: 2,
      title: "A Trekker's Guide to India's Best Mountain Trails",
      excerpt: "Explore the most breathtaking mountain trails across the Himalayas, Western Ghats, and Eastern ranges with detailed guides and safety tips.",
      image: "https://images.unsplash.com/photo-1464822759844-d150baec93c5?w=800&h=400&fit=crop&crop=center",
      date: "December 12, 2024",
      category: "Adventure",
      readTime: "12 min read",
      author: "Arjun Patel",
      views: "1.8k"
    },
    {
      id: 3,
      title: "India's Top Five Scenic Road Trips",
      excerpt: "Journey through India's most picturesque routes from Leh-Ladakh to Kerala's backwaters, with complete itineraries and hidden gems.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop&crop=center",
      date: "December 10, 2024",
      category: "Travel Guides",
      readTime: "10 min read",
      author: "Neha Gupta",
      views: "3.1k"
    },
    {
      id: 4,
      title: "Smart Travel: Best Apps for Your Next Trip",
      excerpt: "Essential mobile apps that every traveler needs in 2025, from booking to navigation, translation, and discovering local experiences.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=400&fit=crop&crop=center",
      date: "December 8, 2024",
      category: "Travel Guides",
      readTime: "6 min read",
      author: "Rohit Singh",
      views: "1.2k"
    },
    {
      id: 5,
      title: "The Ultimate Guide to India's Beach Destinations",
      excerpt: "Discover pristine coastlines and hidden beach gems across India's extensive shoreline, from Goa's party beaches to Andaman's crystal waters.",
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&h=400&fit=crop&crop=center",
      date: "December 5, 2024",
      category: "Travel Guides",
      readTime: "15 min read",
      author: "Kavya Reddy",
      views: "4.2k"
    },
    {
      id: 6,
      title: "Street Food Adventures: Delhi to Mumbai",
      excerpt: "A culinary journey through India's street food capitals, featuring must-try dishes, best locations, and food safety tips for travelers.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop&crop=center",
      date: "December 3, 2024",
      category: "Food & Drink",
      readTime: "9 min read",
      author: "Vikram Kumar",
      views: "2.7k"
    },
    {
      id: 7,
      title: "Photography Guide: Capturing India's Festivals",
      excerpt: "Master the art of festival photography with expert tips on capturing the vibrant colors, emotions, and traditions of India's celebrations.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center",
      date: "December 1, 2024",
      category: "Photography",
      readTime: "11 min read",
      author: "Anisha Das",
      views: "1.9k"
    },
    {
      id: 8,
      title: "Solo Female Travel in India: Complete Safety Guide",
      excerpt: "Comprehensive guide for solo female travelers with safety tips, recommended destinations, and cultural insights for a confident journey.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=400&fit=crop&crop=center",
      date: "November 28, 2024",
      category: "Solo Travel",
      readTime: "13 min read",
      author: "Meera Joshi",
      views: "3.8k"
    },
    {
      id: 9,
      title: "Monsoon Magic: Best Places to Visit During Rains",
      excerpt: "Embrace the monsoon season with our guide to India's most beautiful destinations that come alive during the rains.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop&crop=center",
      date: "November 25, 2024",
      category: "Travel Guides",
      readTime: "8 min read",
      author: "Rajesh Mehta",
      views: "2.1k"
    },
    {
      id: 10,
      title: "Cultural Immersion: Living with Local Families",
      excerpt: "Experience authentic India through homestays and cultural exchanges that offer deep insights into local traditions and lifestyles.",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=400&fit=crop&crop=center",
      date: "November 22, 2024",
      category: "Culture",
      readTime: "14 min read",
      author: "Sanjana Iyer",
      views: "1.6k"
    },
    {
      id: 11,
      title: "Budget Backpacking: ₹1000 Per Day Travel Guide",
      excerpt: "Learn how to travel across India on a shoestring budget with practical tips on accommodation, food, and transportation.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop&crop=center",
      date: "November 20, 2024",
      category: "Budget Travel",
      readTime: "16 min read",
      author: "Karan Malhotra",
      views: "5.2k"
    },
    {
      id: 12,
      title: "Adventure Sports in India: Ultimate Adrenaline Guide",
      excerpt: "From white water rafting in Rishikesh to paragliding in Himachal, discover India's best adventure sports destinations.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop&crop=center",
      date: "November 18, 2024",
      category: "Adventure",
      readTime: "12 min read",
      author: "Deepak Sharma",
      views: "2.9k"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 text-white overflow-hidden py-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=800&fit=crop&crop=center"
            alt="India's Hidden Gems"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 bg-yellow-600/20 backdrop-blur-sm rounded-full border border-yellow-600/30 mb-6">
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
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-8 bg-yellow-600"></div>
            <h2 className="text-3xl font-light text-white">Featured Article</h2>
          </div>
          
          <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-yellow-600/30 transition-all duration-500 hover:transform hover:scale-[1.02]">
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
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full">{featuredPost.category}</span>
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
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>{featuredPost.views} views</span>
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

      {/* Browse Topics */}
      <section className="py-20 border-t border-gray-800/50">
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
                className="bg-gray-800/30 backdrop-blur-sm border-gray-600/50 text-gray-300 hover:bg-yellow-600 hover:border-yellow-600 hover:text-gray-900 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/30 overflow-hidden hover:border-yellow-600/30 transition-all duration-500 hover:transform hover:scale-[1.02] cursor-pointer">
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
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views} views</span>
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
            <Button className="bg-transparent border-2 border-gray-600 text-gray-300 hover:bg-yellow-600 hover:border-yellow-600 hover:text-gray-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
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
