
import { useParams } from 'react-router-dom';
import { allBlogPosts } from '../data/allBlogPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams();
  
  const article = allBlogPosts.find(post => post.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-light text-white mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
          <Button 
            onClick={() => window.close()}
            className="bg-yellow-600 hover:bg-yellow-700 text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Close Tab
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-gray-300 mb-6">
              <span className="px-3 py-1 bg-yellow-600/30 backdrop-blur-md rounded-full border border-yellow-600/50">
                {article.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <User className="w-4 h-4" />
              <span>By {article.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">
              {article.content ? (
                article.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))
              ) : (
                <div className="text-gray-300 leading-relaxed space-y-6">
                  <p>Welcome to this comprehensive guide about {article.title.toLowerCase()}. This article will provide you with detailed insights and practical information to enhance your travel experience.</p>
                  
                  <p>India offers incredible diversity in its landscapes, cultures, and experiences. Whether you're seeking adventure in the mountains, relaxation on pristine beaches, or cultural immersion in ancient cities, this guide will help you make the most of your journey.</p>
                  
                  <p>Our expert recommendations are based on extensive research and firsthand experience, ensuring you get authentic and reliable information for your travels.</p>
                  
                  <h2 className="text-2xl font-light text-yellow-300 mt-8 mb-4">Key Highlights</h2>
                  
                  <p>This destination offers unique experiences that cater to different types of travelers. From budget-conscious backpackers to luxury seekers, there's something special waiting for everyone.</p>
                  
                  <p>The local culture is rich and welcoming, with traditions that have been preserved for centuries. You'll have opportunities to interact with locals, taste authentic cuisine, and participate in cultural activities.</p>
                  
                  <h2 className="text-2xl font-light text-yellow-300 mt-8 mb-4">Practical Information</h2>
                  
                  <p>Planning is essential for a successful trip. Consider factors like weather, local customs, transportation options, and accommodation preferences when preparing for your journey.</p>
                  
                  <p>Safety should always be a priority. Stay informed about local conditions, keep important documents secure, and maintain communication with family or friends about your whereabouts.</p>
                  
                  <p>We hope this guide helps you create unforgettable memories and encourages you to explore more of what this incredible destination has to offer.</p>
                </div>
              )}
            </article>
            
            {/* Back Button */}
            <div className="mt-12 text-center">
              <Button 
                onClick={() => window.close()}
                className="bg-yellow-600 hover:bg-yellow-700 text-gray-900 px-8 py-3"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Close Tab
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
