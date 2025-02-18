import React from 'react';
import { Phone, Mail, Clock, MapPin, Paintbrush as Paint, Shield, ThumbsUp, Sparkles, Star, CheckCircle2, Image as ImageIcon, Calendar, Building2, Users, Trophy, Wrench } from 'lucide-react';
import logo from './components/Logo.png';

function App() {
  const locations = [
    {
      city: "Denver",
      state: "CO",
      phone: "(303) 555-5555",
      coverage: ["Boulder", "Aurora", "Lakewood", "Littleton"]
    },
    {
      city: "Phoenix",
      state: "AZ",
      phone: "(602) 555-5555",
      coverage: ["Scottsdale", "Mesa", "Chandler", "Gilbert"]
    },
    {
      city: "Salt Lake City",
      state: "UT",
      phone: "(801) 555-5555",
      coverage: ["Provo", "Orem", "Sandy", "West Jordan"]
    },
    {
      city: "Las Vegas",
      state: "NV",
      phone: "(702) 555-5555",
      coverage: ["Henderson", "North Las Vegas", "Summerlin", "Spring Valley"]
    }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      text: "Paint Puncher transformed our entire office complex. Their team handled the large-scale project professionally and delivered exceptional results.",
      rating: 5,
      location: "Denver, CO",
      type: "Commercial Client"
    },
    {
      name: "Mike Anderson",
      text: "We've used Paint Puncher for multiple properties across Phoenix. Their consistency and quality across locations is impressive.",
      rating: 5,
      location: "Phoenix, AZ",
      type: "Property Management"
    },
    {
      name: "Emily Rodriguez",
      text: "From our small starter home to our current luxury property, Paint Puncher has always delivered premium quality. Truly the best in Salt Lake City!",
      rating: 5,
      location: "Salt Lake City, UT",
      type: "Residential Client"
    },
    {
      name: "David Chen",
      text: "The attention to detail on our historic building restoration was remarkable. Paint Puncher's expertise in heritage properties is unmatched.",
      rating: 5,
      location: "Denver, CO",
      type: "Commercial Property Owner"
    },
    {
      name: "Lisa Martinez",
      text: "Their color consultation service helped us make the perfect choice for our home exterior. The team was professional and the results are stunning.",
      rating: 5,
      location: "Las Vegas, NV",
      type: "Residential Client"
    },
    {
      name: "Robert Wilson",
      text: "Paint Puncher handled our multi-unit apartment complex with minimal disruption to tenants. Their organization and efficiency were impressive.",
      rating: 5,
      location: "Phoenix, AZ",
      type: "Property Developer"
    },
    {
      name: "Jennifer Taylor",
      text: "The cabinet refinishing service transformed our kitchen completely. The team's craftsmanship and attention to detail exceeded our expectations.",
      rating: 5,
      location: "Salt Lake City, UT",
      type: "Residential Client"
    },
    {
      name: "Mark Thompson",
      text: "As a general contractor, I've worked with many painting companies. Paint Puncher consistently delivers the highest quality on commercial projects.",
      rating: 5,
      location: "Las Vegas, NV",
      type: "General Contractor"
    },
    {
      name: "Amanda Foster",
      text: "The epoxy flooring they installed in our warehouse is flawless. Their industrial coating expertise and professionalism are outstanding.",
      rating: 5,
      location: "Denver, CO",
      type: "Industrial Client"
    },
    {
      name: "Carlos Mendez",
      text: "Paint Puncher's team went above and beyond with our restaurant renovation. The custom finishes and attention to our brand colors were perfect.",
      rating: 5,
      location: "Phoenix, AZ",
      type: "Restaurant Owner"
    },
    {
      name: "Rachel White",
      text: "From start to finish, the exterior painting of our Victorian home was handled with exceptional care. The historical accuracy is impressive.",
      rating: 5,
      location: "Salt Lake City, UT",
      type: "Historical Home Owner"
    },
    {
      name: "Tom Sullivan",
      text: "Their commercial painting division handled our retail chain rollout flawlessly. Consistent quality across all our locations.",
      rating: 5,
      location: "Las Vegas, NV",
      type: "Retail Chain Owner"
    }
  ];

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Hotel Renovation",
      description: "Complete interior and exterior refresh",
      location: "Phoenix, AZ"
    },
    {
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
      title: "Corporate Office Complex",
      description: "Modern commercial transformation",
      location: "Denver, CO"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      title: "Historic Home Restoration",
      description: "Detailed heritage preservation",
      location: "Salt Lake City, UT"
    }
  ];

  const stats = [
    {
      icon: <Building2 className="h-8 w-8 text-pink-400 mx-auto" />,
      value: "15,000+",
      label: "Projects Completed"
    },
    {
      icon: <Users className="h-8 w-8 text-pink-400 mx-auto" />,
      value: "150+",
      label: "Professional Painters"
    },
    {
      icon: <MapPin className="h-8 w-8 text-pink-400 mx-auto" />,
      value: "4",
      label: "Major Markets"
    },
    {
      icon: <Trophy className="h-8 w-8 text-pink-400 mx-auto" />,
      value: "25+",
      label: "Years Experience"
    }
  ];

  return (
    <div className="min-h-screen bg-[rgb(38,42,51)]">
      {/* Header */}
      <header className="bg-[rgb(38,42,51)] shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Paint Puncher Logo" className="h-20" />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#reviews" className="text-gray-600 hover:text-pink-500 font-medium">Reviews</a>
            <a href="#locations" className="text-gray-600 hover:text-pink-500 font-medium">Locations</a>
            <a href="#services" className="text-gray-600 hover:text-pink-500 font-medium">Services</a>
            <a href="#projects" className="text-gray-600 hover:text-pink-500 font-medium">Projects</a>
          </nav>
          <div className="flex items-center space-x-6">
            <div className="hidden lg:block">
              <select className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-600">
                <option>Select Location</option>
                {locations.map((loc) => (
                  <option key={loc.city}>{loc.city}, {loc.state}</option>
                ))}
              </select>
            </div>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
              Get Free Quote
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[700px] bg-gradient-to-br from-[rgb(38,42,51)] via-[rgb(48,52,61)] to-[rgb(38,42,51)]">
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-6xl font-bold mb-6 leading-tight">The West's Most Trusted<br/>Painting Company</h1>
            <p className="text-xl mb-8 opacity-90">Serving the Mountain West with premium painting services for residential and commercial properties. Local expertise, regional reach.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-pink-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors flex items-center justify-center">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Free Estimate
              </button>
              <button className="bg-white text-pink-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <MapPin className="h-5 w-5 mr-2" />
                Find Your Location
              </button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center flex flex-col items-center">
                  {stat.icon}
                  <div className="mt-2 text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Trusted by homeowners and businesses across our service areas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.type}</p>
                  <div className="flex items-center mt-2 text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {review.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Serving major markets across the Mountain West with local teams and expertise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-pink-500 mr-2" />
                  <h3 className="text-xl font-semibold">{location.city}, {location.state}</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 mr-2" />
                    <span>{location.phone}</span>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Service Areas:</p>
                    <ul className="space-y-1">
                      {location.coverage.map((area, idx) => (
                        <li key={idx} className="text-gray-600">• {area}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive painting solutions for residential and commercial properties</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Commercial Painting</h3>
              <p className="text-gray-600 mb-4">Complete solutions for offices, retail spaces, and industrial facilities.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Minimal business disruption
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  After-hours scheduling
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Multi-location coordination
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Paint className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Residential Painting</h3>
              <p className="text-gray-600 mb-4">Premium interior and exterior painting for homes of all sizes.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Color consultation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Premium materials
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  5-year warranty
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Specialty Services</h3>
              <p className="text-gray-600 mb-4">Expert solutions for unique painting and finishing needs.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Cabinet refinishing
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Epoxy flooring
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Decorative finishes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Transforming spaces across the Mountain West</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-2">{project.description}</p>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors inline-flex items-center">
              <ImageIcon className="h-5 w-5 mr-2" />
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your painting project. Our local teams are ready to serve you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-pink-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Consultation
            </button>
            <select className="bg-pink-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-300 transition-colors">
              <option>Select Your Location</option>
              {locations.map((loc) => (
                <option key={loc.city}>{loc.city}, {loc.state} - {loc.phone}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <img src={logo} alt="Paint Puncher Logo" className="h-16" />
              </div>
              <p className="text-gray-400 mb-6">
                The Mountain West's premier painting company, delivering exceptional results across residential and commercial projects since 1998.
              </p>
              <div className="flex items-center space-x-4">
                <Shield className="h-6 w-6 text-pink-400" />
                <span className="text-gray-400">Licensed, Bonded & Insured in All Service Areas</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white">Commercial Painting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Residential Painting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cabinet Refinishing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Industrial Coatings</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Service Areas</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Locations</h4>
              <ul className="space-y-4">
                {locations.map((loc) => (
                  <li key={loc.city} className="text-gray-400">
                    <strong className="text-white">{loc.city}, {loc.state}</strong>
                    <br />
                    {loc.phone}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 Paint Puncher. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;