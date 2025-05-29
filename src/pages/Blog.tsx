import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, Calendar, ArrowRight, TrendingUp, Play } from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videoSlides = [
    {
      id: 1,
      title: "Discover India's Hidden Gems",
      subtitle: "Explore breathtaking destinations across incredible India",
      videoUrl: "https://videos.pexels.com/video-files/4009252/4009252-uhd_2560_1440_30fps.mp4",
      thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Budget Travel Made Easy",
      subtitle: "Find amazing deals and save on your next adventure",
      videoUrl: "https://videos.pexels.com/video-files/4009252/4009252-uhd_2560_1440_30fps.mp4",
      thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=600&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Monsoon Magic",
      subtitle: "Experience India's beauty during the rainy season",
      videoUrl: "https://videos.pexels.com/video-files/4009252/4009252-uhd_2560_1440_30fps.mp4",
      thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1200&h=600&fit=crop&crop=center"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Budget Travel Destinations in India for 2024",
      excerpt: "Discover incredible destinations across India that won't break the bank. From the serene backwaters of Kerala to the majestic mountains of Himachal Pradesh.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop&crop=center",
      date: "Dec 28, 2024",
      category: "Destinations",
      readTime: "5 min read",
      trending: true
    },
    {
      id: 2,
      title: "How to Find the Cheapest Flight Deals: Insider Tips",
      excerpt: "Learn the secrets that travel experts use to find unbeatable flight prices. From booking timing to hidden city ticketing strategies.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=400&fit=crop&crop=center",
      date: "Dec 25, 2024",
      category: "Travel Tips",
      readTime: "7 min read",
      trending: false
    },
    {
      id: 3,
      title: "Solo Travel in India: A Complete Safety Guide",
      excerpt: "Everything you need to know about traveling solo in India, from safety tips to the best solo-friendly destinations.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=400&fit=crop&crop=center",
      date: "Dec 22, 2024",
      category: "Solo Travel",
      readTime: "6 min read",
      trending: true
    },
    {
      id: 4,
      title: "Monsoon Travel: Best Places to Visit During Rainy Season",
      excerpt: "Don't let the monsoon stop your travel plans. Discover beautiful destinations that come alive during the rainy season.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop&crop=center",
      date: "Dec 20, 2024",
      category: "Seasonal Travel",
      readTime: "4 min read",
      trending: false
    },
    {
      id: 5,
      title: "Digital Nomad Guide: Working While Traveling in India",
      excerpt: "The ultimate guide for digital nomads exploring India. Best co-working spaces, reliable internet, and nomad-friendly cities.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=400&fit=crop&crop=center",
      date: "Dec 18, 2024",
      category: "Digital Nomad",
      readTime: "8 min read",
      trending: false
    },
    {
      id: 6,
      title: "Weekend Getaways from Major Indian Cities",
      excerpt: "Quick escape ideas for busy professionals. Discover amazing weekend destinations within 300km of major Indian cities.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center",
      date: "Dec 15, 2024",
      category: "Weekend Trips",
      readTime: "5 min read",
      trending: true
    }
  ];

  const categories = ["All", "Destinations", "Travel Tips", "Solo Travel", "Seasonal Travel", "Digital Nomad", "Weekend Trips"];
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Video Slideshow Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <Carousel className="relative">
          <CarouselContent>
            {videoSlides.map((slide, index) => (
              <CarouselItem key={slide.id}>
                <div className="relative h-[70vh] flex items-center justify-center">
                  {/* Video Background */}
                  <div className="absolute inset-0">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={slide.thumbnail}
                    >
                      <source src={slide.videoUrl} type="video/mp4" />
                      <img src={slide.thumbnail} alt={slide.title} className="w-full h-full object-cover" />
                    </video>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
                    <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm">
                      <Play className="h-3 w-3 mr-1" />
                      Travel Insights & Tips
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm" />
          <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm" />
        </Carousel>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {videoSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentVideo ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentVideo(index)}
            />
          ))}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
      </section>

      {/* Featured Post */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="h-5 w-5 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-800">Featured Article</h2>
            </div>
            
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 group">
              <div className="md:flex">
                <div className="md:w-1/2 relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {featuredPost.trending && (
                    <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-600 text-white border-0 shadow-lg">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group/btn">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/50 backdrop-blur-sm border-y border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  category === "All" 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg" 
                    : "bg-white/80 hover:bg-white border-gray-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer group border-0 bg-white/90 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-blue-600/90 text-white border-0 backdrop-blur-sm">
                        {post.category}
                      </Badge>
                      {post.trending && (
                        <Badge className="bg-orange-500/90 text-white border-0 backdrop-blur-sm">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Hot
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-16">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Load More Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-white">Stay Updated with Travel Insights</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Get the latest travel tips, destination guides, and exclusive deals delivered to your inbox every week.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/90 border-0 focus:outline-none focus:ring-2 focus:ring-white text-gray-800 placeholder-gray-500"
                />
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-3 rounded-xl text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  Subscribe
                </Button>
              </div>
              <p className="text-blue-100 text-sm mt-4 opacity-80">
                Join 10,000+ travelers who trust CheapFareways for the best deals
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
