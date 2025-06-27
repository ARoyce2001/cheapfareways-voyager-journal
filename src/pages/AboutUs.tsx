
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h1>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                CheapFareways Pvt. Ltd. is an ambitious and forward-thinking Online Travel Aggregator (OTA) created with a clear goal: to make travel more affordable, accessible, and trustworthy for India's rising class of domestic travelers. Our platform is built on the belief that every Indian—regardless of where they live—deserves simple, affordable, and enjoyable travel experiences.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                At the helm of CheapFareways is our Co-Founder and Director, Mr. Vishal Roy, a seasoned entrepreneur with a multi-sectoral background that spans civil engineering, mining, toll operations, and digital business ventures. With over six years of firsthand experience in infrastructure execution and business management across India, Mr. Roy brings a uniquely grounded, operationally-strong, and execution-driven leadership style to the company.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Born and raised in Md. Bazar, Birbhum (West Bengal), Mr. Roy has been actively involved in both legacy and modern business domains. His work has spanned:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Large-scale civil works:</h3>
                  <p className="text-gray-700">From national highway road construction and embankment grading to government-awarded earthwork projects.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Mining operations:</h3>
                  <p className="text-gray-700">He is the proprietor and partner of black stone and limestone mining units in key zones such as Panchami and Rampurhat in West Bengal and limestone mining in Meghalaya.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">NHAI toll management:</h3>
                  <p className="text-gray-700">Since 2013, Mr. Roy has handled toll fee collection contracts across India—Bihar, Maharashtra, Rajasthan, Meghalaya—generating multi-crore turnovers, including a ₹28+ crore contract with Skylark Infra Engineering.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Petroleum retail:</h3>
                  <p className="text-gray-700">Mr. Roy also runs a fully operational IOCL petrol pump, JIBASMA Filling Station, on SH-11 in Birbhum, highlighting his diverse portfolio and strong operational capabilities.</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Over the years, Mr. Roy has consistently demonstrated the ability to mobilize resources quickly, deliver complex projects on time, and adapt to changing business climates. With a strong team of engineers, supervisors, accountants, and a fleet of machinery—from hydraulic excavators to survey equipment—he is known for his ability to execute at scale with speed and precision.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                CheapFareways is the digital expression of Mr. Roy's broader entrepreneurial journey, combining his business acumen with a strong vision to serve emerging Indian travelers. The company has been formed with the objective of creating an OTA that isn't just another travel app—it's a high-value, vernacular-friendly, and AI-enhanced travel platform for Bharat's Tier 2 and Tier 3 cities.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                In a world dominated by legacy OTAs focused mostly on urban customers, we are building for those who are currently underserved—college students, families, small business owners, and first-time fliers from small towns and regional belts.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Our platform is driven by a new generation of thinkers, designers, engineers, and marketers who believe that travel should not be a luxury, but a right for all Indians. We are simplifying every touchpoint—from discovery to booking to post-sales service—with a strong commitment to transparency, personalization, and support.
              </p>
            </div>

            {/* Mission Section */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-center italic text-lg">
                "To make travel affordable, accessible, and empowering for every Indian by building a high-performance, user-first OTA platform that bridges the digital and regional divide."
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                We're on a journey to transform how India travels, one tier-2 and tier-3 customer at a time. Here's what drives us:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">Affordability for All</h3>
                  <p className="text-gray-700 text-sm">We negotiate the best fares, provide zero-commission models for select services, and pass savings directly to our customers. With innovative pricing and transparent breakdowns, CheapFareways makes sure you never overpay again.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">Regional & Vernacular Support</h3>
                  <p className="text-gray-700 text-sm">We believe language should never be a barrier to planning your dream vacation or booking your emergency ticket. That's why we are building interfaces and customer support in Bengali, Hindi, and other regional languages.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">Hyperlocal Discovery</h3>
                  <p className="text-gray-700 text-sm">From hidden gems in Northeast India to underrated holiday spots in Jharkhand and Odisha, our curated AI-powered travel planner helps users explore places beyond mainstream tourist circuits.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">AI & Automation for Everyone</h3>
                  <p className="text-gray-700 text-sm">Our AI Trip Planner and intelligent search will simplify how travelers plan, modify, and personalize their journeys—whether it's booking a one-way train or designing a 5-day tour with hotel, taxi, and itinerary included.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">Service You Can Trust</h3>
                  <p className="text-gray-700 text-sm">Our foundation is built on reliability. We aim to provide 24/7 support, real human contact in local languages, and problem-solving that respects the urgency of travel—especially for emergencies, delays, or cancellations.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">Built for Bharat</h3>
                  <p className="text-gray-700 text-sm">While others look west, we look inward—to the real India. From the grassroots to the global, our dream is to help every Indian go farther, smarter, and happier with CheapFareways.</p>
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="text-center bg-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Come travel the new India with us</h3>
              <p className="text-gray-300">—where price meets trust, and where Bharat takes flight.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
