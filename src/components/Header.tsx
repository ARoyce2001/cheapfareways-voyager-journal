
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Centered Logo with Text */}
          <Link to="/" className="flex items-center space-x-4 flex-1 justify-center md:justify-start">
            <img 
              src="/lovable-uploads/07ed63a3-0a1d-4e8e-94d0-80d516fa052d.png" 
              alt="CheapFareways Logo" 
              className="h-16 w-auto"
            />
            <div className="hidden md:flex flex-col">
              <span className="text-2xl font-bold text-white">CheapFareways</span>
              <span className="text-sm text-blue-300">Your Travel Companion</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/blog" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium">
              Travel Blog
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                Destinations
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-slate-700">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">India</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">International</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">Popular Routes</a>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
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
          <div className="md:hidden mt-6 pb-4">
            <div className="flex flex-col space-y-4 text-center">
              <div className="md:hidden flex flex-col mb-4">
                <span className="text-xl font-bold text-white">CheapFareways</span>
                <span className="text-sm text-blue-300">Your Travel Companion</span>
              </div>
              <Link to="/" className="text-gray-300 hover:text-white py-2">Home</Link>
              <Link to="/blog" className="text-blue-400 hover:text-blue-300 py-2">Travel Blog</Link>
              <a href="#" className="text-gray-300 hover:text-white py-2">Destinations</a>
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
