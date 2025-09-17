import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import {
  FaMicrosoft,
  FaAmazon,
  FaGoogle,
  FaSlack,
  FaTrello,
  FaDropbox,
  FaDiscord,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import {
  FiUsers,
  FiTrendingUp,
  FiLayers,
  FiZap,
} from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';

// Import of the generated illustration used in the subscribe section.
// It must live in the same folder as this file so bundlers can
// resolve it.  The image shows an abstract businesswoman working at
// a laptop with analytics charts in the background.  See the
// instructions for details on generating images via the imagegen
// tool.
import subscribeIllustration from '../../assets/react.svg';

// Register GSAP plugins once to enable ScrollSmoother behaviour.
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/**
 * A fully composed landing page matching the provided design.
 * Each section is encapsulated in its own component and assembled
 * together within the Landing component.  Tailwind CSS supplies
 * spacing, colour and responsive behaviour.  GSAP ScrollSmoother
 * creates a smooth scrolling effect across the entire page.
 */
const Landing3: React.FC = () => {
  const smootherRef = useRef<any>(null);

  useEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2,
      effects: true,
    });
    return () => {
      smootherRef.current?.kill();
      smootherRef.current = null;
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="bg-[#f5f7ff] overflow-hidden">
      <div id="smooth-content">
        <Header />
        <Hero />
        <Brands />
        <Features />
        <Strategies />
        <ProvenMethods />
        <Partners />
        <Transparency />
        <Pricing />
        <Testimonials />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
};

export default Landing3;

/**
 * Header and primary navigation.  A sticky header sticks to the
 * top of the viewport and contains a logotype, navigation links and
 * a call to action.  On large screens the navigation is shown,
 * otherwise it collapses to preserve space.
 */
const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold text-purple-600">Stage</span>
        </div>
        <nav className="hidden lg:flex items-center space-x-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-purple-600 transition">Home</a>
          <a href="#features" className="hover:text-purple-600 transition">Solutions</a>
          <a href="#strategies" className="hover:text-purple-600 transition">Services</a>
          <a href="#pricing" className="hover:text-purple-600 transition">Pricing</a>
          <a href="#about" className="hover:text-purple-600 transition">About</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hidden lg:inline-block px-5 py-2 rounded-lg bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

/**
 * Hero section.  Splits into two columns on larger viewports with
 * text on the left and a stylised phone on the right.  The phone is
 * constructed from simple divs to avoid the need for external
 * photography and includes mini statistic cards floating above the
 * device.  Additional blurred circles sit in the background for
 * depth.
 */
const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 bg-white overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-300/30 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Text content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Optimize Sales
            <br />
            Using Strategic
            <br />
            Smart Management
          </h1>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0">
            Unlock your full revenue potential with data driven insights
            and personalised customer engagement.  Gain clarity into
            your funnel and take control of growth.
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <button className="px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition">
              Get Started Now
            </button>
            <button className="px-6 py-3 rounded-lg border border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition">
              Learn More
            </button>
          </div>
        </div>
        {/* Phone mockup */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="relative w-64 sm:w-72 h-96 bg-white rounded-3xl shadow-2xl p-6 flex flex-col justify-between">
            {/* Bar chart inside phone */}
            <div className="flex items-end justify-between h-40 mt-2">
              {/* Bars vary in height to suggest data */}
              <div className="w-3 sm:w-4 bg-purple-200 rounded-t-lg" style={{ height: '30%' }} />
              <div className="w-3 sm:w-4 bg-purple-300 rounded-t-lg" style={{ height: '55%' }} />
              <div className="w-3 sm:w-4 bg-purple-400 rounded-t-lg" style={{ height: '75%' }} />
              <div className="w-3 sm:w-4 bg-purple-500 rounded-t-lg" style={{ height: '90%' }} />
              <div className="w-3 sm:w-4 bg-purple-400 rounded-t-lg" style={{ height: '65%' }} />
              <div className="w-3 sm:w-4 bg-purple-300 rounded-t-lg" style={{ height: '50%' }} />
            </div>
            {/* Summary metrics at bottom of phone */}
            <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-2 text-xs text-gray-600">
              <div>
                <p className="font-medium text-gray-800">Revenue</p>
                <p className="text-purple-600 font-semibold">$12,098</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-800">Growth</p>
                <p className="text-green-500 font-semibold">+17%</p>
              </div>
            </div>
          </div>
          {/* Floating stat cards */}
          <div className="absolute -top-6 sm:-top-8 right-0 sm:right-4 bg-white shadow-xl rounded-xl px-4 py-2 text-xs flex flex-col items-start">
            <span className="text-purple-600 font-bold">$9,231</span>
            <span className="text-gray-600">Sales Today</span>
          </div>
          <div className="absolute bottom-8 sm:bottom-12 -left-4 sm:-left-8 bg-white shadow-xl rounded-xl px-4 py-2 text-xs flex flex-col items-start">
            <span className="text-green-500 font-bold">+4.5%</span>
            <span className="text-gray-600">Target Achieved</span>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Brands section.  Displays partner logos horizontally.  Icons are
 * sized consistently and tinted grey to blend with the neutral
 * background.  On hover the colour transitions to purple to add
 * subtle interaction.
 */
const Brands: React.FC = () => {
  const logos = [FaMicrosoft, FaAmazon, FaGoogle, FaSlack, FaTrello];
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8">
        {logos.map((Logo, idx) => (
          <Logo
            key={idx}
            className="text-4xl text-gray-400 hover:text-purple-600 transition"
          />
        ))}
      </div>
    </section>
  );
};

/**
 * Features section.  Four cards highlight the core value props of
 * the product.  Each card contains an icon, a heading and a short
 * description.  The grid gracefully collapses on smaller screens.
 */
const Features: React.FC = () => {
  const items = [
    {
      icon: FiLayers,
      title: 'Data Driven Marketing',
      description:
        'Collect and interpret customer behaviour to optimise every stage of your funnel.',
    },
    {
      icon: FiUsers,
      title: 'Personalised Engagement',
      description:
        'Deliver targeted experiences that delight your customers and increase loyalty.',
    },
    {
      icon: FiTrendingUp,
      title: 'Optimise Performance',
      description:
        'Surface actionable insights and benchmarks to drive continuous improvement.',
    },
    {
      icon: FiZap,
      title: 'Automation & CRM',
      description:
        'Integrate seamlessly with your existing tools and automate routine tasks.',
    },
  ];
  return (
    <section id="features" className="py-20 bg-[#f5f7ff]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
          Achieve Success with Premier Sales Management
        </h2>
        <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
          Power your revenue engine with best in class tools and expert support.
        </p>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-purple-50 text-purple-600">
                <Icon className="text-2xl" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Strategies section.  Demonstrates how expert tactics translate into
 * real world dashboards.  Includes two columns of analytic cards and
 * tables inspired by the original design.  Using basic HTML
 * elements keeps the markup accessible while Tailwind handles the
 * styling.
 */
const Strategies: React.FC = () => {
  // Dummy transaction data used in the transaction report table.
  const transactions = [
    { id: 1, name: 'Campaign A', amount: '$2,100', status: 'Paid' },
    { id: 2, name: 'Campaign B', amount: '$1,850', status: 'Pending' },
    { id: 3, name: 'Campaign C', amount: '$4,230', status: 'Paid' },
    { id: 4, name: 'Campaign D', amount: '$980', status: 'Failed' },
  ];
  return (
    <section id="strategies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
          Expert Strategies for Sales Management Growth
        </h2>
        <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
          Turn insights into action with intuitive dashboards and reports that
          accelerate revenue growth.
        </p>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: analytics card */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#f5f7ff] rounded-2xl p-6 shadow-inner">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Top Product Showcase
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Product list */}
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center justify-between">
                    <span>Product Alpha</span>
                    <span className="font-semibold text-gray-900">$850</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Product Beta</span>
                    <span className="font-semibold text-gray-900">$730</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Product Gamma</span>
                    <span className="font-semibold text-gray-900">$1,020</span>
                  </li>
                </ul>
                {/* Simple bar chart */}
                <div className="flex items-end justify-between h-32 space-x-2">
                  <div className="w-full bg-purple-200 rounded-t" style={{ height: '50%' }} />
                  <div className="w-full bg-purple-300 rounded-t" style={{ height: '70%' }} />
                  <div className="w-full bg-purple-400 rounded-t" style={{ height: '30%' }} />
                  <div className="w-full bg-purple-500 rounded-t" style={{ height: '80%' }} />
                </div>
              </div>
            </div>
            {/* Latest transaction report */}
            <div className="bg-[#f5f7ff] rounded-2xl p-6 shadow-inner overflow-x-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Latest Transaction Report
              </h3>
              <table className="min-w-full text-sm text-left">
                <thead>
                  <tr className="text-gray-500">
                    <th className="py-2 pr-4">Name</th>
                    <th className="py-2 pr-4">Amount</th>
                    <th className="py-2 pr-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-white">
                      <td className="py-2 pr-4 font-medium text-gray-800">
                        {tx.name}
                      </td>
                      <td className="py-2 pr-4">{tx.amount}</td>
                      <td className="py-2 pr-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            tx.status === 'Paid'
                              ? 'bg-green-100 text-green-600'
                              : tx.status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-600'
                              : 'bg-red-100 text-red-600'
                          }`}
                        >
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Right column: campaign overview */}
          <div className="space-y-8">
            <div className="bg-[#f5f7ff] rounded-2xl p-6 shadow-inner h-full flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Campaign Overview
              </h3>
              <div className="flex-1 flex items-end space-x-2 mt-4">
                {/* Vertical bars representing campaign performance */}
                <div className="flex-1 flex items-end justify-between">
                  <div className="w-2 bg-purple-200 rounded-t" style={{ height: '20%' }} />
                  <div className="w-2 bg-purple-300 rounded-t" style={{ height: '40%' }} />
                  <div className="w-2 bg-purple-400 rounded-t" style={{ height: '60%' }} />
                  <div className="w-2 bg-purple-500 rounded-t" style={{ height: '80%' }} />
                  <div className="w-2 bg-purple-400 rounded-t" style={{ height: '50%' }} />
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6">
                Monitor campaign reach and conversion in real time.  Spot trends
                quickly and adjust tactics on the fly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * ProvenMethods section.  Illustrates how users can accelerate their
 * success with an integrated dashboard.  A faux dashboard card
 * composed of statistics and a larger bar chart conveys the idea of
 * having everything in one place.  Tabs along the top hint at
 * additional functionality.
 */
const ProvenMethods: React.FC = () => {
  return (
    <section className="py-20 bg-[#f5f7ff]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
          Proven Methods For Accelerating Sales Success
        </h2>
        <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
          Align your teams, track progress and make informed decisions faster with our all in one platform.
        </p>
        <div className="mt-12 bg-white rounded-3xl shadow-xl p-6 md:p-10 space-y-8">
          {/* Tabs */}
          <div className="flex space-x-4 overflow-x-auto">
            {['Dashboard', 'Performance', 'Customers', 'Campaigns', 'Reports'].map((tab) => (
              <button
                key={tab}
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-700 transition"
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Dashboard card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Summary metrics */}
            <div className="md:col-span-1 space-y-4">
              <div className="bg-[#f5f7ff] rounded-xl p-4">
                <p className="text-sm text-gray-500">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">$47,928</p>
                <p className="text-xs text-green-500 mt-1">+5% this month</p>
              </div>
              <div className="bg-[#f5f7ff] rounded-xl p-4">
                <p className="text-sm text-gray-500">New Leads</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">2,983</p>
                <p className="text-xs text-green-500 mt-1">+8% vs last month</p>
              </div>
              <div className="bg-[#f5f7ff] rounded-xl p-4">
                <p className="text-sm text-gray-500">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">6.1%</p>
                <p className="text-xs text-green-500 mt-1">+1.2% change</p>
              </div>
            </div>
            {/* Chart area */}
            <div className="md:col-span-2 flex flex-col justify-between">
              {/* Horizontal bar chart */}
              <div className="flex-1 flex items-end justify-between h-40 space-x-2">
                <div className="w-4 bg-purple-200 rounded-t" style={{ height: '40%' }} />
                <div className="w-4 bg-purple-300 rounded-t" style={{ height: '55%' }} />
                <div className="w-4 bg-purple-400 rounded-t" style={{ height: '70%' }} />
                <div className="w-4 bg-purple-500 rounded-t" style={{ height: '90%' }} />
                <div className="w-4 bg-purple-400 rounded-t" style={{ height: '65%' }} />
                <div className="w-4 bg-purple-300 rounded-t" style={{ height: '50%' }} />
                <div className="w-4 bg-purple-200 rounded-t" style={{ height: '35%' }} />
              </div>
              <div className="mt-6 text-sm text-gray-600">
                <p>
                  Review performance across campaigns in one place.  Discover which
                  efforts drive revenue and double down on what works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Partners section.  Displays icons of integrations with other
 * software.  Each integration is enclosed in a card with a title and
 * subtle border.  On hover the border and text change colour to
 * reinforce interactivity.
 */
const Partners: React.FC = () => {
  const partners = [
    { icon: FaSlack, name: 'Slack' },
    { icon: FaDropbox, name: 'Dropbox' },
    { icon: FaDiscord, name: 'Discord' },
    { icon: SiNotion, name: 'Notion' },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          We Partner with Leading Software Companies
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Seamlessly connect to the tools your team already uses to create a
          unified workflow.
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {partners.map(({ icon: Icon, name }, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl p-6 flex flex-col items-center hover:border-purple-600 hover:bg-purple-50 transition"
            >
              <Icon className="text-3xl text-purple-600 mb-2" />
              <span className="font-medium text-gray-800">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Transparency section.  Presents key statistics in bold typography.
 * The numbers are emphasised with a larger font size and coloured
 * accents.  Each stat includes a headline and supporting text.
 */
const Transparency: React.FC = () => {
  const stats = [
    {
      value: '80.8%',
      title: 'Product Transparency',
      description:
        'We believe in clear communication and share detailed insights into product performance.',
    },
    {
      value: '94.9%',
      title: 'Pricing Clarity',
      description:
        'No hidden fees.  You know exactly what you pay for with straightforward pricing tiers.',
    },
    {
      value: '87.4%',
      title: 'Customer Support',
      description:
        'Our responsive support team resolves your queries promptly and professionally.',
    },
  ];
  return (
    <section className="py-20 bg-[#f5f7ff]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Transparent Information Empowers Confident Decisions
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map(({ value, title, description }, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <p className="text-5xl font-extrabold text-purple-600">{value}</p>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Pricing section.  Three plans are offered with pricing and a list
 * of included features.  The middle plan is highlighted to draw
 * attention and uses a coloured ring to stand out.  Bullet points
 * utilise custom styling rather than unicode bullets to remain
 * accessible.
 */
const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$29',
      period: 'month',
      features: ['Single user', 'Basic analytics', 'Email support'],
      highlighted: false,
    },
    {
      name: 'Professional Plan',
      price: '$59',
      period: 'month',
      features: [
        'Up to 10 users',
        'Advanced analytics',
        'Priority support',
        'Automation tools',
      ],
      highlighted: true,
    },
    {
      name: 'Business Plan',
      price: '$99',
      period: 'month',
      features: [
        'Unlimited users',
        'Full analytics suite',
        'Dedicated account manager',
        'Integrations & API',
      ],
      highlighted: false,
    },
  ];
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Find The Pricing Plan That Fits You Perfectly
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Choose a plan that scales with your business.  Upgrade or downgrade
          anytime.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-3xl border border-gray-200 bg-[#f5f7ff] shadow-md flex flex-col ${
                plan.highlighted ? 'ring-4 ring-purple-200' : ''
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline justify-center text-gray-900">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="ml-1 text-sm font-medium text-gray-600">/{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-left">
                {plan.features.map((feat, fidx) => (
                  <li key={fidx} className="flex items-start gap-2">
                    <span className="mt-1 w-2 h-2 bg-purple-600 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Testimonials section.  Displays customer feedback cards with star
 * ratings, quotes and author details.  Avatars are represented with
 * simple coloured circles containing initials to avoid external
 * dependencies.  The grid adapts gracefully to different
 * screen widths.
 */
const Testimonials: React.FC = () => {
  const feedback = [
    {
      name: 'Asha R.',
      role: 'Marketing Manager',
      quote:
        'Stage has completely transformed how we track and optimise our campaigns.  The insights are invaluable.',
      rating: 5,
      colour: 'bg-red-400',
    },
    {
      name: 'Vikram S.',
      role: 'Sales Director',
      quote:
        'The automation features have saved us countless hours each week.  It has become an essential tool for our team.',
      rating: 5,
      colour: 'bg-blue-400',
    },
    {
      name: 'Priya M.',
      role: 'Entrepreneur',
      quote:
        'I love how easy it is to see what works.  The transparency around pricing and performance is refreshing.',
      rating: 4,
      colour: 'bg-green-400',
    },
    {
      name: 'Rohan K.',
      role: 'Product Lead',
      quote:
        'Integrating Stage with our existing stack was effortless.  The support team is always there when we need them.',
      rating: 5,
      colour: 'bg-purple-400',
    },
    {
      name: 'Sonia D.',
      role: 'Growth Hacker',
      quote:
        'As a small startup, the pricing tier fits us perfectly and we still get advanced analytics features.',
      rating: 4,
      colour: 'bg-yellow-400',
    },
    {
      name: 'Arjun L.',
      role: 'CEO',
      quote:
        'Stage helps us stay ahead of our competition with clear data and actionable advice.',
      rating: 5,
      colour: 'bg-pink-400',
    },
  ];
  return (
    <section className="py-20 bg-[#f5f7ff]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          What Our Satisfied Clients Have To Say
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Empowering organisations of all sizes with the confidence to reach
          their full potential.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedback.map((fb, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between hover:shadow-xl transition"
            >
              <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: fb.rating }).map((_, starIdx) => (
                  <AiFillStar key={starIdx} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 flex-1 leading-relaxed mb-4">
                “{fb.quote}”
              </p>
              <div className="flex items-center mt-auto">
                <div
                  className={`flex-shrink-0 w-10 h-10 ${fb.colour} rounded-full flex items-center justify-center text-white font-semibold`}
                >
                  {fb.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div className="ml-3 text-left">
                  <p className="font-semibold text-gray-900">{fb.name}</p>
                  <p className="text-sm text-gray-500">{fb.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Subscribe section.  Encourages visitors to sign up for updates.
 * Includes a simple email capture form with a call to action and a
 * decorative illustration.  The layout splits into two columns on
 * larger screens.
 */
const Subscribe: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Subscribe For Updates On Sales Management
          </h2>
          <p className="text-gray-600 mt-4">
            Stay up to date with the latest tips and best practices for
            managing your sales pipeline.  No spam, promise!
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex justify-center">
          <img
            src={subscribeIllustration}
            alt="Businesswoman illustration"
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </section>
  );
};

/**
 * Footer section.  Provides navigation links, company description
 * and social media icons.  The layout scales across devices and
 * ensures that content remains legible with sufficient contrast.
 */
const Footer: React.FC = () => {
  // Compute the current year once for display in the copyright line.
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#f5f7ff] border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-2xl font-extrabold text-purple-600 mb-2">Stage</h3>
          <p className="text-gray-600 text-sm">
            Stage is a comprehensive sales management platform designed to
            streamline your workflow, enhance transparency and accelerate
            growth.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-500 hover:text-purple-600 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-purple-600 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-purple-600 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-purple-600 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-purple-600 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition">
                API Reference
              </a>
            </li>
          </ul>
        </div>
        {/* About Us */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">About Us</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-purple-600 transition">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Customer Support */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Customer Support</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-purple-600 transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
        <p>&copy; {year} Stage.  All rights reserved.</p>
      </div>
    </footer>
  );
};