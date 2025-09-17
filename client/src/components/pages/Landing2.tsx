import { BarChart2, Check } from "lucide-react";
import React from "react";
import {
  LuUsers,
  LuBuilding,
  LuBookOpen,
  LuLayers,
  LuCog,
  LuSmartphone,
  LuClipboardCheck,
  LuVideo,
  LuMapPin,
  LuMail,
  LuPhone,
  LuBriefcase,
  LuStar,
} from "react-icons/lu";

/**
 * Landing page component for a learning‑management website.
 *
 * This component organises all of the sections required on the landing page
 * including a fixed header, hero section, features overview, testimonials,
 * statistics, pricing, about, contact form and footer.  Tailwind CSS utility
 * classes are used throughout to build a responsive layout.  Lucide icons
 * (loaded via the `react-icons/lu` package) illustrate different feature
 * categories and statistics.  Remote images hosted on Unsplash are used to
 * provide modern, professional photography.  See the citations in the
 * accompanying explanation for evidence supporting the feature descriptions.
 */
const Landing2: React.FC = () => {
  // Statistics values could be dynamically fetched from an API.  For now
  // placeholder values are provided to illustrate the layout.
  const statistics = [
    {
      icon: <LuUsers className="w-8 h-8 text-blue-600" />,
      label: "Registered Learners",
      value: "500K+",
    },
    {
      icon: <LuBuilding className="w-8 h-8 text-blue-600" />,
      label: "Corporate Partners",
      value: "1.2K+",
    },
    {
      icon: <LuBookOpen className="w-8 h-8 text-blue-600" />,
      label: "Courses Created",
      value: "8K+",
    },
    {
      icon: <LuLayers className="w-8 h-8 text-blue-600" />,
      label: "Product Features",
      value: "20+",
    },
    {
      icon: <LuBriefcase className="w-8 h-8 text-blue-600" />,
      label: "Job Openings",
      value: "3.5K+",
    },
    {
      icon: <LuUsers className="w-8 h-8 text-blue-600" />,
      label: "Recruiters",
      value: "750+",
    },
  ];

  // Feature definitions.  Each entry pairs an icon with a title and
  // description describing a core capability of modern LMS platforms.  The
  // descriptions are paraphrased from authoritative sources: course management
  // lets administrators drag‑and‑drop various media types【392327601748770†L146-L152】;
  // SCORM/xAPI compliance enables easy uploading of standardised content【392327601748770†L154-L160】;
  // learning portals support multi‑tenant architectures for different
  // audiences【392327601748770†L162-L172】; integrations & automation reduce
  // administrative overhead by synchronising data with other systems【392327601748770†L204-L216】【392327601748770†L218-L229】;
  // learner experience stresses responsiveness and access on any device【392327601748770†L231-L239】;
  // exams & surveys provide assessment and feedback mechanisms【392327601748770†L246-L252】【392327601748770†L254-L260】;
  // webinar integration brings virtual classrooms into the LMS【392327601748770†L262-L277】;
  // and blended learning combines online modules with instructor‑led sessions【392327601748770†L283-L293】.
  const features = [
    {
      icon: <LuBookOpen className="w-8 h-8 text-blue-600 mb-4" />,
      title: "Course Management",
      description:
        "Easily create and organise learning paths using drag‑and‑drop tools across multiple media types such as PDFs, slides, videos and live sessions.",
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-blue-600 mb-4" />,
      title: "SCORM & xAPI",
      description:
        "Upload industry‑standard SCORM or xAPI packages instantly, ensuring compatibility with a wide range of authoring tools.",
    },
    {
      icon: <LuLayers className="w-8 h-8 text-blue-600 mb-4" />,
      title: "Learning Portals",
      description:
        "Serve different audiences through a multi‑tenant architecture with sub‑portals and tailored course catalogues.",
    },
    {
      icon: <LuCog className="w-8 h-8 text-blue-600 mb-4" />,
      title: "Integrations & Automation",
      description:
        "Integrate with HR systems, CRMs and webinar tools; automate enrolment, notifications and data synchronisation.",
    },
    {
      icon: <LuSmartphone className="w-8 h-8 text-blue-600 mb-4" />,
      title: "Learner Experience",
      description:
        "Provide a responsive interface accessible on any device and encourage self‑directed learning with an extensive course catalogue.",
    },
    {
      icon: <Check className="w-8 h-8 text-blue-600 mb-4" />,
      title: "Exams & Assessments",
      description:
        "Support multiple question types, auto‑graded tests and personalised feedback to measure learner progress.",
    },
    {
      icon: <LuClipboardCheck className="w-8 h-8 text-blue-600 mb-4" />,
      title: "Surveys & Feedback",
      description:
        "Gather learner feedback inside courses and leverage reports to improve programme quality.",
    },
    {
      icon: <LuVideo className="w-8 h-8 text-blue-600 mb-4" />,
      title: "Webinar & Blended Learning",
      description:
        "Host live virtual sessions, integrate with popular video platforms and blend online modules with instructor‑led training.",
    },
  ];

  // Testimonials data.  These are fictional examples and would normally be
  // supplied by the backend or CMS.  Each includes a quote, the person’s
  // name/role and a portrait image hosted on Unsplash.
  const testimonials = [
    {
      image:
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=600&q=80",
      quote:
        "“This platform made onboarding new employees effortless.  The intuitive course builder and detailed analytics have improved our training outcomes tremendously.”",
      name: "Priya Shah",
      role: "L&D Manager, TechSolutions",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415b0b?auto=format&fit=crop&w=600&q=80",
      quote:
        "“As a freelance designer, I was able to upskill at my own pace.  The variety of courses and flexible scheduling fit perfectly around my workload.”",
      name: "Arjun Mehta",
      role: "Freelance Designer",
    },
  ];

  // Pricing tiers.  Optional plans highlight different levels of service.
  const pricing = [
    {
      name: "Starter",
      price: "Free",
      features: [
        "Access to free courses",
        "Basic analytics",
        "Community support",
      ],
      highlight: false,
    },
    {
      name: "Professional",
      price: "₹2,499/mo",
      features: [
        "Unlimited courses",
        "Advanced analytics",
        "Integration APIs",
        "Email support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Contact us",
      features: [
        "Custom onboarding",
        "Dedicated account manager",
        "Tailored integrations",
        "24/7 priority support",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow z-30">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <a href="#home" className="text-2xl font-bold text-blue-600">
            LearnConnect
          </a>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="hover:text-blue-600">
              About Us
            </a>
            <a href="#products" className="hover:text-blue-600">
              Products
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact Us
            </a>
            <a
              href="/login"
              className="ml-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Login
            </a>
          </nav>
          {/* Mobile hamburger could be implemented here if desired */}
        </div>
      </header>

      {/* Main content wrapper pushes content below the fixed header */}
      <main className="pt-20">
        {/* Hero / Connecting Talent */}
        <section
          id="home"
          className="relative h-[70vh] flex items-center justify-center"
        >
          <img
            src="https://cdn.dribbble.com/userupload/13933073/file/original-f8f01427f27c84117a94884345815ff5.jpg?resize=1600x1200&vertical=center"
            alt="Remote team collaboration via video conference"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Connecting Talent
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-6">
              Empower your workforce and yourself with a comprehensive learning
              management system.  Manage courses, automate onboarding and reach
              learners anywhere with flexible, mobile‑friendly training.
            </p>
            <a
              href="#products"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              Explore Features
            </a>
          </div>
        </section>

        {/* Features / Product Overview */}
        <section id="products" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center"
                >
                  {feature.icon}
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12">
              Testimonials
            </h2>
            <div className="grid gap-10 md:grid-cols-2">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center text-center"
                >
                  <img
                    src={t.image}
                    alt={`${t.name} portrait`}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <p className="italic text-gray-700 mb-4">{t.quote}</p>
                  <div className="font-semibold text-gray-800">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                  <div className="flex justify-center mt-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <LuStar
                        key={i}
                        className="w-4 h-4 text-yellow-500 inline-block mx-0.5"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section id="statistics" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12">
              Platform Statistics
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {statistics.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center bg-white p-6 rounded-lg shadow"
                >
                  {stat.icon}
                  <div className="text-3xl font-bold mt-2 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            {/* Global LMS statistics summarising market growth and adoption */}
            <div className="mt-12 text-center text-sm text-gray-600 max-w-3xl mx-auto">
              <p className="mb-2">
                Online learning is a rapidly growing market.  Research shows that
                the market for online learning platforms in Asia alone will
                reach $49.33&nbsp;billion by 2025【816879969952673†L513-L517】 and could
                serve over 678&nbsp;million users by 2029【816879969952673†L513-L517】.
              </p>
              <p>
                In Africa, the e‑learning industry is projected to grow at an
                annual rate of 9.12% between 2025 and 2033【816879969952673†L538-L544】,
                underlining the global demand for flexible and accessible
                education.  Our platform is designed to meet this demand with
                scalable infrastructure and an inclusive learning experience.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing (optional) */}
        <section id="pricing" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12">
              Pricing Plans
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col p-8 border rounded-lg shadow-sm ${
                    plan.highlight ? "border-blue-600 shadow-lg" : ""
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs uppercase px-3 py-1 rounded">
                      Popular
                    </span>
                  )}
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    {plan.name}
                  </h3>
                  <div className="text-center text-4xl font-bold mb-4">
                    {plan.price}
                  </div>
                    <ul className="space-y-2 mb-6">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-4 h-4 text-green-600 mt-1 mr-2" />
                        <span className="text-sm text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-auto inline-block w-full text-center px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Choose Plan
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-8">
              About Us
            </h2>
            <div className="max-w-4xl mx-auto text-center text-gray-700 space-y-6">
              <p>
                LearnConnect is a modern learning management platform built by
                educators, technologists and industry experts.  Our mission is
                to bridge the gap between learners and opportunity by
                delivering high‑quality, accessible education.  We embrace
                flexible scheduling and personalised learning paths so that
                non‑traditional learners can pursue qualifications at their own
                pace【816879969952673†L589-L599】.
              </p>
              <p>
                Through mobile‑friendly interfaces and adaptive learning
                technologies, our platform empowers learners to access
                materials anywhere【816879969952673†L589-L600】 and tailor their
                experience to individual goals【816879969952673†L602-L607】.  We are
                committed to continuous improvement and thrive on feedback from
                our community of users and corporate partners.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-8">
              Contact Us
            </h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Contact form */}
              <form className="bg-gray-50 p-8 rounded-lg shadow space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email ID
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                  >
                    Contact Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
              {/* Contact details */}
              <div className="flex flex-col justify-center space-y-6 text-gray-700">
                <div className="flex items-start">
                  <LuMapPin className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <p>
                    Chennai Office<br />123 Learning Street<br />Chennai, TN 600001
                  </p>
                </div>
                <div className="flex items-start">
                  <LuPhone className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <p>+91 91234 56789</p>
                </div>
                <div className="flex items-start">
                  <LuMail className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <p>support@learnconnect.io</p>
                </div>
                <p>
                  Whether you're a learner looking for the right course or a
                  company interested in partnering with us, we'd love to hear
                  from you!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Partner with Us</h3>
            <p className="text-sm">
              Collaborate on training programmes, co‑create content or explore
              white‑labelling options for your organisation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  User Agreement
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Copyright Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Brand Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Languages
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest courses and product
              updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l bg-gray-700 text-gray-300 focus:outline-none"
              />
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          © {new Date().getFullYear()} LearnConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Landing2;