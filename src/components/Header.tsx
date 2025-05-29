
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/07ed63a3-0a1d-4e8e-94d0-80d516fa052d.png" 
              alt="CheapFareways Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
              Travel Blog
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                Destinations
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-700">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">India</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">International</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Popular Routes</a>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Notified
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className={`h-0.5 w-6 bg-gray-300 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-gray-300 transition-all mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-gray-300 transition-all mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/blog" className="text-gray-300 hover:text-white">Travel Blog</Link>
              <a href="#" className="text-gray-300 hover:text-white">Destinations</a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 w-full">
                Get Notified
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
