import React from "react";
// Import icons from lucide-react. If your project uses another icon library
// such as react-icons/lucide, adjust the import paths accordingly.
import {
  Users,
  Briefcase,
  CheckCircle,
  Shield,
  Star,
  FileText,
  ListChecks,
  UserPlus,
} from "lucide-react";

/**
 * Landing page component
 *
 * This component implements a modern, responsive landing page using
 * TailwindCSS for styling and lucide icons for visual accents. The
 * layout includes a fixed navigation bar, a hero section, product
 * feature cards, an about section, testimonials, statistics, optional
 * pricing tiers, a contact form and a comprehensive footer. Images are
 * pulled from free stock photography sites via direct URLs; in a real
 * project these should be served from your own static assets or a CDN.
 */
const Landing: React.FC = () => {
  // Current year for the footer copyright line
  const currentYear = new Date().getFullYear();

  // List of product features. Each item contains an icon component,
  // a title and a description. Icons are coloured using Tailwind
  // utility classes.
  const features = [
    {
      icon: <Briefcase size={32} className="text-blue-600" />, 
      title: "Seamless Hiring Process",
      description:
        "Simplify recruitment with our intuitive platform and automate the entire flow.",
    },
    {
      icon: <Users size={32} className="text-blue-600" />,
      title: "Advanced Matching",
      description:
        "Find the right talent with AI‑powered matching algorithms that understand your needs.",
    },
    {
      icon: <CheckCircle size={32} className="text-blue-600" />,
      title: "User‑Friendly Interface",
      description:
        "Enjoy a clean and intuitive UI that enhances user experience for job seekers and recruiters.",
    },
    {
      icon: <Shield size={32} className="text-blue-600" />,
      title: "Secure & Reliable",
      description:
        "Your data is protected with enterprise‑grade security measures and reliable infrastructure.",
    },
  ];

  // Testimonials from users and partners. These are static examples; in
  // a production setting they could be fetched from an API or CMS and
  // curated by administrators.
  const testimonials = [
    {
      name: "Rahul S.",
      role: "Software Engineer",
      content:
        "TalentConnect helped me land my dream job in just a few weeks. The platform is intuitive and the opportunities are incredible.",
    },
    {
      name: "Priya K.",
      role: "HR Manager",
      content:
        "We've streamlined our hiring process with TalentConnect. The matching algorithm saved us countless hours.",
    },
    {
      name: "Akshay M.",
      role: "Product Manager",
      content:
        "The community features and content creation tools have been invaluable for building our employer brand.",
    },
  ];

  // Key statistics to display. Replace the hard‑coded values with real
  // counts from your backend or analytics service.
  const stats = [
    {
      label: "Users",
      value: 25000,
      icon: <Users className="text-blue-600" size={32} />,
    },
    {
      label: "Corporates",
      value: 1500,
      icon: <Briefcase className="text-blue-600" size={32} />,
    },
    {
      label: "Content Created",
      value: 10000,
      icon: <FileText className="text-blue-600" size={32} />,
    },
    {
      label: "Openings",
      value: 500,
      icon: <ListChecks className="text-blue-600" size={32} />,
    },
    {
      label: "Recruiters",
      value: 1200,
      icon: <UserPlus className="text-blue-600" size={32} />,
    },
  ];

  // Optional pricing plans. You can remove this section entirely if you
  // choose not to display pricing information.
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Access to job listings",
        "Basic profile",
        "Community access",
      ],
      featured: false,
    },
    {
      name: "Pro",
      price: "₹599/mo",
      features: [
        "Everything in Basic",
        "Priority matching",
        "Unlimited applications",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Dedicated account manager",
        "Advanced analytics",
        "Custom integrations",
      ],
      featured: false,
    },
  ];

  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-white shadow fixed w-full z-20 top-0 left-0">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-blue-600">
            TalentConnect
          </a>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              About Us
            </a>
            <a
              href="#products"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Products
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Testimonials
            </a>
            <a
              href="#statistics"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Statistics
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Contact Us
            </a>
          </div>
          {/* Login button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex items-center justify-center h-screen pt-16 overflow-hidden"
      >
        {/* Background image */}
        <img
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Team collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60" />
        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Connecting Talent
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Where ambition meets opportunity. Join thousands of professionals
            and companies building the future together.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Products / Features Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Our Products
          </h2>
          <p className="mt-2 text-gray-600 text-center mb-8">
            Highlighting the features that support your growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {feat.title}
                </h3>
                <p className="mt-2 text-gray-600">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          {/* Image on the left for desktop, top for mobile */}
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/1647919/pexels-photo-1647919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Team presentation"
              className="rounded-lg shadow-lg object-cover w-full h-96"
            />
          </div>
          {/* Text content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              About Us
            </h2>
            <p className="text-gray-600 mb-4">
              TalentConnect is a comprehensive platform designed to bridge
              the gap between ambitious professionals and forward‑thinking
              organisations. Our mission is to empower individuals to
              discover their potential and help companies find the perfect
              match for their evolving needs.
            </p>
            <p className="text-gray-600 mb-4">
              With an innovative suite of tools and a vibrant community,
              we provide an ecosystem where learning, growth and
              collaboration thrive. From rich content and networking
              opportunities to advanced hiring solutions, we connect the
              dots so that talent and opportunity can flourish together.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Testimonials
          </h2>
          <p className="mt-2 text-gray-600 text-center mb-8">
            Hear what our users and partners have to say.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-6 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  {/* Display five stars for each testimonial */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="text-yellow-500" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 italic flex-grow">“{test.content}”</p>
                <div className="mt-4">
                  <h4 className="font-bold text-gray-800">{test.name}</h4>
                  <span className="text-sm text-gray-500">{test.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Statistics
          </h2>
          <p className="mt-2 text-gray-600 text-center mb-8">
            A glimpse into our growing community.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-6 text-center"
              >
                <div className="flex justify-center">{stat.icon}</div>
                <h3 className="mt-4 text-3xl font-bold text-blue-600">
                  {stat.value.toLocaleString()}
                </h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Pricing
          </h2>
          <p className="mt-2 text-gray-600 text-center mb-8">
            Choose a plan that fits your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={
                  `rounded-lg p-6 border ` +
                  (plan.featured
                    ? "border-blue-600 shadow-xl"
                    : "border-gray-200 shadow") +
                  " bg-white"
                }
              >
                <h3 className="text-xl font-bold text-gray-800">
                  {plan.name}
                </h3>
                <p className="mt-4 text-4xl font-extrabold text-blue-600">
                  {plan.price}
                </p>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 mt-1"
                        size={20}
                      />
                      <span className="text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Contact Us
          </h2>
          <p className="mt-2 text-gray-600 text-center mb-8">
            We'd love to hear from you. Reach out with any questions or
            suggestions.
          </p>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email ID</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Contact Number</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 focus:outline-none focus:border-blue-600"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Partner with Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Become a Partner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  User Agreement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Copyright Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Brand Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Languages
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          © {currentYear} TalentConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Landing;