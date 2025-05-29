
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Budget Travel Destinations in India for 2024",
      excerpt: "Discover incredible destinations across India that won't break the bank. From the serene backwaters of Kerala to the majestic mountains of Himachal Pradesh.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop",
      date: "December 28, 2024",
      category: "Destinations",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How to Find the Cheapest Flight Deals: Insider Tips",
      excerpt: "Learn the secrets that travel experts use to find unbeatable flight prices. From booking timing to hidden city ticketing strategies.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=250&fit=crop",
      date: "December 25, 2024",
      category: "Travel Tips",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Solo Travel in India: A Complete Safety Guide",
      excerpt: "Everything you need to know about traveling solo in India, from safety tips to the best solo-friendly destinations.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop",
      date: "December 22, 2024",
      category: "Solo Travel",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Monsoon Travel: Best Places to Visit During Rainy Season",
      excerpt: "Don't let the monsoon stop your travel plans. Discover beautiful destinations that come alive during the rainy season.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop",
      date: "December 20, 2024",
      category: "Seasonal Travel",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Digital Nomad Guide: Working While Traveling in India",
      excerpt: "The ultimate guide for digital nomads exploring India. Best co-working spaces, reliable internet, and nomad-friendly cities.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=250&fit=crop",
      date: "December 18, 2024",
      category: "Digital Nomad",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Weekend Getaways from Major Indian Cities",
      excerpt: "Quick escape ideas for busy professionals. Discover amazing weekend destinations within 300km of major Indian cities.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop",
      date: "December 15, 2024",
      category: "Weekend Trips",
      readTime: "5 min read"
    }
  ];

  const categories = ["All", "Destinations", "Travel Tips", "Solo Travel", "Seasonal Travel", "Digital Nomad", "Weekend Trips"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CheapFareways Travel Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your ultimate resource for travel tips, destination guides, and money-saving travel hacks
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Stay Updated with Travel Insights</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest travel tips, destination guides, and exclusive deals delivered to your inbox every week.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
