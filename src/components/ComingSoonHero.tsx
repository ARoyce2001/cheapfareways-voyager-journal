
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ComingSoonHero = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "We'll notify you when CheapFareways launches.",
      });
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 -left-10 w-96 h-96 bg-purple-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-blue-300 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/07ed63a3-0a1d-4e8e-94d0-80d516fa052d.png" 
              alt="CheapFareways Logo" 
              className="h-24 w-auto mx-auto mb-6"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Coming Soon
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-700 mb-4 font-semibold">
            Your Gateway to Affordable Travel
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're building India's most comprehensive Online Travel Agency. Get ready to discover 
            unbeatable flight deals, exclusive hotel offers, and seamless booking experiences.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✈️</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Best Flight Deals</h3>
                <p className="text-gray-600">Compare prices across airlines and find the cheapest fares</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏨</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Hotel Bookings</h3>
                <p className="text-gray-600">From budget stays to luxury resorts, all in one place</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Smart Recommendations</h3>
                <p className="text-gray-600">AI-powered suggestions tailored to your preferences</p>
              </CardContent>
            </Card>
          </div>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Be the first to know when we launch!
            </h3>
            <form onSubmit={handleEmailSignup} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button 
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
              >
                Notify Me
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-2">
              Get exclusive early access and special launch offers
            </p>
          </div>

          {/* Launch Timeline */}
          <div className="mt-16 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">What's Coming</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-blue-600">Phase 1:</strong> Flight booking platform
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-purple-600">Phase 2:</strong> Hotel reservations
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-blue-600">Phase 3:</strong> Travel packages
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <strong className="text-purple-600">Phase 4:</strong> Mobile app launch
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonHero;
