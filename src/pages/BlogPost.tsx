
import { useParams } from 'react-router-dom';
import { allBlogPosts } from '../data/allBlogPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams();
  
  console.log('Current slug:', slug);
  console.log('Available posts:', allBlogPosts.map(post => post.slug));
  
  const article = allBlogPosts.find(post => post.slug === slug);

  console.log('Found article:', article);

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
            src={article.image || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center"}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-gray-300 mb-6">
              <span className="px-3 py-1 bg-yellow-600/30 backdrop-blur-md rounded-full border border-yellow-600/50">
                {article.category || "Travel"}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{article.date || "Recent"}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime || "5 min read"}</span>
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
              <span>By {article.author || "Travel Expert"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">
              <div className="text-gray-300 leading-relaxed space-y-6">
                {article.content.split('\n\n').map((paragraph, index) => {
                  // Handle headers (lines starting with **)
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    const headerText = paragraph.slice(2, -2);
                    return (
                      <h2 key={index} className="text-2xl font-light text-yellow-300 mt-8 mb-4">
                        {headerText}
                      </h2>
                    );
                  }
                  
                  // Handle regular paragraphs
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="mb-6">
                        {paragraph}
                      </p>
                    );
                  }
                  
                  return null;
                })}
              </div>
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
