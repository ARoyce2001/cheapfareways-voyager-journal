
import { blogArticles } from './blogData';

// Curated images for different article topics
const articleImages = [
  "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=400&fit=crop&crop=center", // Wildlife/National Parks
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center", // Mountain/Himalayas
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=400&fit=crop&crop=center", // Golden Triangle/Taj Mahal
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=400&fit=crop&crop=center", // South India temples
  "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&h=400&fit=crop&crop=center", // Rajasthan desert/forts
  "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?w=800&h=400&fit=crop&crop=center", // Spiritual/temples
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop&crop=center", // Northeast India nature
  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop&crop=center", // Goa beaches
  "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?w=800&h=400&fit=crop&crop=center", // Caves/archaeology
  "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=400&fit=crop&crop=center", // Kerala backwaters
  "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&h=400&fit=crop&crop=center", // India festivals
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center", // Street food
  "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&h=400&fit=crop&crop=center", // Ayurveda/wellness
  "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=400&fit=crop&crop=center", // Train travel
  "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=400&fit=crop&crop=center", // Art and crafts
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=400&fit=crop&crop=center", // Tea gardens
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=400&fit=crop&crop=center", // Beaches and islands
  "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=400&fit=crop&crop=center"  // City architecture
];

// Read times for different article lengths
const readTimes = [
  "8 min read", "12 min read", "6 min read", "10 min read", "7 min read", 
  "9 min read", "11 min read", "5 min read", "13 min read", "8 min read",
  "6 min read", "9 min read", "7 min read", "10 min read", "8 min read",
  "11 min read", "6 min read", "9 min read"
];

// Categories for variety
const categories = [
  "Wildlife", "Adventure", "Culture", "Travel Guides", "Photography", 
  "Spiritual", "Adventure", "Beach", "Heritage", "Nature",
  "Festival", "Food & Drink", "Wellness", "Transportation", "Art & Culture",
  "Nature", "Beach", "Architecture"
];

// Ensure we have exactly 18 articles by extending the existing data if needed
const extendedBlogArticles = [...blogArticles];

// If we have fewer than 18 articles, we'll create additional ones based on common India travel topics
while (extendedBlogArticles.length < 18) {
  const additionalArticles = [
    {
      slug: "kerala-backwaters-houseboat-experience",
      title: "Kerala Backwaters: Ultimate Houseboat Experience Guide",
      excerpt: "Drift through Kerala's serene backwaters aboard traditional houseboats. Complete guide to booking, routes, and experiencing God's Own Country.",
      content: "Kerala's backwaters offer one of India's most tranquil travel experiences. Navigate through palm-fringed canals, witness rural life, and enjoy fresh seafood aboard traditional kettuvallams.\n\n**Best Time to Visit**\nOctober to March offers pleasant weather for backwater cruises.\n\n**Popular Routes**\nAlleppey to Kumarakom remains the most scenic route, offering diverse landscapes and cultural experiences.\n\n**Booking Tips**\nBook directly with operators for better rates and authentic experiences."
    },
    {
      slug: "india-festival-travel-guide",
      title: "Festival Travel in India: Celebrations Worth Planning Your Trip Around",
      excerpt: "Experience India's vibrant festivals from Holi in Mathura to Durga Puja in Kolkata. Your guide to festival travel planning.",
      content: "India's festival calendar offers incredible travel opportunities throughout the year. Each celebration provides unique cultural insights and unforgettable experiences.\n\n**Major Festivals**\nHoli, Diwali, Durga Puja, and Navratri each offer distinct regional variations and celebrations.\n\n**Planning Tips**\nBook accommodations well in advance during festival seasons as demand peaks significantly.\n\n**Cultural Etiquette**\nRespect local customs and dress codes when participating in religious festivals."
    },
    {
      slug: "indian-street-food-culinary-journey",
      title: "Indian Street Food: A Culinary Journey Across the Subcontinent",
      excerpt: "From Mumbai's vada pav to Delhi's chaat, explore India's incredible street food scene safely and deliciously.",
      content: "Indian street food represents the soul of the country's culinary heritage. Each region offers unique flavors and preparations passed down through generations.\n\n**Safety First**\nChoose busy stalls with high turnover for the freshest and safest street food experiences.\n\n**Regional Specialties**\nMumbai's bhel puri, Delhi's chole bhature, and Kolkata's kathi rolls each tell unique regional stories.\n\n**Best Food Streets**\nChandni Chowk in Delhi, Mohammad Ali Road in Mumbai, and Park Street in Kolkata offer incredible variety."
    },
    {
      slug: "ayurveda-wellness-retreats-india",
      title: "Ayurveda and Wellness Retreats: Healing Tourism in India",
      excerpt: "Discover authentic Ayurvedic treatments and wellness retreats across India, from Kerala's spice gardens to Rishikesh's yoga ashrams.",
      content: "India's ancient healing traditions offer modern travelers authentic wellness experiences. Ayurveda, yoga, and meditation practices provide holistic rejuvenation.\n\n**Authentic Centers**\nKerala leads in traditional Ayurvedic treatments, while Rishikesh excels in yoga and meditation retreats.\n\n**Treatment Options**\nPanchakarma, abhyanga, and specialized treatments address various health concerns naturally.\n\n**Choosing Retreats**\nResearch credentials and reviews to ensure authentic, qualified practitioners and genuine traditional methods."
    },
    {
      slug: "indian-railways-train-travel-guide",
      title: "Indian Railways: The Ultimate Train Travel Guide",
      excerpt: "Master India's extensive railway network with our comprehensive guide to classes, booking, and scenic routes.",
      content: "Indian Railways offers one of the world's most extensive and affordable transportation networks, connecting remote villages to major cities.\n\n**Booking Strategies**\nTatkal bookings, advance reservations, and waitlist management help secure train tickets during peak seasons.\n\n**Classes Explained**\nFrom AC First Class to General compartments, each class offers different comfort levels and pricing.\n\n**Scenic Routes**\nKonkan Railway, Darjeeling Himalayan Railway, and Palace on Wheels provide unforgettable journey experiences."
    },
    {
      slug: "indian-handicrafts-shopping-guide",
      title: "Indian Handicrafts: A Shopper's Guide to Authentic Art",
      excerpt: "Navigate India's rich handicraft traditions from Rajasthani textiles to Kashmiri carpets with our expert shopping guide.",
      content: "India's handicraft heritage spans millennia, with each region developing distinctive artistic traditions and techniques.\n\n**Regional Specialties**\nRajasthan's block prints, Kashmir's pashmina shawls, and Tamil Nadu's bronze sculptures represent centuries of craftsmanship.\n\n**Authentic Sources**\nGovernment emporiums, craft villages, and certified artisan cooperatives ensure genuine products and fair pricing.\n\n**Bargaining Tips**\nUnderstand local customs and price ranges to negotiate respectfully while supporting traditional craftspeople."
    },
    {
      slug: "darjeeling-tea-gardens-hill-stations",
      title: "Darjeeling and India's Tea Gardens: Hill Station Paradise",
      excerpt: "Explore India's tea country from Darjeeling's misty hills to Assam's vast plantations, including heritage railways and colonial charm.",
      content: "India's tea regions offer stunning landscapes, colonial history, and authentic tea experiences beyond typical tourist circuits.\n\n**Tea Tourism**\nPlantation stays, tea tasting sessions, and processing demonstrations provide immersive experiences.\n\n**Hill Station Appeal**\nDarjeeling, Ooty, and Munnar combine tea culture with pleasant climates and scenic beauty.\n\n**Heritage Railways**\nToy trains through tea gardens offer nostalgic journeys through India's colonial past and natural beauty."
    },
    {
      slug: "andaman-nicobar-islands-tropical-paradise",
      title: "Andaman & Nicobar Islands: India's Tropical Paradise",
      excerpt: "Discover pristine beaches, coral reefs, and unique tribal cultures in India's remote island territories.",
      content: "The Andaman and Nicobar Islands offer India's best tropical experiences with world-class diving, pristine beaches, and unique biodiversity.\n\n**Marine Life**\nCoral reefs, sea turtles, and tropical fish make these islands a diving and snorkeling paradise.\n\n**Historical Significance**\nCellular Jail and colonial history add depth to beach vacation experiences.\n\n**Island Hopping**\nHavelock, Neil Island, and Ross Island each offer distinct attractions and accommodation options."
    },
    {
      slug: "indian-architecture-heritage-buildings",
      title: "Indian Architecture: A Journey Through Heritage Buildings",
      excerpt: "From Mughal monuments to colonial structures, explore India's architectural diversity across centuries and styles.",
      content: "India's architectural heritage spans ancient temples, Mughal palaces, colonial buildings, and modern structures, telling stories of cultural evolution.\n\n**Architectural Styles**\nMughal, Dravidian, Indo-Islamic, and British colonial styles represent different historical periods and influences.\n\n**Preservation Efforts**\nASI monuments, UNESCO World Heritage sites, and conservation projects protect India's architectural legacy.\n\n**Photography Tips**\nBest lighting, permitted areas, and composition techniques for capturing architectural beauty respectfully."
    }
  ];
  
  // Add only as many as needed to reach 18
  const needed = 18 - extendedBlogArticles.length;
  extendedBlogArticles.push(...additionalArticles.slice(0, needed));
}

// Transform extended blog articles to match the expected structure
export const allBlogPosts = extendedBlogArticles.slice(0, 18).map((article, index) => ({
  id: article.slug,
  slug: article.slug,
  title: article.title,
  excerpt: article.excerpt,
  content: article.content,
  image: articleImages[index],
  category: categories[index],
  date: "2025",
  readTime: readTimes[index],
  author: "Travel Expert",
  seoTitle: article.seoTitle || article.title,
  metaDescription: article.metaDescription || article.excerpt,
  keywords: article.keywords || article.title.toLowerCase().split(' ').join(', ')
}));

console.log('Total blog posts loaded:', allBlogPosts.length);
console.log('Blog post slugs:', allBlogPosts.map(post => post.slug));
console.log('Blog post titles:', allBlogPosts.map(post => post.title));
